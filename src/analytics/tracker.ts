import { TRACKING_CONFIG } from '../config/tracking';
import { getStoredUTMs, captureAndStoreUTMs } from './utm';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export interface UserConversionData {
  phone_number?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  street?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
}

const USER_DATA_STORAGE_KEY = 'cursino_enhanced_user_data';

/**
 * Normaliza e formata os dados conforme estritamente exigido pelo Google Ads Enhanced Conversions:
 * - E-mail: sem espaços, minúsculas, pontos removidos em domínios gmail/googlemail
 * - Telefone: E.164 (+5511999999999)
 * - Endereço: first_name, last_name, postal_code, country (BR) são obrigatórios quando address é fornecido
 */
export function normalizeUserData(data: UserConversionData): Record<string, any> {
  const normalized: Record<string, any> = {};

  // 1. Telefone no padrão internacional E.164 (+5511999999999)
  if (data.phone_number) {
    const cleanDigits = data.phone_number.replace(/\D/g, '');
    if (cleanDigits.length >= 10) {
      normalized.phone_number = cleanDigits.startsWith('55') ? `+${cleanDigits}` : `+55${cleanDigits}`;
    }
  }

  // 2. Email formatado conforme diretrizes do Google
  if (data.email) {
    let cleanEmail = data.email.trim().toLowerCase();
    if (cleanEmail.includes('@gmail.com')) {
      const parts = cleanEmail.split('@');
      cleanEmail = `${parts[0].replace(/\./g, '')}@${parts[1]}`;
    } else if (cleanEmail.includes('@googlemail.com')) {
      const parts = cleanEmail.split('@');
      cleanEmail = `${parts[0].replace(/\./g, '')}@${parts[1]}`;
    }
    if (cleanEmail.includes('@') && cleanEmail.includes('.')) {
      normalized.email = cleanEmail;
    }
  }

  // 3. Endereço completo conforme regra do Google:
  // Se fornecer address, country (2 letras ISO) é obrigatório.
  if (data.first_name || data.city || data.postal_code) {
    const rawName = (data.first_name || '').trim();
    const nameParts = rawName.split(' ');
    const firstName = nameParts[0] || 'cliente';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'cursino';

    normalized.address = {
      first_name: firstName.toLowerCase(),
      last_name: lastName.toLowerCase(),
      postal_code: (data.postal_code || '04132-002').replace(/\s+/g, ''),
      city: (data.city || 'são paulo').trim().toLowerCase(),
      region: (data.region || 'SP').trim().toUpperCase(),
      country: (data.country || 'BR').trim().toUpperCase()
    };
  }

  return normalized;
}

/**
 * Normaliza e armazena dados de primeiro contato para Conversões Otimizadas (Enhanced Conversions)
 */
export function setEnhancedUserData(data: UserConversionData) {
  if (typeof window === 'undefined') return;

  const normalized = normalizeUserData(data);

  try {
    const existing = getStoredEnhancedUserData();
    const merged = { ...existing, ...normalized };
    if (normalized.address) {
      merged.address = { ...(existing.address || {}), ...normalized.address };
    }
    sessionStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(merged));

    // Define imediatamente no Google Ads gtag via API oficial in-page
    if (typeof window.gtag === 'function' && Object.keys(merged).length > 0) {
      window.gtag('set', 'user_data', merged);
    }
  } catch (e) {
    // Silently ignore storage errors
  }
}

/**
 * Recupera os dados do usuário para conversões otimizadas
 */
export function getStoredEnhancedUserData(): Record<string, any> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(USER_DATA_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // Silently ignore
  }
  return {};
}

/**
 * Tenta capturar dados de campos do formulário visíveis na página caso o usuário tenha preenchido
 */
export function harvestInPageUserData(): Record<string, any> {
  if (typeof document === 'undefined') return {};

  const harvested: UserConversionData = {};

  try {
    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    if (nameInput && nameInput.value.trim()) {
      harvested.first_name = nameInput.value.trim();
    }

    const phoneInput = document.querySelector('input[name="whatsapp"]') as HTMLInputElement;
    if (phoneInput && phoneInput.value.trim()) {
      harvested.phone_number = phoneInput.value.trim();
    }

    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value.trim()) {
      harvested.email = emailInput.value.trim();
    }

    const cityInput = document.querySelector('input[name="city"], select[name="city"]') as HTMLInputElement | HTMLSelectElement;
    if (cityInput && cityInput.value.trim()) {
      harvested.city = cityInput.value.trim();
    }
  } catch (e) {
    // Silently ignore DOM query errors
  }

  return normalizeUserData(harvested);
}

/**
 * Dispara eventos para GTM, GA4 (gtag), Google Ads e Meta Pixel com UTMs anexadas e Conversões Otimizadas In-Page
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  const utms = getStoredUTMs();
  const storedData = getStoredEnhancedUserData();
  const inPageHarvested = harvestInPageUserData();
  const enhancedUserData = { ...storedData, ...inPageHarvested };

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...utms,
    ...params
  };

  // Google Tag Manager / DataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);

    // Disparo específico para conversões de WhatsApp no DataLayer
    if (eventName === 'click_whatsapp') {
      window.dataLayer.push({
        event: 'generate_lead',
        lead_type: 'whatsapp_click',
        lead_source: 'site_button',
        page_origin: params.page_origin || window.location.pathname,
        button_location: params.button_location || 'unknown',
        user_data: Object.keys(enhancedUserData).length > 0 ? enhancedUserData : undefined,
        ...utms
      });
      window.dataLayer.push({
        event: 'conversion',
        conversion_type: 'whatsapp_click',
        google_ads_conversion_id: 'AW-18399321198',
        google_ads_label: '-GTuCKSL7OgcEO64vcVE',
        user_data: Object.keys(enhancedUserData).length > 0 ? enhancedUserData : undefined,
        ...utms
      });
    }

    // GA4 / Google Ads gtag com Código In-Page de Conversões Otimizadas
    if (typeof window.gtag === 'function') {
      // Se houver dados de usuário coletados in-page, seta globalmente antes de disparar o evento
      if (Object.keys(enhancedUserData).length > 0) {
        window.gtag('set', 'user_data', enhancedUserData);
      }

      window.gtag('event', eventName, eventPayload);

      // Dispara eventos padrão de conversão do Google Analytics / Google Ads
      if (eventName === 'click_whatsapp') {
        // Conversão Oficial Google Ads com snippet in-page
        const conversionConfig: Record<string, any> = {
          send_to: 'AW-18399321198/-GTuCKSL7OgcEO64vcVE',
          value: 1.0,
          currency: 'BRL',
          page_origin: params.page_origin || window.location.pathname,
          button_location: params.button_location || 'button',
          ...utms
        };

        if (Object.keys(enhancedUserData).length > 0) {
          conversionConfig.user_data = enhancedUserData;
        }

        window.gtag('event', 'conversion', conversionConfig);

        window.gtag('event', 'generate_lead', {
          method: 'WhatsApp',
          value: 1.0,
          currency: 'BRL',
          lead_type: 'whatsapp',
          page_origin: params.page_origin || window.location.pathname,
          button_location: params.button_location || 'button',
          ...utms
        });

        window.gtag('event', 'contact', {
          method: 'WhatsApp',
          content_name: 'Clique WhatsApp',
          ...utms
        });
      } else if (eventName === 'submit_form' || eventName === 'generate_lead') {
        const formConversionConfig: Record<string, any> = {
          send_to: 'AW-18399321198/-GTuCKSL7OgcEO64vcVE',
          value: 1.0,
          currency: 'BRL',
          ...eventPayload
        };

        if (Object.keys(enhancedUserData).length > 0) {
          formConversionConfig.user_data = enhancedUserData;
        }

        window.gtag('event', 'conversion', formConversionConfig);

        window.gtag('event', 'generate_lead', {
          method: 'Formulário',
          value: 1.0,
          currency: 'BRL',
          ...eventPayload
        });
      }
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      if (eventName === 'generate_lead' || eventName === 'submit_form') {
        window.fbq('track', 'Lead', {
          content_name: params.lead_type || 'Formulário de Orçamento',
          content_category: params.product_interest || 'Aço e Ferragens',
          currency: 'BRL',
          value: params.value || 1.0,
          ...utms
        });
      } else if (eventName === 'click_whatsapp') {
        window.fbq('track', 'Lead', {
          content_name: 'Clique WhatsApp Comercial',
          content_category: params.page_origin || 'Direto',
          currency: 'BRL',
          value: 1.0,
          ...utms
        });
        window.fbq('track', 'Contact', {
          content_name: 'Clique WhatsApp',
          content_category: params.page_origin || 'Direto',
          ...utms
        });
        window.fbq('trackCustom', 'WhatsAppClick', {
          origin: params.page_origin,
          button: params.button_location,
          ...utms
        });
      } else if (eventName === 'view_product') {
        window.fbq('track', 'ViewContent', {
          content_name: params.item_name,
          content_ids: [params.item_id],
          content_category: params.item_category,
          ...utms
        });
      } else if (eventName === 'page_view') {
        window.fbq('track', 'PageView');
      } else {
        window.fbq('trackCustom', eventName, eventPayload);
      }
    }
  }

  if (!TRACKING_CONFIG.isProduction) {
    console.log(`[Analytics Event] ${eventName}`, eventPayload);
  }
}

/**
 * Evento disparado na visualização de página
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  captureAndStoreUTMs();

  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
}

/**
 * Evento ao visualizar página de produto
 */
export function trackViewProduct(productName: string, productSlug: string, category: string) {
  trackEvent('view_product', {
    item_name: productName,
    item_id: productSlug,
    item_category: category
  });
}

/**
 * Evento ao clicar no botão de WhatsApp
 */
export function trackWhatsAppClick(pageOrigin: string, buttonLocation: string) {
  trackEvent('click_whatsapp', {
    page_origin: pageOrigin,
    button_location: buttonLocation,
    action: 'redirect_whatsapp'
  });
}

/**
 * Evento ao submeter formulário de orçamento
 */
export function trackFormSubmit(formData: {
  product: string;
  workType: string;
  deadline: string;
  city: string;
  hasFile: boolean;
  name?: string;
  whatsapp?: string;
  email?: string;
}) {
  // Salva dados no in-page Enhanced Conversions
  if (formData.whatsapp || formData.name || formData.email) {
    setEnhancedUserData({
      phone_number: formData.whatsapp,
      first_name: formData.name,
      email: formData.email,
      city: formData.city
    });
  }

  trackEvent('submit_form', {
    lead_type: 'quote_request',
    product_interest: formData.product,
    work_type: formData.workType,
    purchase_deadline: formData.deadline,
    work_city: formData.city,
    has_project_file: formData.hasFile
  });

  trackEvent('generate_lead', {
    currency: 'BRL',
    value: 1.0
  });
}

/**
 * Evento ao anexar projeto estrutural
 */
export function trackUploadProject(fileType: string, fileSize: number) {
  trackEvent('upload_project', {
    file_type: fileType,
    file_size_bytes: fileSize
  });
}

/**
 * Eventos para integração CRM / Conversões Offline
 */
export function trackCRMEvent(eventName: 'qualified_lead' | 'quote_created' | 'sale', data: Record<string, any>) {
  trackEvent(eventName, data);
}

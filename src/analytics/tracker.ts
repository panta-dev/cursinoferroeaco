import { TRACKING_CONFIG } from '../config/tracking';
import { getStoredUTMs, captureAndStoreUTMs } from './utm';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispara eventos para GTM, GA4, Google Ads e Meta Pixel com UTMs anexadas
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  const utms = getStoredUTMs();

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

    // GA4 / Google Ads gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventPayload);
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      // Mapeamento de eventos padrão do Meta Pixel
      if (eventName === 'generate_lead' || eventName === 'submit_form') {
        window.fbq('track', 'Lead', {
          content_name: params.lead_type || 'Formulário de Orçamento',
          content_category: params.product_interest || 'Aço e Ferragens',
          currency: 'BRL',
          value: params.value || 0,
          ...utms
        });
      } else if (eventName === 'click_whatsapp') {
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
  // Captura UTMs da query string se presentes na URL
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
}) {
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
    value: 0
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

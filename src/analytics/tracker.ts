import { TRACKING_CONFIG } from '../config/tracking';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispara eventos para GTM, GA4, Google Ads e Meta Pixel
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params
  };

  // Google Tag Manager / DataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);

    // GA4 / Google Ads gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      // Mapeamento de eventos comuns do Meta Pixel
      if (eventName === 'generate_lead' || eventName === 'submit_form') {
        window.fbq('track', 'Lead', params);
      } else if (eventName === 'contact' || eventName === 'click_whatsapp') {
        window.fbq('track', 'Contact', params);
      } else if (eventName === 'view_product') {
        window.fbq('track', 'ViewContent', params);
      } else {
        window.fbq('trackCustom', eventName, params);
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
    value: 0 // Valor a ser qualificado pelo CRM posteriormente
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
 * Eventos futuros para integração CRM / Conversões Offline
 */
export function trackCRMEvent(eventName: 'qualified_lead' | 'quote_created' | 'sale', data: Record<string, any>) {
  trackEvent(eventName, data);
}

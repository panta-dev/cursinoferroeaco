/**
 * SISTEMA COMPLETO DE RASTREAMENTO DE UTMs & ATRIBUIÇÃO DE LEADS
 * Captura, persiste e distribui parâmetros de campanhas (Google Ads, Meta Ads, TikTok, etc.)
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;     // Google Ads Click ID
  fbclid?: string;    // Meta / Facebook Click ID
  ttclid?: string;    // TikTok Click ID
  wbraid?: string;    // Google iOS Web Click ID
  gbraid?: string;    // Google iOS App Click ID
  referrer?: string;  // Site de origem
  landing_page?: string;
  landing_time?: string;
}

const UTM_STORAGE_KEY = 'cursino_attribution_utms';
const FIRST_TOUCH_KEY = 'cursino_first_touch';

/**
 * Captura parâmetros de UTM da URL atual e salva no Storage
 */
export function captureAndStoreUTMs(): UTMParams {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const currentUTMs: UTMParams = {};

  const keys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'ttclid',
    'wbraid',
    'gbraid'
  ];

  let hasNewParam = false;
  keys.forEach((key) => {
    const val = urlParams.get(key);
    if (val) {
      currentUTMs[key] = val;
      hasNewParam = true;
    }
  });

  const referrer = document.referrer ? document.referrer : 'direto';
  const landingPage = window.location.pathname + window.location.search;
  const timestamp = new Date().toISOString();

  // Se houver novos UTMs ou se for a primeira visita, salva
  const existingUTMs = getStoredUTMs();

  const mergedUTMs: UTMParams = {
    ...existingUTMs,
    ...currentUTMs,
    referrer: existingUTMs.referrer || referrer,
    landing_page: existingUTMs.landing_page || landingPage,
    landing_time: existingUTMs.landing_time || timestamp
  };

  try {
    if (hasNewParam || !localStorage.getItem(UTM_STORAGE_KEY)) {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(mergedUTMs));
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(mergedUTMs));
    }

    // Salva First Touch se não existir
    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(mergedUTMs));
    }
  } catch (e) {
    console.warn('[UTM Tracker] Falha ao persistir UTMs no storage', e);
  }

  return mergedUTMs;
}

/**
 * Recupera os UTMs armazenados do usuário
 */
export function getStoredUTMs(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const sessionData = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (sessionData) return JSON.parse(sessionData);

    const localData = localStorage.getItem(UTM_STORAGE_KEY);
    if (localData) return JSON.parse(localData);
  } catch (e) {
    console.warn('[UTM Tracker] Falha ao ler UTMs', e);
  }

  return {};
}

/**
 * Gera URL do WhatsApp com mensagem contextual e tag inteligente de rastreamento comercial
 */
export function buildWhatsAppLink(
  whatsappRaw: string,
  baseMessage: string,
  pagePath: string = '/'
): string {
  const utms = getStoredUTMs();
  
  // Monta tag de rastreamento para a equipe comercial saber exatamente a origem do lead
  const trackingParts: string[] = [];

  if (utms.utm_source) {
    let sourceLabel = utms.utm_source;
    if (utms.utm_source.toLowerCase().includes('google')) sourceLabel = 'Google Ads';
    else if (utms.utm_source.toLowerCase().includes('facebook') || utms.utm_source.toLowerCase().includes('fb')) sourceLabel = 'Facebook Ads';
    else if (utms.utm_source.toLowerCase().includes('instagram') || utms.utm_source.toLowerCase().includes('ig')) sourceLabel = 'Instagram Ads';
    else if (utms.utm_source.toLowerCase().includes('meta')) sourceLabel = 'Meta Ads';
    
    trackingParts.push(`Origem: ${sourceLabel}`);
  } else if (utms.gclid) {
    trackingParts.push('Origem: Google Ads (PMax/Busca)');
  } else if (utms.fbclid) {
    trackingParts.push('Origem: Meta Ads');
  }

  if (utms.utm_campaign) {
    trackingParts.push(`Campanha: ${utms.utm_campaign}`);
  }

  if (utms.utm_term) {
    trackingParts.push(`Termo: ${utms.utm_term}`);
  }

  // Página onde clicou
  const cleanPath = pagePath === '/' ? 'Home' : pagePath.replace(/^\//, '');
  trackingParts.push(`Pág: ${cleanPath}`);

  let finalMessage = baseMessage.trim();
  if (trackingParts.length > 0) {
    finalMessage += `\n\n📌 [Rastreamento: ${trackingParts.join(' | ')}]`;
  }

  return `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Enriquece o payload do formulário com todos os dados de rastreamento
 */
export function enrichLeadPayload(baseData: Record<string, any>): Record<string, any> {
  const utms = getStoredUTMs();
  
  return {
    ...baseData,
    attribution: {
      ...utms,
      current_page: typeof window !== 'undefined' ? window.location.pathname : '',
      current_url: typeof window !== 'undefined' ? window.location.href : '',
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      screen_resolution: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '',
      submission_time: new Date().toISOString()
    }
  };
}

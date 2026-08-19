import { TrackingConfig } from '../types';

/**
 * CONFIGURAÇÃO CENTRAL DE RASTREAMENTO & ANALYTICS
 * 
 * Substitua os valores abaixo pelos IDs reais obtidos nas plataformas:
 * - Google Tag Manager: GTM-XXXXXXX
 * - Google Analytics 4: G-XXXXXXXXXX
 * - Google Ads: AW-XXXXXXXXXX / LABEL
 * - Meta Pixel: XXXXXXXXXXXXXXX
 */
export const TRACKING_CONFIG: TrackingConfig = {
  gtmId: 'GTM_CONTAINER_ID', // Substituir por ID real (ex: GTM-XXXXXXX)
  ga4MeasurementId: 'GA4_MEASUREMENT_ID', // Substituir por ID real (ex: G-XXXXXXXXXX)
  googleAdsConversionId: 'GOOGLE_ADS_CONVERSION_ID', // Substituir por ID real (ex: AW-XXXXXXXXXX)
  googleAdsConversionLabel: 'GOOGLE_ADS_CONVERSION_LABEL', // Substituir por Label real
  metaPixelId: 'META_PIXEL_ID', // Substituir por ID real do Pixel Meta
  isProduction: import.meta.env.PROD
};

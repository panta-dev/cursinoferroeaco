import { TrackingConfig } from '../types';

/**
 * CONFIGURAÇÃO CENTRAL DE RASTREAMENTO & ANALYTICS
 * Meta Pixel ID configurado: 988984370826835
 */
export const TRACKING_CONFIG: TrackingConfig = {
  gtmId: 'GTM_CONTAINER_ID', // Substituir por ID do GTM se utilizado (ex: GTM-XXXXXXX)
  ga4MeasurementId: 'G-HFPMKMJ0HN', // ID Oficial do Google Analytics GA4
  googleAdsConversionId: 'GOOGLE_ADS_CONVERSION_ID', // Substituir por ID do Google Ads (ex: AW-XXXXXXXXXX)
  googleAdsConversionLabel: 'GOOGLE_ADS_CONVERSION_LABEL', // Substituir por Label de Conversão do Google Ads
  metaPixelId: '988984370826835', // ID Oficial do Meta Pixel Ativo
  isProduction: import.meta.env.PROD
};

import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { COMPANY_INFO } from '../../config/company';
import { TrustBadges } from '../common/TrustBadges';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Cursino Ferro e Aço e gostaria de falar com um especialista.')}`;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Lado Esquerdo: Conteúdo Comercial & CTAs */}
          <div className="hero-content">
            <span className="eyebrow eyebrow-dark">
              CURSINO FERRO E AÇO — SÃO PAULO, SP
            </span>

            <h1>
              Ferragens armadas e aço para sua obra em São Paulo
            </h1>

            <p className="hero-subtitle">
              Colunas, vigas, sapatas, estribos e ferragens sob medida para sua obra, com atendimento rápido, orçamento personalizado e entrega em São Paulo e região.
            </p>

            <div className="hero-cta-group">
              <Link to="/orcamento" className="btn btn-primary btn-lg" id="hero-btn-orcamento">
                <FileCheck size={20} />
                <span>SOLICITAR ORÇAMENTO</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                id="hero-btn-whatsapp"
                onClick={() => trackWhatsAppClick('/', 'hero_whatsapp')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <WhatsAppIcon size={20} color="#FFFFFF" />
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>

            {/* Informações de Confiança Próximas ao CTA */}
            <TrustBadges />
          </div>

          {/* Lado Direito: Visual Operacional & Google Maps Integrado */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} style={{ color: 'var(--color-brand-primary)' }} />
                  <span className="hero-card-title">Fábrica & Operação em SP</span>
                </div>
                <span className="badge badge-brand">Localização Real</span>
              </div>

              {/* Google Maps Interativo Incorporado */}
              <div className="hero-map-wrapper">
                <iframe
                  title="Localização Cursino Ferro e Aço no Google Maps"
                  src="https://maps.google.com/maps?q=Avenida+do+Cursino,+4032+-+Sa%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="hero-map-iframe"
                  loading="lazy"
                  aria-label="Mapa do Google mostrando a localização da Cursino Ferro e Aço"
                ></iframe>
                
                <div className="hero-map-overlay-badge">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16A34A', boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.25)' }}></div>
                    <strong style={{ fontSize: '0.8125rem', color: 'var(--color-dark-900)', fontWeight: 700 }}>Aberto</strong>
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-map-route-btn"
                    title="Traçar rota no Google Maps"
                  >
                    <Navigation size={13} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>

              {/* Linhas de Destaques Operacionais */}
              <div className="hero-card-highlights">
                <div className="hero-highlight-row">
                  <span className="hero-highlight-label">Endereço:</span>
                  <span className="hero-highlight-value">{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="hero-highlight-row">
                  <span className="hero-highlight-label">Aço & Armaduras:</span>
                  <span className="hero-highlight-value">CA-50 & CA-60 sob medida</span>
                </div>
                <div className="hero-highlight-row">
                  <span className="hero-highlight-label">Projetos:</span>
                  <span className="hero-highlight-value">Leitura de PDF e DWG</span>
                </div>
                <div className="hero-highlight-row">
                  <span className="hero-highlight-label">Entregas:</span>
                  <span className="hero-highlight-value">São Paulo e Grande SP</span>
                </div>
              </div>

              {/* Botão de Rota Direto */}
              <div style={{ marginTop: 'var(--space-3)' }}>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white btn-sm btn-block"
                  style={{ fontSize: '0.8125rem' }}
                >
                  <MapPin size={14} />
                  <span>Ver Rota no Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

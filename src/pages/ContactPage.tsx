import React, { useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackWhatsAppClick } from '../analytics/tracker';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { QuoteForm } from '../components/forms/QuoteForm';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/contato', 'Contato e Localização | Cursino Ferro e Aço');
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da Cursino Ferro e Aço.')}`;

  return (
    <>
      <SEOHead
        title="Contato e Localização em São Paulo | Cursino Ferro e Aço"
        description="Entre em contato com a Cursino Ferro e Aço. Endereço: Avenida do Cursino, 4032 — São Paulo, SP. Telefone e WhatsApp: (11) 91143-4405."
        canonicalUrl="https://cursinoferroeaco.com.br/contato"
      />

      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb items={[{ label: 'Contato & Localização' }]} />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header text-left" style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Canais de Atendimento</span>
            <h1>Fale com a Cursino Ferro e Aço</h1>
            <p className="lead-text">
              Estamos prontos para atender sua obra em São Paulo e região. Fale com nossa equipe pelo WhatsApp, telefone ou visite nossa unidade.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-10)', alignItems: 'start' }}>
            {/* Informações Oficiais e Cartões de Contato */}
            <div>
              <div className="grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                {/* Card WhatsApp */}
                <div className="card-industrial">
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(37, 211, 102, 0.1)', color: 'var(--color-whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <WhatsAppIcon size={22} color="#16A34A" />
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.25rem' }}>WhatsApp Comercial</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', marginBottom: '0.75rem' }}>
                    Atendimento ágil para orçamentos e dúvidas.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm btn-block"
                    onClick={() => trackWhatsAppClick('/contato', 'contact_card_whatsapp')}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                  >
                    <WhatsAppIcon size={16} color="#FFFFFF" />
                    <span>{COMPANY_INFO.whatsapp}</span>
                  </a>
                </div>

                {/* Card Telefone */}
                <div className="card-industrial">
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-steel-100)', color: 'var(--color-dark-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <Phone size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.25rem' }}>Ligação Telefônica</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', marginBottom: '0.75rem' }}>
                    Fale diretamente com nossa central.
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="btn btn-outline btn-sm btn-block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Endereço & Horários */}
              <div className="card-industrial" style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{ fontSize: '1.1875rem', marginBottom: '1rem', color: 'var(--color-dark-900)' }}>
                  Endereço da Unidade em São Paulo
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.9375rem', color: 'var(--color-dark-800)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <MapPin size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>{COMPANY_INFO.name}</strong><br />
                      {COMPANY_INFO.fullAddress}<br />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>CEP: {COMPANY_INFO.zip} • São Paulo, SP</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <Clock size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Horário de Funcionamento:</strong><br />
                      {COMPANY_INFO.workingHours}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <Navigation size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Área Atendida:</strong><br />
                      {COMPANY_INFO.deliveryArea}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Mensagem / Orçamento */}
            <div>
              <QuoteForm
                formTitle="Envie uma Mensagem ou Solicitação"
                formSubtitle="Preencha o formulário para receber contato ou tirar dúvidas com nossa equipe."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

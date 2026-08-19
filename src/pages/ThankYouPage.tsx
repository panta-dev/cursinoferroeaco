import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Phone, ArrowLeft, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { trackPageView, trackWhatsAppClick } from '../analytics/tracker';
import { buildWhatsAppLink } from '../analytics/utm';

export const ThankYouPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/obrigado', 'Solicitação Recebida | Cursino Ferro e Aço');
  }, []);

  const whatsappMessage = 'Olá! Acabei de enviar meus dados de orçamento pelo site da Cursino Ferro e Aço e gostaria de agilizar o atendimento.';
  const whatsappUrl = buildWhatsAppLink(COMPANY_INFO.whatsappRaw, whatsappMessage, '/obrigado');

  return (
    <>
      <SEOHead
        title="Orçamento Recebido com Sucesso | Cursino Ferro e Aço"
        description="Obrigado por entrar em contato com a Cursino Ferro e Aço. Nossa equipe técnica e comercial já iniciou a análise da sua cotação."
        canonicalUrl="https://cursinoferroeaco.com.br/obrigado"
      />

      <section className="section" style={{ backgroundColor: 'var(--color-steel-50)', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-steel-200)', padding: 'var(--space-10) var(--space-8)', boxShadow: 'var(--shadow-lg)' }}>
            
            {/* Ícone de Sucesso */}
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6) auto' }}>
              <CheckCircle2 size={42} />
            </div>

            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-3)' }}>
              SOLICITAÇÃO RECEBIDA COM SUCESSO
            </span>

            <h1 style={{ fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.25rem)', color: 'var(--color-dark-900)', marginBottom: 'var(--space-3)' }}>
              Obrigado pelo seu contato!
            </h1>

            <p style={{ fontSize: '1.0625rem', color: 'var(--color-steel-600)', lineHeight: 1.6, marginBottom: 'var(--space-8)' }}>
              Recebemos sua solicitação de orçamento. Nossa equipe de especialistas em ferro e aço em São Paulo já está analisando as especificações para preparar sua proposta.
            </p>

            {/* Box de Ação Rápida WhatsApp */}
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <div style={{ fontWeight: 700, color: '#166534', fontSize: '1rem', marginBottom: '0.25rem' }}>
                🚀 Quer agilizar seu atendimento agora mesmo?
              </div>
              <p style={{ color: '#15803D', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>
                Fale diretamente com um atendente no WhatsApp da fábrica e informe detalhes adicionais ou envie a foto do seu projeto.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
                onClick={() => trackWhatsAppClick('/obrigado', 'thank_you_whatsapp_btn')}
                style={{ justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                <span>FALAR NO WHATSAPP COM VENDEDOR</span>
              </a>
            </div>

            {/* Informações de Confiança */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: 'var(--space-4) 0', borderTop: '1px solid var(--color-steel-100)', borderBottom: '1px solid var(--color-steel-100)', marginBottom: 'var(--space-6)', fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-brand-primary)' }} />
                <span>Materiais 100% Etiquetados</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-brand-primary)' }} />
                <span>Entrega em SP e Região</span>
              </div>
            </div>

            {/* Links Secundários */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-outline btn-sm">
                <ArrowLeft size={16} />
                <span>Voltar para a Página Inicial</span>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="btn btn-secondary btn-sm">
                <Phone size={16} />
                <span>Ligar: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

import React, { useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackWhatsAppClick } from '../analytics/tracker';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export const QuotePage: React.FC = () => {
  useEffect(() => {
    trackPageView('/orcamento', 'Solicitar Orçamento de Ferragens e Aço | Cursino Ferro e Aço');
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer um orçamento de ferragens para minha obra.')}`;

  return (
    <>
      <SEOHead
        title="Solicitar Orçamento de Ferragens e Aço em São Paulo | Cursino Ferro e Aço"
        description="Solicite sua cotação de colunas, vigas, sapatas, estribos, vergalhões e ferragens sob medida. Envie seu projeto ou lista de materiais."
        canonicalUrl="https://cursinoferroeaco.com.br/orcamento"
      />

      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb items={[{ label: 'Orçamento' }]} />
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-10)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: 'var(--space-10)' }}>
            {/* Lado Esquerdo: Benefícios do Orçamento & Contatos Rápidos */}
            <div>
              <span className="eyebrow">Atendimento Ágil</span>
              <h1 style={{ fontSize: 'clamp(1.85rem, 3vw + 0.5rem, 2.5rem)', marginBottom: '1rem' }}>
                Solicite seu Orçamento Personalizado
              </h1>
              <p className="lead-text" style={{ marginBottom: '1.75rem' }}>
                Envie sua relação de materiais ou arquivos de projeto estrutural. Nossa equipe comercial e técnica analisa suas necessidades com total transparência e rapidez.
              </p>

              {/* Destaques de Confiança */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-dark-900)' }}>Sem Custo ou Compromisso:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)' }}>
                      Elaboramos a cotação detalhada sem qualquer taxa inicial.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-dark-900)' }}>Leitura de Pranchas em PDF e DWG:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)' }}>
                      Extraímos os quantitativos e dobras diretamente do seu cálculo de engenharia.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-dark-900)' }}>Entrega em São Paulo e Grande SP:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)' }}>
                      Logística programada com materiais identificados e etiquetados.
                    </div>
                  </div>
                </div>
              </div>

              {/* Card de Contato Direto via WhatsApp */}
              <div style={{ backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
                  Prefere cotar direto pelo WhatsApp?
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', marginBottom: '1rem' }}>
                  Nossa equipe de atendimento comercial está disponível para esclarecer dúvidas e receber fotos da sua lista de materiais em tempo real.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                  onClick={() => trackWhatsAppClick('/orcamento', 'quote_page_direct_whatsapp')}
                >
                  <MessageSquare size={18} />
                  <span>CHAMAR NO WHATSAPP AGORA</span>
                </a>
              </div>
            </div>

            {/* Lado Direito: Formulário Qualificador */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

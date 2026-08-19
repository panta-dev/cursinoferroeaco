import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { CTASection } from '../components/common/CTASection';
import { AUDIENCE_PERSONAS } from '../config/audiences';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackWhatsAppClick } from '../analytics/tracker';
import { XCircle, CheckCircle2, ShieldCheck, MessageSquare, FileCheck } from 'lucide-react';

interface AudienceDetailProps {
  customSlug?: string;
}

export const AudienceDetail: React.FC<AudienceDetailProps> = ({ customSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = customSlug || params.slug;

  const audience = AUDIENCE_PERSONAS.find(a => a.slug === slug);

  useEffect(() => {
    if (audience) {
      trackPageView(`/${audience.slug}`, audience.metaTitle);
    }
  }, [audience]);

  if (!audience) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(audience.whatsappMessage)}`;

  return (
    <>
      <SEOHead
        title={audience.metaTitle}
        description={audience.metaDescription}
        canonicalUrl={`https://cursinoferroeaco.com.br/${audience.slug}`}
      />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: 'var(--color-dark-900)', borderBottom: '1px solid var(--color-dark-700)' }}>
        <Breadcrumb
          items={[
            { label: 'Para sua Obra', to: '/#publicos' },
            { label: audience.name }
          ]}
        />
      </div>

      {/* Hero da Persona */}
      <section className="audience-hero">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-dark">{audience.tagline}</span>
            <h1>{audience.h1}</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-steel-300)', marginBottom: '2rem', lineHeight: 1.6 }}>
              {audience.heroSubtitle}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                onClick={() => trackWhatsAppClick(`/${audience.slug}`, 'audience_hero_whatsapp')}
              >
                <MessageSquare size={18} />
                <span>{audience.ctaText}</span>
              </a>
              <a href="#formulario-persona" className="btn btn-outline-white btn-lg">
                <FileCheck size={18} />
                <span>Solicitar Orçamento Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo de Dores vs Soluções Cursino */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Desafios vs Nossa Entrega</span>
            <h2>Como a Cursino Ferro e Aço resolve as dificuldades da sua obra</h2>
            <p className="lead-text">
              Eliminamos os gargalos operacionais que afetam o seu ritmo de trabalho e o seu custo final.
            </p>
          </div>

          <div className="audience-pain-solution-grid">
            {/* Coluna Negativa / Dores Tradicionais */}
            <div className="comparison-column negative">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '1.0625rem' }}>
                <XCircle size={22} />
                <span>Problemas com fornecimento comum:</span>
              </div>

              {audience.painPoints.map((pain, idx) => (
                <div key={idx} className="comparison-item">
                  <div className="comparison-icon" style={{ color: 'var(--color-brand-primary)' }}>
                    •
                  </div>
                  <div>
                    <h4>{pain.title}</h4>
                    <p>{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coluna Positiva / Soluções Cursino */}
            <div className="comparison-column positive">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-whatsapp-dark)', fontWeight: 700, fontSize: '1.0625rem' }}>
                <CheckCircle2 size={22} />
                <span>Como a Cursino trabalha com você:</span>
              </div>

              {audience.solutions.map((sol, idx) => (
                <div key={idx} className="comparison-item">
                  <div className="comparison-icon" style={{ color: 'var(--color-whatsapp-dark)' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4>{sol.title}</h4>
                    <p>{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios Operacionais */}
          <div style={{ marginTop: 'var(--space-12)', backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: 'var(--space-8)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-dark-900)' }}>
              Vantagens Práticas para o seu Dia a Dia
            </h3>
            <div className="grid-2">
              {audience.operationalBenefits.map((ben, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-dark-800)' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-brand-primary)', flexShrink: 0 }} />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário na Página da Persona */}
      <section className="section section-subtle" id="formulario-persona">
        <div className="container" style={{ maxWidth: '840px' }}>
          <QuoteForm
            formTitle={`Orçamento Especializado ${audience.name}`}
            formSubtitle="Envie os dados da sua demanda ou anexe seus projetos estruturais para análise da nossa equipe técnica."
          />
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={`Pronto para elevar a produtividade da sua obra?`}
        subtitle="Atendimento ágil, fornecimento estruturado e entrega em São Paulo e região."
        whatsappMessage={audience.whatsappMessage}
        buttonText={audience.ctaText}
      />
    </>
  );
};

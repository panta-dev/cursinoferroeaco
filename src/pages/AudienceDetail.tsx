import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { CTASection } from '../components/common/CTASection';
import { AUDIENCE_PERSONAS } from '../config/audiences';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackWhatsAppClick } from '../analytics/tracker';
import { XCircle, CheckCircle2, ShieldCheck, FileCheck, Award, Zap, Check } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { buildWhatsAppLink } from '../analytics/utm';

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

  const whatsappUrl = buildWhatsAppLink(COMPANY_INFO.whatsappRaw, audience.whatsappMessage, `/${audience.slug}`);

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

      {/* Hero da Persona com Métricas & Copy Especializada */}
      <section className="audience-hero" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <span className="eyebrow eyebrow-dark">{audience.tagline}</span>
              {audience.highlightBadge && (
                <span className="badge badge-brand" style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}>
                  {audience.highlightBadge}
                </span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw + 0.8rem, 3rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              {audience.h1}
            </h1>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--color-steel-300)', marginBottom: '2rem', lineHeight: 1.65 }}>
              {audience.heroSubtitle}
            </p>

            {/* Grid de 3 Métricas / Provas da Persona */}
            {audience.stats && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {audience.stats.map((st, idx) => (
                  <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: 'var(--radius-sm)', padding: '0.875rem 1rem' }}>
                    <strong style={{ fontSize: '1.375rem', color: '#FFFFFF', display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                      {st.value}
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-400)', lineHeight: 1.3, display: 'block', marginTop: '0.25rem' }}>
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                onClick={() => trackWhatsAppClick(`/${audience.slug}`, 'audience_hero_whatsapp')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <WhatsAppIcon size={20} color="#FFFFFF" />
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

      {/* Seção de Pilares de Valor Específicos da Persona */}
      {audience.customCopyPillar && (
        <section className="section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-steel-200)' }}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Soluções Sob Medida</span>
              <h2>Pilares de Atendimento para {audience.name}</h2>
              <p className="lead-text">
                Entendemos as particularidades da sua rotina e desenhamos processos para entregar máxima eficiência comercial e operacional.
              </p>
            </div>

            <div className="grid-3" style={{ marginBottom: 'var(--space-8)' }}>
              {audience.customCopyPillar.map((pillar, idx) => (
                <div key={idx} className="card-industrial" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {idx === 0 ? <Zap size={22} /> : idx === 1 ? <Award size={22} /> : <ShieldCheck size={22} />}
                  </div>
                  <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-dark-900)' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', lineHeight: 1.6, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparativo de Dores vs Soluções Cursino */}
      <section className="section" style={{ backgroundColor: 'var(--color-steel-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Desafios vs Nossa Solução</span>
            <h2>Como a Cursino Resolve os Problemas da sua Demanda</h2>
            <p className="lead-text">
              Eliminamos os gargalos operacionais que afetam seu prazo de entrega, orçamento e qualidade final.
            </p>
          </div>

          <div className="audience-pain-solution-grid">
            {/* Coluna Negativa / Dores Tradicionais */}
            <div className="comparison-column negative">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '1.0625rem' }}>
                <XCircle size={22} />
                <span>Problemas com fornecimento tradicional:</span>
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

          {/* Banner Fotográfico Real da Aplicação em Obra */}
          <div style={{ marginTop: 'var(--space-10)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-steel-300)', boxShadow: 'var(--shadow-md)', backgroundColor: '#FFFFFF' }}>
            <div style={{ height: '340px', width: '100%', position: 'relative' }}>
              <img
                src={audience.imageUrl || '/images/obra-engenheiros.jpg'}
                alt={`Aplicação prática de ferragens Cursino para ${audience.name}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', backgroundColor: 'rgba(11, 17, 32, 0.92)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '0.875rem 1.25rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.8125rem' }}>
                <span><strong>Atendimento Técnico Especializado:</strong> Soluções pensadas exclusivamente para {audience.name.toLowerCase()} em São Paulo e região.</span>
                <span className="badge badge-brand" style={{ fontSize: '0.7rem' }}>Qualidade Cursino</span>
              </div>
            </div>
          </div>

          {/* Benefícios Operacionais */}
          <div style={{ marginTop: 'var(--space-8)', backgroundColor: '#FFFFFF', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-dark-900)' }}>
              Vantagens Práticas no seu Atendimento
            </h3>
            <div className="grid-2">
              {audience.operationalBenefits.map((ben, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-dark-800)' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} />
                  </div>
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
            formTitle={`Orçamento Exclusivo ${audience.name}`}
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

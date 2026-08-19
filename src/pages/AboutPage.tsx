import React, { useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { FactoryShowcase } from '../components/home/FactoryShowcase';
import { Differentiators } from '../components/home/Differentiators';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../config/company';
import { trackPageView } from '../analytics/tracker';
import { Building2, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/sobre', 'Sobre a Cursino Ferro e Aço | Soluções em Aço em São Paulo');
  }, []);

  return (
    <>
      <SEOHead
        title="Sobre a Cursino Ferro e Aço | Fornecimento Estruturado em São Paulo"
        description="Conheça a Cursino Ferro e Aço: soluções completas em corte, dobra e armação de aço para construção civil na Avenida do Cursino, São Paulo - SP."
        canonicalUrl="https://cursinoferroeaco.com.br/sobre"
      />

      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb items={[{ label: 'Sobre a Empresa' }]} />
      </div>

      {/* Hero Institucional */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1A263D 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-dark">Institucional</span>
            <h1 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              Soluções em Ferro, Aço e Ferragens Armadas com Rigor e Organização
            </h1>
            <p className="lead-text" style={{ color: 'var(--color-steel-300)' }}>
              A Cursino Ferro e Aço atua no fornecimento de aço e armaduras para a construção civil, unindo precisão no corte e dobra, atendimento ágil e logística eficiente em São Paulo e região.
            </p>
          </div>
        </div>
      </section>

      {/* Propósito e Compromisso */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-10)', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Nosso Posicionamento</span>
              <h2 style={{ fontSize: '1.875rem' }}>
                Transformando Projetos em Ferragem Pronta para o Canteiro
              </h2>
              <p>
                Comprar ferragem para uma obra não deve ser uma fonte de atrasos, desperdício ou dúvidas. Por isso, a <strong>Cursino Ferro e Aço</strong> estrutura sua operação para oferecer o fornecimento exato do que a sua construção necessita.
              </p>
              <p>
                Trabalhamos com materiais de alta procedência, como vergalhões CA-50 e CA-60, telas eletrossoldadas, treliças e arames recozidos. Além disso, somos especialistas na preparação de <strong>colunas, vigas, sapatas e estribos armados sob medida</strong> a partir do detalhamento do cálculo estrutural fornecido pelo cliente.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-dark-900)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                  <span>Produção organizada com identificação de peças por etapa da obra</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-dark-900)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                  <span>Possibilidade de entregas programadas conforme o avanço físico</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-dark-900)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                  <span>Atendimento dedicado tanto a grandes obras quanto a reformas residenciais</span>
                </div>
              </div>
            </div>

            {/* Card Localização & Operação */}
            <div className="card-industrial" style={{ padding: 'var(--space-8)', backgroundColor: 'var(--color-steel-50)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-dark-900)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1875rem', margin: 0 }}>Unidade Cursino</h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>{COMPANY_INFO.fullAddress}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--color-steel-600)' }}>
                <div>
                  <strong>Área Atendida:</strong><br />
                  {COMPANY_INFO.deliveryArea}
                </div>
                <div>
                  <strong>Horário de Atendimento:</strong><br />
                  {COMPANY_INFO.workingHours}
                </div>
                <div>
                  <strong>Telefone e WhatsApp:</strong><br />
                  {COMPANY_INFO.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Reais */}
      <Differentiators />

      {/* Showcase Operacional */}
      <FactoryShowcase />

      {/* CTA Final */}
      <CTASection
        title="Deseja orçar ferragens para sua obra com a Cursino?"
        subtitle="Nossa equipe está pronta para entender seu projeto e apresentar a melhor solução em ferro e aço."
      />
    </>
  );
};

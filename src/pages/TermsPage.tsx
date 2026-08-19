import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../config/company';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Termos de Uso | Cursino Ferro e Aço"
        description="Termos de uso e condições gerais da Cursino Ferro e Aço para navegação e solicitações de orçamento."
        canonicalUrl="https://cursinoferroeaco.com.br/termos-de-uso"
      />

      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb items={[{ label: 'Termos de Uso' }]} />
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Termos de Uso</h1>
          
          <div style={{ color: 'var(--color-dark-700)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            <p>
              Ao navegar no site da <strong>{COMPANY_INFO.name}</strong>, você concorda com as condições descritas abaixo:
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              1. Informações de Produtos e Orçamentos
            </h3>
            <p>
              As informações apresentadas em nosso catálogo e páginas de produto destinam-se a orientar construtoras, engenheiros, empreiteiros e clientes finais. As cotações de preços, quantitativos de aço e prazos de entrega são fornecidos de maneira individualizada e formal por nossa equipe comercial com base nas especificações de cada projeto.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              2. Projetos Estruturais e Responsabilidade Técnica
            </h3>
            <p>
              A confecção de ferragens armadas sob medida é realizada rigorosamente de acordo com as pranchas, cálculos e especificações técnicas encaminhadas pelo cliente ou responsável técnico da obra (Engenheiro ou Arquiteto).
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              3. Direitos Autorais e Propriedade
            </h3>
            <p>
              Todo o conteúdo institucional, textos comerciais e identidade visual do site pertencem à {COMPANY_INFO.legalName}. É vedada a reprodução não autorizada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useEffect } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { ProblemSection } from '../components/home/ProblemSection';
import { ProductGrid } from '../components/home/ProductGrid';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { Differentiators } from '../components/home/Differentiators';
import { TraceabilitySection } from '../components/home/TraceabilitySection';
import { AudienceSegments } from '../components/home/AudienceSegments';
import { FactoryShowcase } from '../components/home/FactoryShowcase';
import { TestimonialPlaceholder } from '../components/home/TestimonialPlaceholder';
import { FAQSection } from '../components/home/FAQSection';
import { QuoteForm } from '../components/forms/QuoteForm';
import { CTASection } from '../components/common/CTASection';
import { trackPageView } from '../analytics/tracker';

import { FAQS } from '../config/faqs';

export const Home: React.FC = () => {
  useEffect(() => {
    trackPageView('/', 'Cursino Ferro e Aço | Ferragens Armadas e Aço em São Paulo');
  }, []);

  // Schema.org FAQPage para Snippets Ricos no Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Cursino Ferro e Aço | Ferragens Armadas e Aço para Construção em São Paulo"
        description="Colunas armadas, vigas baldrame, sapatas, estribos e ferro sob medida em São Paulo. Corte e dobra conforme seu projeto estrutural com entrega ágil na Grande SP."
        canonicalUrl="https://cursinoferroeaco.com.br/"
        schema={faqSchema}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Dores do Comprador vs Solução Cursino */}
      <ProblemSection />

      {/* 3. Catálogo de Produtos e Soluções */}
      <ProductGrid />

      {/* 4. Como Funciona (Timeline 5 Etapas) */}
      <ProcessTimeline />

      {/* 5. Diferenciais Reais */}
      <Differentiators />

      {/* 5.1 Sistema Cursino de Rastreabilidade Estrutural & Etiquetas */}
      <TraceabilitySection />

      {/* 6. Atendimento Segmentado por Público (Engenheiros, Construtoras, Cliente Final) */}
      <AudienceSegments />

      {/* 7. Galeria / Estrutura Operacional */}
      <FactoryShowcase />

      {/* 8. Prova Social e Transparência */}
      <TestimonialPlaceholder />

      {/* 9. FAQ Perguntas Frequentes */}
      <FAQSection />

      {/* 10. Seção de Formulário de Orçamento Qualificador */}
      <section className="section section-subtle" id="orcamento-rapido">
        <div className="container" style={{ maxWidth: '840px' }}>
          <QuoteForm
            formTitle="Solicite seu Orçamento Comercial"
            formSubtitle="Preencha os dados da sua obra abaixo. Nossa equipe técnica e comercial analisa os quantitativos e entra em contato rapidamente."
          />
        </div>
      </section>

      {/* 11. CTA Final */}
      <CTASection
        title="Tem uma obra para começar ou acelerar em São Paulo?"
        subtitle="Converse com nossos especialistas, envie sua lista de aço ou projeto estrutural e garanta fornecimento ágil e organizado."
        buttonText="SOLICITAR MEU ORÇAMENTO"
      />
    </>
  );
};

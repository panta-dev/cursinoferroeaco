import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { CTASection } from '../components/common/CTASection';
import { PRODUCTS } from '../config/products';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackViewProduct, trackWhatsAppClick } from '../analytics/tracker';
import { buildWhatsAppLink } from '../analytics/utm';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { Check, ArrowRight, ShieldCheck, Truck, FileCheck, Layers, Sparkles } from 'lucide-react';

export const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  useEffect(() => {
    trackPageView('/ferro-e-aco', 'Catálogo Geral de Ferro e Aço | Cursino Ferro e Aço');
  }, []);

  // Filtra os 10 produtos reais (excluindo os agregadores)
  const realProducts = PRODUCTS.filter(p => p.slug !== 'ferro-e-aco' && p.slug !== 'ferragens-armadas');

  const filteredProducts = selectedCategory === 'todos'
    ? realProducts
    : selectedCategory === 'estrutural'
    ? realProducts.filter(p => p.category === 'estrutural')
    : selectedCategory === 'vergalhoes'
    ? realProducts.filter(p => p.category === 'vergalhoes' || p.slug === 'estribos')
    : realProducts.filter(p => p.category === 'complementares');

  // Schema.org ItemList para SEO
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo Completo de Produtos em Ferro e Aço - Cursino",
    "description": "Linha completa de ferragens armadas sob medida, colunas, vigas, sapatas, estribos, vergalhões CA-50/CA-60 e telas soldadas em São Paulo.",
    "itemListElement": realProducts.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.name,
      "url": `https://cursinoferroeaco.com.br/${p.slug}`
    }))
  };

  return (
    <>
      <SEOHead
        title="Catálogo de Produtos em Ferro e Aço | Ferragens Armadas em São Paulo | Cursino"
        description="Confira o catálogo completo de ferro, aço e ferragens armadas da Cursino Ferro e Aço. Colunas, vigas, sapatas, estribos, vergalhões CA-50 e telas em São Paulo."
        canonicalUrl="https://cursinoferroeaco.com.br/ferro-e-aco"
        schema={catalogSchema}
      />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: 'var(--color-dark-900)', borderBottom: '1px solid var(--color-dark-700)' }}>
        <Breadcrumb items={[{ label: 'Catálogo Geral de Produtos' }]} />
      </div>

      {/* Hero do Catálogo */}
      <section className="audience-hero" style={{ paddingBottom: 'var(--space-10)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(200, 16, 46, 0.2)', border: '1px solid rgba(200, 16, 46, 0.4)', padding: '0.375rem 0.875rem', borderRadius: 'var(--radius-full)', color: '#FFA5A5', fontWeight: 700, fontSize: '0.8125rem', marginBottom: '1rem' }}>
              <Sparkles size={15} />
              <span>CATÁLOGO GERAL DE FÁBRICA • SÃO PAULO</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw + 0.8rem, 3.1rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Soluções Completas em Ferro, Aço e Ferragens Armadas
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--color-steel-300)', marginBottom: '2rem', lineHeight: 1.65 }}>
              Fornecemos desde vergalhões retos e estribos padronizados até colunas, vigas e sapatas <strong>100% armadas sob medida</strong> a partir do cálculo do seu projeto estrutural. Materiais etiquetados e prontos para concretagem com entrega ágil em toda a Grande São Paulo.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={buildWhatsAppLink(COMPANY_INFO.whatsappRaw, 'Olá! Gostaria de fazer um orçamento do catálogo de ferro e aço.', '/ferro-e-aco')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                onClick={() => trackWhatsAppClick('/ferro-e-aco', 'catalog_hero_whatsapp')}
              >
                <WhatsAppIcon size={20} color="#FFFFFF" />
                <span>COTAÇÃO RÁPIDA NO WHATSAPP</span>
              </a>
              <a href="#formulario-catalogo" className="btn btn-outline-white btn-lg">
                <FileCheck size={18} />
                <span>Enviar Prancha / Projeto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Principal de Produtos com Filtro */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Barra de Filtros */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-8)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-steel-200)' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Linha de Produção</span>
              <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Nossos Produtos</h2>
            </div>

            {/* Abas de Categoria */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'todos' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory('todos')}
              >
                Todos ({realProducts.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'estrutural' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory('estrutural')}
              >
                Ferragens Armadas & Fundação
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'vergalhoes' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory('vergalhoes')}
              >
                Vergalhões & Estribos
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedCategory === 'complementares' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory('complementares')}
              >
                Telas, Arames & Treliças
              </button>
            </div>
          </div>

          {/* Grid de Cards dos Produtos */}
          <div className="grid-3" style={{ marginBottom: 'var(--space-12)' }}>
            {filteredProducts.map((product) => {
              const prodWhatsappUrl = buildWhatsAppLink(COMPANY_INFO.whatsappRaw, product.whatsappMessage, `/ferro-e-aco#${product.slug}`);

              return (
                <div key={product.slug} className="product-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Foto Real do Produto */}
                  <div className="product-card-img-wrap" style={{ height: '220px', padding: 0, overflow: 'hidden', position: 'relative' }}>
                    {product.badge && (
                      <span className="badge badge-brand product-card-badge" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2 }}>
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.imageUrl || '/images/colunas-armadas.jpg'}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-normal)' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Corpo do Card */}
                  <div className="product-card-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', padding: 'var(--space-5)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {product.category === 'estrutural' ? 'Estrutura Armada' : product.category === 'vergalhoes' ? 'Aço & Vergalhões' : 'Aço Complementar'}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', lineHeight: 1.5, marginBottom: '1rem' }}>
                        {product.shortDescription}
                      </p>

                      {/* Lista de Vantagens Resumida */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '1.25rem', backgroundColor: 'var(--color-steel-50)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                        {product.advantages.slice(0, 2).map((adv, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-dark-800)' }}>
                            <Check size={14} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{adv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                      <a
                        href={prodWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm btn-block"
                        onClick={() => trackWhatsAppClick(`/ferro-e-aco`, `catalog_${product.slug}_whatsapp`)}
                      >
                        <WhatsAppIcon size={16} color="#FFFFFF" />
                        <span>Orçar {product.name}</span>
                      </a>
                      <Link
                        to={`/${product.slug}`}
                        className="btn btn-outline btn-sm btn-block"
                        onClick={() => trackViewProduct(product.name, product.slug, product.category)}
                      >
                        <span>Ver Detalhes Técnicos</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Faixa de Garantia e Entrega */}
          <div style={{ backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: 'var(--space-8)', marginBottom: 'var(--space-12)' }}>
            <div className="grid-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-dark-900)', display: 'block' }}>Aço Certificado ABNT</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>Vergalhões CA-50 e CA-60 de procedência comprovada</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                  <Truck size={24} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-dark-900)', display: 'block' }}>Entrega Rápida em SP</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>Frota própria para toda a Capital e Grande São Paulo</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                  <Layers size={24} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-dark-900)', display: 'block' }}>Materiais 100% Etiquetados</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>Rastreabilidade de cada pilar, viga e sapata no canteiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Integrado de Cotação */}
      <section className="section section-subtle" id="formulario-catalogo">
        <div className="container" style={{ maxWidth: '840px' }}>
          <QuoteForm
            formTitle="Solicitar Cotação do Catálogo de Produtos"
            formSubtitle="Preencha os dados da sua obra ou anexe seu projeto estrutural para orçamento rápido sem compromisso."
          />
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Precisa de auxílio para quantificar o aço da sua obra?"
        subtitle="Nossa equipe técnica na Avenida do Cursino analisa sua planta e envia uma proposta transparente."
        whatsappMessage="Olá! Gostaria de auxílio para quantificar e orçar ferragens para minha obra."
        buttonText="FALAR COM ESPECIALISTA NO WHATSAPP"
      />
    </>
  );
};

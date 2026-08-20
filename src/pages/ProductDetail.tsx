import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { CTASection } from '../components/common/CTASection';
import { PRODUCTS } from '../config/products';
import { COMPANY_INFO } from '../config/company';
import { trackPageView, trackViewProduct, trackWhatsAppClick } from '../analytics/tracker';
import { Check, MessageSquare, FileCheck, ShieldCheck } from 'lucide-react';

interface ProductDetailProps {
  customSlug?: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ customSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = customSlug || params.slug;

  const product = PRODUCTS.find(p => p.slug === slug);

  useEffect(() => {
    if (product) {
      trackPageView(`/${product.slug}`, product.metaTitle);
      trackViewProduct(product.name, product.slug, product.category);
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/ferro-e-aco" replace />;
  }

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(product.whatsappMessage)}`;

  // Schema.org Product
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "Cursino Ferro e Aço"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "price": "Sob Consulta",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Cursino Ferro e Aço"
      }
    }
  };

  return (
    <>
      <SEOHead
        title={product.metaTitle}
        description={product.metaDescription}
        canonicalUrl={`https://cursinoferroeaco.com.br/${product.slug}`}
        schema={productSchema}
      />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb
          items={[
            { label: 'Produtos', to: '/ferro-e-aco' },
            { label: product.name }
          ]}
        />
      </div>

      {/* Hero do Produto */}
      <section className="product-detail-hero">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-brand">{product.category.toUpperCase()}</span>
              {product.badge && <span className="badge badge-steel">{product.badge}</span>}
            </div>

            <h1 style={{ marginBottom: '1rem' }}>{product.h1}</h1>
            <p className="lead-text" style={{ marginBottom: '1.75rem' }}>
              {product.fullDescription}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                onClick={() => trackWhatsAppClick(`/${product.slug}`, 'product_hero_whatsapp')}
              >
                <MessageSquare size={18} />
                <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
              </a>
              <a href="#orcamento-produto" className="btn btn-primary btn-lg">
                <FileCheck size={18} />
                <span>ENVIAR PROJETO / LISTA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal & Sidebar */}
      <section className="section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Coluna Esquerda: Detalhamento Técnico & Aplicações */}
            <div>
              {/* Fotografia Real do Produto */}
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-steel-300)', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)', backgroundColor: '#FFFFFF' }}>
                <div style={{ height: '360px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={product.imageUrl || '/images/colunas-armadas.jpg'}
                    alt={`${product.name} - Cursino Ferro e Aço`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '0.5rem' }}>
                    <span className="badge badge-brand" style={{ backgroundColor: 'rgba(200, 16, 46, 0.95)', backdropFilter: 'blur(4px)', color: '#FFFFFF' }}>
                      Foto Real da Operação
                    </span>
                    <span className="badge badge-dark" style={{ backgroundColor: 'rgba(11, 17, 32, 0.85)', backdropFilter: 'blur(4px)', color: '#FFFFFF' }}>
                      Unidade São Paulo
                    </span>
                  </div>
                </div>
                <div style={{ padding: '0.875rem 1.25rem', backgroundColor: 'var(--color-steel-50)', borderTop: '1px solid var(--color-steel-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--color-steel-600)' }}>
                  <span><strong>Registro:</strong> {product.imageTag}</span>
                  <span style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>Aço Certificado ABNT</span>
                </div>
              </div>

              {/* Vantagens */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: 'var(--color-dark-900)' }}>
                  Vantagens e Diferenciais
                </h3>
                <div className="grid-2">
                  {product.advantages.map((adv, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-steel-200)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                      <Check size={18} style={{ color: 'var(--color-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-dark-800)', fontWeight: 500 }}>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Principais Aplicações */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: 'var(--color-dark-900)' }}>
                  Principais Aplicações na Construção
                </h3>
                <div style={{ backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {product.applications.map((app, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-dark-700)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-brand-primary)' }}></div>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Para Quem É */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem', color: 'var(--color-dark-900)' }}>
                  Indicado Para
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.targetAudience.map((aud, idx) => (
                    <span key={idx} className="badge badge-dark" style={{ padding: '0.5rem 0.875rem', fontSize: '0.8125rem' }}>
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nota sobre Especificações & Transparência */}
              <div style={{ backgroundColor: '#FFFBFB', borderLeft: '4px solid var(--color-brand-primary)', padding: '1.25rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', fontSize: '0.875rem', color: 'var(--color-dark-700)' }}>
                <strong>Orçamento Personalizado e Sem Fórmulas Prontas:</strong> As dimensões, bitolas e quantitativos de {product.name.toLowerCase()} dependem diretamente da solicitação ou cálculo estrutural da sua obra. Não trabalhamos com valores genéricos para assegurar exatidão e transparência no seu custo final.
              </div>
            </div>

            {/* Coluna Direita: Sidebar de Orçamento & Contato */}
            <aside>
              <div className="product-sidebar-card">
                <span className="eyebrow">Cotação Rápida</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Precisa de {product.name} para sua obra?
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-500)', marginBottom: '1.25rem' }}>
                  Fale diretamente com nossa equipe de atendimento em São Paulo e envie suas medidas.
                </p>

                <div className="product-spec-list">
                  <div className="product-spec-item">
                    <ShieldCheck size={16} />
                    <span>Corte e dobra sob medida ou padrão</span>
                  </div>
                  <div className="product-spec-item">
                    <ShieldCheck size={16} />
                    <span>Identificação e etiquetagem dos lotes</span>
                  </div>
                  <div className="product-spec-item">
                    <ShieldCheck size={16} />
                    <span>Entrega na Região Metropolitana de SP</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-block"
                    onClick={() => trackWhatsAppClick(`/${product.slug}`, 'product_sidebar_whatsapp')}
                  >
                    <MessageSquare size={16} />
                    <span>Pedir Orçamento no WhatsApp</span>
                  </a>

                  <a href="#orcamento-produto" className="btn btn-primary btn-block">
                    <span>Preencher Formulário Online</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Formulário Integrado na Página do Produto */}
      <section className="section section-subtle" id="orcamento-produto">
        <div className="container" style={{ maxWidth: '840px' }}>
          <QuoteForm
            initialProduct={product.name}
            formTitle={`Orçamento de ${product.name}`}
            formSubtitle="Envie os dados da sua obra e as especificações de quantidade ou anexe seu projeto estrutural."
          />
        </div>
      </section>

      {/* Interlinking Estratégico de SEO: Outras Soluções em Aço */}
      <section className="section" style={{ borderTop: '1px solid var(--color-steel-200)', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-6)', textAlign: 'center' }}>
            <span className="eyebrow">Linha Completa para Construção</span>
            <h2 style={{ fontSize: '1.5rem' }}>Outras Soluções em Ferro e Aço para sua Obra</h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-steel-600)' }}>
              Combine seu pedido de {product.name.toLowerCase()} com outros elementos estruturais e otimize o frete para sua obra em São Paulo.
            </p>
          </div>

          <div className="grid-4">
            {PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 4).map((rel) => (
              <div key={rel.slug} className="card-industrial" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.0625rem', marginBottom: '0.375rem', color: 'var(--color-dark-900)' }}>
                    {rel.name}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-steel-600)', marginBottom: '1rem', lineHeight: 1.4 }}>
                    {rel.shortDescription}
                  </p>
                </div>
                <a
                  href={`/${rel.slug}`}
                  style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span>Ver especificações</span> →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={`Garanta ${product.name} no prazo da sua obra`}
        subtitle="Atendimento ágil, precisão de corte e entrega em São Paulo e região. Fale com nossos especialistas."
        whatsappMessage={product.whatsappMessage}
      />
    </>
  );
};

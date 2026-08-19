import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, FileCheck } from 'lucide-react';
import { PRODUCTS } from '../../config/products';
import { trackViewProduct } from '../../analytics/tracker';

export const ProductGrid: React.FC = () => {
  // Exibição dos 6 primeiros produtos em destaque na Home
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <section className="section" id="produtos">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Catálogo de Produtos</span>
          <h2>Soluções em Ferro, Aço e Ferragens Armadas</h2>
          <p className="lead-text">
            Fornecemos ferragens prontas e materiais padronizados ou sob medida para atender todas as fases da sua obra com precisão e economia.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-10)' }}>
          {featuredProducts.map((product) => (
            <div key={product.slug} className="product-card">
              <div className="product-card-img-wrap" style={{ height: '190px', padding: 0, overflow: 'hidden', position: 'relative' }}>
                {product.badge && (
                  <span className="badge badge-brand product-card-badge" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2 }}>
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.imageUrl || '/images/colunas-armadas.jpg'}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-normal)' }}
                  className="product-card-real-img"
                  loading="lazy"
                />
              </div>

              <div className="product-card-body">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {product.shortDescription}
                </p>

                <div className="product-card-actions">
                  <Link
                    to={`/${product.slug}`}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => trackViewProduct(product.name, product.slug, product.category)}
                  >
                    Ver detalhes
                  </Link>
                  <Link
                    to="/orcamento"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <FileCheck size={15} />
                    <span>Orçar agora</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ver Todas as Soluções */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/ferro-e-aco" className="btn btn-secondary btn-lg">
            <Layers size={18} />
            <span>VER TODAS AS SOLUÇÕES EM FERRO E AÇO</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

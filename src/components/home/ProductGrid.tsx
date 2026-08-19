import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
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
              <div className="product-card-img-wrap">
                {product.badge && (
                  <span className="badge badge-brand product-card-badge">
                    {product.badge}
                  </span>
                )}
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  {product.slug.includes('coluna') ? '🏛️' :
                   product.slug.includes('viga') ? '🧱' :
                   product.slug.includes('sapata') ? '📐' :
                   product.slug.includes('estribo') ? '⛓️' :
                   product.slug.includes('vergalhao') ? '🏗️' : '⚙️'}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)', fontWeight: 600 }}>
                  {product.imageTag}
                </div>
              </div>

              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>

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
                    Orçar agora
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

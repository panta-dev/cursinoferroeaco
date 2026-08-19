import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialPlaceholder: React.FC = () => {
  // Estrutura preparada para receber depoimentos reais de clientes
  const placeholders = [
    {
      role: 'Engenheiro Civil',
      segment: 'Obra Comercial em São Paulo',
      text: 'Espaço reservado para depoimento real de engenheiro/construtora sobre a pontualidade na entrega e fidelidade às pranchas estruturais.',
      author: 'Cliente Corporativo',
      initials: 'EC'
    },
    {
      role: 'Mestre de Obras / Empreiteiro',
      segment: 'Construção Residencial - SP',
      text: 'Espaço reservado para depoimento real de empreiteiro sobre a agilidade na montagem das colunas e vigas armadas no canteiro.',
      author: 'Empreiteiro Parceiro',
      initials: 'EP'
    },
    {
      role: 'Proprietário de Residência',
      segment: 'Reforma e Ampliação - SP',
      text: 'Espaço reservado para relato real de cliente final sobre o suporte didático no envio da lista de materiais e agilidade no orçamento.',
      author: 'Cliente Residencial',
      initials: 'CR'
    }
  ];

  return (
    <section className="section section-subtle" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Compromisso e Confiança</span>
          <h2>A Opinião de Quem Constrói com a Cursino</h2>
          <p className="lead-text">
            Trabalhamos diariamente com foco na satisfação de engenheiros, construtoras, empreiteiros e clientes residenciais em São Paulo.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-8)' }}>
          {placeholders.map((item, idx) => (
            <div key={idx} className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">
                  "{item.text}"
                </p>
              </div>

              <div className="review-author">
                <div className="review-avatar">
                  {item.initials}
                </div>
                <div className="review-info">
                  <h5>{item.author}</h5>
                  <span>{item.role} • {item.segment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Transparência & Estrutura para Google Reviews */}
        <div style={{ textAlign: 'center', backgroundColor: '#FFFFFF', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', maxWidth: '680px', margin: '0 auto', fontSize: '0.875rem', color: 'var(--color-steel-600)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-dark-900)', marginBottom: '0.25rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-brand-primary)' }} />
            <span>Política de Avaliações Reais Cursino Ferro e Aço</span>
          </div>
          <div>
            Espaço preparado para integração contínua de avaliações verificadas do Google e registros fotográficos de obras fornecidas.
          </div>
        </div>
      </div>
    </section>
  );
};

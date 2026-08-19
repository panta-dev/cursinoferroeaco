import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';

export const FactoryShowcase: React.FC = () => {
  const operations = [
    {
      title: 'Área de Corte e Dobra',
      image: '/images/corte-dobra.jpg',
      desc: 'Maquinário de precisão para corte e dobra milimétrica de aços CA-50 e CA-60.'
    },
    {
      title: 'Montagem de Colunas e Vigas',
      image: '/images/colunas-armadas.jpg',
      desc: 'Amarração firme e conferência de espaçamento de estribos conforme projeto.'
    },
    {
      title: 'Identificação e Etiquetagem',
      image: '/images/etiqueta-detalhe.jpg',
      desc: 'Materiais organizados por elementos estruturais (ex: P1, P2, V1) para montagem rápida.'
    },
    {
      title: 'Carregamento e Logística',
      image: '/images/entrega-caminhao.jpg',
      desc: 'Frota preparada para entrega ágil e segura em São Paulo e região metropolitana.'
    }
  ];

  return (
    <section className="section" id="operacao" style={{ backgroundColor: 'var(--color-steel-50)', borderTop: '1px solid var(--color-steel-200)', borderBottom: '1px solid var(--color-steel-200)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Estrutura Operacional</span>
          <h2>Operação Real, Organizada e Preparada para sua Demanda</h2>
          <p className="lead-text">
            Nossa unidade na {COMPANY_INFO.fullAddress} reúne estoque amplo, maquinário de corte e equipe capacitada para transformar seu projeto estrutural em ferragens de alta precisão.
          </p>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-8)' }}>
          {operations.map((item, idx) => (
            <div key={idx} className="card-industrial" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-normal)' }}
                  loading="lazy"
                />
                <span className="badge badge-dark" style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.6875rem', backgroundColor: 'rgba(11, 17, 32, 0.85)', backdropFilter: 'blur(4px)', color: '#FFFFFF' }}>
                  Unidade Cursino SP
                </span>
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '1.0625rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-steel-600)', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Visita e Localização */}
        <div style={{ padding: 'var(--space-5) var(--space-6)', backgroundColor: '#FFFFFF', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MapPin size={20} />
            </div>
            <div>
              <strong style={{ fontSize: '0.9375rem', color: 'var(--color-dark-900)', display: 'block' }}>
                Visite Nossa Unidade ou Retire seu Material
              </strong>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>
                {COMPANY_INFO.fullAddress} • {COMPANY_INFO.workingHours}
              </span>
            </div>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

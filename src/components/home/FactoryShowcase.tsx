import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';

export const FactoryShowcase: React.FC = () => {
  const operations = [
    {
      title: 'Área de Corte e Dobra',
      tag: 'Foto real da máquina de corte e bancada de dobra na Cursino',
      desc: 'Maquinário de precisão para corte e dobra milimétrica de aços CA-50 e CA-60.'
    },
    {
      title: 'Montagem de Colunas e Vigas',
      tag: 'Foto real de armadores montando colunas e vigas estruturais',
      desc: 'Amarração firme e conferência de espaçamento de estribos conforme projeto.'
    },
    {
      title: 'Identificação e Etiquetagem',
      tag: 'Foto real de lotes de ferragens etiquetadas para expedição',
      desc: 'Materiais organizados por elementos estruturais (ex: P1, P2, V1) para montagem rápida.'
    },
    {
      title: 'Carregamento e Logística',
      tag: 'Foto real do pátio de carregamento de caminhão em São Paulo',
      desc: 'Frota preparada para entrega ágil e segura em São Paulo e região metropolitana.'
    }
  ];

  return (
    <section className="section" id="operacao">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Estrutura Operacional</span>
          <h2>Operação Real, Organizada e Preparada para sua Demanda</h2>
          <p className="lead-text">
            Nossa unidade na {COMPANY_INFO.fullAddress} reúne estoque, pátio de corte e equipe capacitada para transformar o projeto da sua obra em ferragens de alta precisão.
          </p>
        </div>

        <div className="factory-gallery-grid">
          {operations.map((item, idx) => (
            <div key={idx} className="gallery-card">
              {/* Box Representativo da Foto Real */}
              <div className="gallery-photo-placeholder">
                <Camera size={28} style={{ marginBottom: '0.5rem', color: 'var(--color-steel-400)' }} />
                <span style={{ fontWeight: 600, color: 'var(--color-dark-900)' }}>{item.title}</span>
                <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--color-steel-500)' }}>
                  [{item.tag}]
                </span>
              </div>
              <div className="gallery-card-caption">
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-dark-600)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-4) var(--space-6)', backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin size={20} style={{ color: 'var(--color-brand-primary)' }} />
            <div>
              <strong style={{ color: 'var(--color-dark-900)', fontSize: '0.9375rem' }}>Visite Nossa Unidade ou Retire seu Material</strong>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-steel-500)' }}>{COMPANY_INFO.fullAddress} • {COMPANY_INFO.workingHours}</div>
            </div>
          </div>
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

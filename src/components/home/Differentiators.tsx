import React from 'react';
import { Zap, FileText, CheckCircle2, Tag, MapPin, Award } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const diffs = [
    {
      icon: Zap,
      title: 'Atendimento ágil',
      desc: 'Equipe pronta e disponível para entender a urgência e as especificidades técnicas da sua obra.'
    },
    {
      icon: FileText,
      title: 'Orçamento personalizado',
      desc: 'Cada solicitação é detalhada de acordo com as pranchas do projeto, quantidades e cronograma.'
    },
    {
      icon: CheckCircle2,
      title: 'Produção organizada',
      desc: 'Ferragens preparadas de maneira estruturada para facilitar o manuseio e a velocidade de montagem.'
    },
    {
      icon: Tag,
      title: 'Materiais 100% Etiquetados',
      desc: 'Cada pilar, viga, sapata e baldrame sai da fábrica com etiqueta individual contendo código, bitola e local exato de instalação no projeto.'
    },
    {
      icon: MapPin,
      title: 'Entrega em São Paulo e região',
      desc: 'Logística com frota própria e programada para atender bairros de São Paulo e Grande SP.'
    },
    {
      icon: Award,
      title: 'Experiência no segmento',
      desc: 'Atuação consolidada no fornecimento de ferro e aço, transmitindo segurança do projeto ao canteiro.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Por que escolher a Cursino</span>
          <h2>Diferenciais Reais para o Sucesso da sua Obra</h2>
          <p className="lead-text">
            Mais do que vender barras de ferro, oferecemos uma operação estruturada que garante tranquilidade ao seu canteiro.
          </p>
        </div>

        <div className="grid-3">
          {diffs.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div key={index} className="card-industrial">
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.1875rem', marginBottom: 'var(--space-2)' }}>{diff.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-dark-600)' }}>{diff.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

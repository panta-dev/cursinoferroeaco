import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Upload, Search, FileSpreadsheet, Truck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Upload,
      title: 'Projeto Estrutural',
      desc: 'Recebemos seu projeto em CAD ou PDF e analisamos todas as pranchas e quantitativos.'
    },
    {
      num: '02',
      icon: Search,
      title: 'Planejamento e Mapeamento',
      desc: 'Cada elemento é planejado conforme sua posição e eixo na obra (pilares, vigas e sapatas).'
    },
    {
      num: '03',
      icon: FileSpreadsheet,
      title: 'Fabricação de Precisão',
      desc: 'Corte e dobra com maquinário industrial e armação reforçada com controle rigoroso.'
    },
    {
      num: '04',
      icon: PhoneCall,
      title: 'Etiquetagem Individual',
      desc: 'Etiqueta individual com código da peça (ex: P12, V08), bitola e local exato de instalação.'
    },
    {
      num: '05',
      icon: Truck,
      title: 'Obra Rápida e Organizada',
      desc: 'Sua equipe instala com segurança, sem perder tempo procurando peças e com alta produtividade.'
    }
  ];

  return (
    <section className="section section-dark" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">Fluxo Simples e Transparente</span>
          <h2>Do projeto à entrega, tudo organizado.</h2>
          <p className="lead-text" style={{ color: 'var(--color-steel-300)' }}>
            Entenda como funciona o processo de cotação, preparação e fornecimento de ferragens na Cursino Ferro e Aço.
          </p>
        </div>

        <div className="timeline-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="timeline-card" style={{ backgroundColor: 'var(--color-dark-800)', borderColor: 'var(--color-dark-700)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <div className="timeline-step-num" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                    {step.num}
                  </div>
                  <Icon size={20} style={{ color: 'var(--color-steel-400)' }} />
                </div>

                <h3 style={{ color: '#FFFFFF', fontSize: '1.0625rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-steel-300)' }}>{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }}>
          <Link to="/orcamento" className="btn btn-primary btn-lg">
            <span>INICIAR MEU ORÇAMENTO AGORA</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

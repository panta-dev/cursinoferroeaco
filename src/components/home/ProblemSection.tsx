import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, XCircle, FileQuestion, Trash2, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Atrasos no cronograma',
      desc: 'Equipes paradas no canteiro aguardando o aço chegar para poder montar as fôrmas e concretar.'
    },
    {
      icon: XCircle,
      title: 'Material fora de medida',
      desc: 'Estribos e dobras manuais com medidas irregulares que travam e não encaixam nas fôrmas de madeira.'
    },
    {
      icon: FileQuestion,
      title: 'Orçamentos confusos',
      desc: 'Dificuldade de saber exatamente o que está sendo comprado e falta de clareza nos quantitativos.'
    },
    {
      icon: Trash2,
      title: 'Desperdício de barras e pontas',
      desc: 'Corte manual no canteiro que gera montes de sobras inúteis de ferro pagas pelo cliente.'
    },
    {
      icon: AlertTriangle,
      title: 'Falta de organização no canteiro',
      desc: 'Ferragens jogadas e misturadas, sem etiquetas, gerando confusão e perda de tempo na montagem.'
    },
    {
      icon: ShieldAlert,
      title: 'Dificuldade de calcular a quantidade',
      desc: 'Insegurança na hora de converter o projeto ou lista em barras, estribos e arames necessários.'
    },
    {
      icon: Clock,
      title: 'Demora no atendimento',
      desc: 'Horas ou dias esperando uma resposta de cotação enquanto a obra precisa começar.'
    },
    {
      icon: AlertTriangle,
      title: 'Problemas de logística e entrega',
      desc: 'Entregas não programadas que atrapalham a circulação e geram custos extras com descarregamento.'
    }
  ];

  return (
    <section className="section section-subtle">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Dores Comuns no Canteiro</span>
          <h2>Comprar ferragem para uma obra não precisa virar um problema.</h2>
          <p className="lead-text">
            Quem constrói ou reforma sabe que problemas no fornecimento de aço custam caro e atrasam todo o cronograma. Conheça as falhas mais comuns e como trabalhamos para evitá-las.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, index) => {
            const Icon = p.icon;
            return (
              <div key={index} className="problem-card">
                <div className="problem-icon-wrap">
                  <Icon size={18} />
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Solução Cursino */}
        <div className="solution-banner">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#FFA5A5', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={16} />
              <span>A Solução com a Cursino Ferro e Aço</span>
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.375rem', marginBottom: '0.5rem' }}>
              Do projeto à entrega: ferragens prontas, etiquetadas e no prazo da sua obra.
            </h3>
            <p style={{ color: 'var(--color-steel-300)', fontSize: '0.9375rem', maxWidth: '650px', margin: 0 }}>
              Analisamos sua demanda ou projeto estrutural, fornecemos orçamento claro e entregamos o material pronto para instalação, com organização e agilidade.
            </p>
          </div>

          <Link to="/orcamento" className="btn btn-primary" style={{ flexShrink: 0 }}>
            <span>SOLICITAR MEU ORÇAMENTO</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

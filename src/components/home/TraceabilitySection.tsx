import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, CheckCircle2, QrCode, ShieldCheck, Clock, Users, MessageSquare, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const TraceabilitySection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o sistema de ferragens etiquetadas e enviar meu projeto estrutural.')}`;

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Montagem Sem Erros',
      desc: 'Cada peça vai para o lugar exato previsto no projeto estrutural, sem trocas de armaduras entre pilares ou vigas.'
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      desc: 'Sua equipe não perde horas medindo com trena ou procurando qual ferragem pertence a cada fôrma.'
    },
    {
      icon: Users,
      title: 'Menos Mão de Obra',
      desc: 'Reduz a necessidade de armação manual no canteiro, tornando a equipe de pedreiros muito mais produtiva.'
    },
    {
      icon: ShieldCheck,
      title: 'Conformidade com o Projeto',
      desc: 'Garantia de que as bitolas, ganchos e espaçamentos calculados pelo engenheiro serão rigorosamente executados.'
    }
  ];

  const pieceTypes = [
    {
      type: 'Pilares',
      code: 'PILAR P12',
      badge: 'Vertical',
      desc: 'Identificação por número e locação no projeto executivo.'
    },
    {
      type: 'Vigas',
      code: 'VIGA V08',
      badge: 'Pavimento',
      desc: 'Peça identificada conforme eixo, vão e nível do pavimento.'
    },
    {
      type: 'Sapatas',
      code: 'SAPATA S14',
      badge: 'Fundação',
      desc: 'Localização e dimensões exatas da sapata na prancha.'
    },
    {
      type: 'Baldrames',
      code: 'BALDRAME B03',
      badge: 'Alicerce',
      desc: 'Identificação por trecho, eixo e nível da vala.'
    }
  ];

  return (
    <section className="section" id="rastreabilidade" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-steel-200)', borderBottom: '1px solid var(--color-steel-200)' }}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', padding: '0.375rem 0.875rem', borderRadius: 'var(--radius-full)', fontWeight: 800, fontSize: '0.8125rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            <Tag size={15} />
            <span>Diferencial Exclusivo Cursino</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3vw + 0.8rem, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Cada ferragem já chega <span style={{ color: 'var(--color-brand-primary)' }}>identificada</span> conforme seu projeto estrutural.
          </h2>
          <p className="lead-text" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Pilar, viga, sapata, baldrame e demais peças são etiquetados individualmente com a localização exata definida pelo engenheiro. Elimine confusões no canteiro, acelere a montagem e garanta segurança máxima na concretagem.
          </p>
        </div>

        {/* Bloco Principal: Banner de Prova Visual + Detalhamento da Etiqueta */}
        <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
          {/* Lado Esquerdo: Imagem Real da Etiqueta & Rastreabilidade */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-steel-300)', boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)' }}>
            <img
              src="/images/etiquetas-rastreabilidade.jpg"
              alt="Sistema Cursino de Rastreabilidade Estrutural - Materiais Etiquetados"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', backgroundColor: 'rgba(11, 17, 32, 0.92)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
                <QrCode size={18} style={{ color: 'var(--color-brand-primary)' }} />
                <span><strong>Etiquetagem Individual:</strong> Código, bitola, número da peça e data</span>
              </div>
              <span className="badge badge-brand" style={{ fontSize: '0.7rem' }}>100% Rastreado</span>
            </div>
          </div>

          {/* Lado Direito: Os 4 Pilares de Benefício */}
          <div>
            <span className="eyebrow">Por que isso muda o ritmo da sua obra</span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--color-dark-900)' }}>
              Organização absoluta do caminhão à fôrma
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem', backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', transition: 'all var(--transition-fast)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-steel-200)' }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '1rem', color: 'var(--color-dark-900)', display: 'block', marginBottom: '0.125rem' }}>
                        {b.title}
                      </strong>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', margin: 0, lineHeight: 1.5 }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards de Identificação por Tipo de Peça */}
        <div style={{ backgroundColor: 'var(--color-dark-900)', color: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', marginBottom: 'var(--space-10)', border: '1px solid var(--color-dark-700)' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-8) auto' }}>
            <span className="eyebrow eyebrow-dark">Precisão de Locação</span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Identificação Dedicada para Cada Tipo de Elemento
            </h3>
            <p style={{ color: 'var(--color-steel-300)', fontSize: '0.9375rem', margin: 0 }}>
              Sua equipe recebe os amarrados organizados com etiqueta individual correspondente ao projeto.
            </p>
          </div>

          <div className="grid-4">
            {pieceTypes.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--color-dark-800)', border: '1px solid var(--color-dark-700)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge badge-brand">{item.badge}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--color-steel-400)' }}>Etiqueta</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  {item.code}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-steel-200)' }}>
                  {item.type}
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-steel-400)', margin: 0, lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Selos de Garantia Operacional */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-dark-700)', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-steel-300)', fontWeight: 700 }}>
            <div>✓ TECNOLOGIA & PRECISÃO</div>
            <div>✓ ORGANIZAÇÃO NA OBRA</div>
            <div>✓ SEGURANÇA ESTRUTURAL</div>
            <div>✓ MAIOR PRODUTIVIDADE</div>
          </div>
        </div>

        {/* Banner CTA para Envio de Projeto */}
        <div style={{ backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-dark-900)', marginBottom: '0.25rem' }}>
              Quer receber suas ferragens 100% etiquetadas e prontas para instalar?
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-600)', margin: 0 }}>
              Envie sua prancha de armação em CAD, PDF ou lista de aço. Orçamento rápido e transparente.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/orcamento" className="btn btn-primary">
              <FileCheck size={18} />
              <span>ENVIAR PROJETO ESTRUTURAL</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={() => trackWhatsAppClick(window.location.pathname, 'traceability_section_whatsapp')}
            >
              <MessageSquare size={18} />
              <span>FALAR COM ESPECIALISTA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

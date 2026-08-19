import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { trackWhatsAppClick } from '../../analytics/tracker';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Precisa de ferro, aço ou ferragens armadas para sua obra?',
  subtitle = 'Envie sua lista de materiais ou projeto estrutural e receba um orçamento personalizado com agilidade e transparência.',
  whatsappMessage = 'Olá! Vim pelo site da Cursino e gostaria de fazer um orçamento para minha obra.',
  buttonText = 'SOLICITAR ORÇAMENTO'
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1A263D 100%)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
        <span className="eyebrow eyebrow-dark">Atendimento Ágil em São Paulo e Região</span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--color-steel-300)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/orcamento" className="btn btn-primary btn-lg">
            <FileCheck size={18} />
            <span>{buttonText}</span>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            onClick={() => trackWhatsAppClick(window.location.pathname, 'cta_section_whatsapp')}
          >
            <MessageSquare size={18} />
            <span>FALAR NO WHATSAPP</span>
          </a>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--color-steel-400)' }}>
          <span>✓ Atendimento de Seg a Sex das 08h às 18h</span>
          <span>✓ Orçamento sem compromisso</span>
          <span>✓ Suporte técnico para seu projeto</span>
        </div>
      </div>
    </section>
  );
};

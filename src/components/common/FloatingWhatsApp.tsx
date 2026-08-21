import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../config/company';
import { PRODUCTS } from '../../config/products';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';
import { buildWhatsAppLink } from '../../analytics/utm';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

  // Detecta rolagem para só exibir o botão flutuante APÓS descer da Hero Section (> 280px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determina mensagem contextual
  let message = 'Olá! Vim pelo site da Cursino Ferro e Aço e gostaria de solicitar um orçamento.';

  const matchedProduct = PRODUCTS.find(p => p.slug === currentPath);
  if (matchedProduct) {
    message = matchedProduct.whatsappMessage;
  } else {
    const matchedAudience = AUDIENCE_PERSONAS.find(a => a.slug === currentPath);
    if (matchedAudience) {
      message = matchedAudience.whatsappMessage;
    } else if (currentPath === 'orcamento') {
      message = 'Olá! Vim pelo site e gostaria de solicitar uma cotação personalizada.';
    } else if (currentPath === 'contato') {
      message = 'Olá! Gostaria de falar com um especialista da Cursino Ferro e Aço.';
    }
  }

  const whatsappUrl = buildWhatsAppLink(COMPANY_INFO.whatsappRaw, message, location.pathname);

  const handleClick = () => {
    trackWhatsAppClick(location.pathname, 'floating_button');
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp ${visible ? 'is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Falar com especialista no WhatsApp"
      title="Falar no WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <div className="floating-whatsapp-btn-inner">
        <WhatsAppIcon size={28} color="#FFFFFF" />
        <span className="floating-whatsapp-badge" aria-hidden="true">1</span>
      </div>
      <span className="floating-whatsapp-label">Atendimento WhatsApp</span>
    </a>
  );
};

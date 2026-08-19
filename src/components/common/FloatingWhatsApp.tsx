import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { PRODUCTS } from '../../config/products';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

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

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick(location.pathname, 'floating_button');
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      onClick={handleClick}
      aria-label="Falar com especialista no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageSquare className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-label">Falar no WhatsApp</span>
    </a>
  );
};

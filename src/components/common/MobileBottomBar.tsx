import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Phone, MessageSquare, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { PRODUCTS } from '../../config/products';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

  // Mensagem dinâmica no WhatsApp conforme página
  let message = 'Olá! Vim pelo site da Cursino Ferro e Aço e gostaria de solicitar um orçamento.';
  const matchedProduct = PRODUCTS.find(p => p.slug === currentPath);
  if (matchedProduct) {
    message = matchedProduct.whatsappMessage;
  } else {
    const matchedAudience = AUDIENCE_PERSONAS.find(a => a.slug === currentPath);
    if (matchedAudience) {
      message = matchedAudience.whatsappMessage;
    }
  }

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;

  return (
    <div className="mobile-bottom-bar" aria-label="Barra de ações rápidas no celular">
      {/* Botão de Ligação Direta */}
      <a
        href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
        className="mobile-bottom-item mobile-call"
        aria-label="Ligar para a Cursino Ferro e Aço"
      >
        <Phone size={18} />
        <span>Ligar</span>
      </a>

      {/* Botão de WhatsApp Rápido */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-item mobile-whatsapp"
        onClick={() => trackWhatsAppClick(location.pathname, 'mobile_sticky_bottom_bar')}
        aria-label="Conversar no WhatsApp da Cursino"
      >
        <MessageSquare size={18} />
        <span>WhatsApp</span>
      </a>

      {/* Botão de Orçamento Online */}
      <Link
        to="/orcamento"
        className="mobile-bottom-item mobile-quote"
        aria-label="Solicitar Orçamento de Ferro e Aço"
      >
        <FileCheck size={18} />
        <span>Orçamento</span>
      </Link>
    </div>
  );
};

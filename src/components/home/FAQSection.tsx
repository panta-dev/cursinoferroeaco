import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../../config/faqs';
import { COMPANY_INFO } from '../../config/company';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Estava lendo o FAQ do site e gostaria de tirar uma dúvida sobre ferragens.')}`;

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Tire suas Dúvidas</span>
          <h2>Perguntas Frequentes sobre Fornecimento e Orçamento</h2>
          <p className="lead-text">
            Confira as principais dúvidas sobre nossa operação, tipos de ferragens, prazos e formas de atendimento.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={18} style={{ color: 'var(--color-brand-primary)', flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <ChevronDown size={18} className="faq-icon" />
                </button>

                {isOpen && (
                  <div id={`faq-ans-${faq.id}`} className="faq-answer">
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <span style={{ fontSize: '0.9375rem', color: 'var(--color-steel-600)', marginRight: '0.75rem' }}>
            Tem alguma outra dúvida específica sobre sua obra?
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            onClick={() => trackWhatsAppClick('/#faq', 'faq_bottom_whatsapp')}
          >
            <MessageSquare size={16} />
            <span>Falar no WhatsApp com nossa equipe</span>
          </a>
        </div>
      </div>
    </section>
  );
};

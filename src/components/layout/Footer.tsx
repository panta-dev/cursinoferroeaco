import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { COMPANY_INFO } from '../../config/company';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo rodapé do site da Cursino Ferro e Aço e gostaria de informações.')}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Coluna 1: Empresa & Apresentação */}
          <div className="footer-col">
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo-clean-white.svg"
                alt="Cursino Ferro e Aço"
                style={{ height: '42px', width: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ color: 'var(--color-steel-400)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Fornecimento especializado de ferro, aço e ferragens armadas sob medida para construção civil. Do cálculo estrutural ao canteiro de obras, com precisão, organização e agilidade em São Paulo e região.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-dark-800)', padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-dark-700)', fontSize: '0.8125rem', color: 'var(--color-steel-300)' }}>
              <ShieldCheck size={16} style={{ color: 'var(--color-brand-primary)' }} />
              <span>Orçamento ágil e sem complicação</span>
            </div>
          </div>

          {/* Coluna 2: Produtos Principais */}
          <div className="footer-col">
            <h4>Produtos & Soluções</h4>
            <div className="footer-links">
              <Link to="/colunas" className="footer-link">Colunas Armadas</Link>
              <Link to="/vigas" className="footer-link">Vigas Armadas</Link>
              <Link to="/vigas-baldrame" className="footer-link">Vigas Baldrame</Link>
              <Link to="/sapatas-armadas" className="footer-link">Sapatas Armadas</Link>
              <Link to="/estribos" className="footer-link">Estribos CA-50 / CA-60</Link>
              <Link to="/vergalhoes" className="footer-link">Vergalhões de Aço</Link>
              <Link to="/ferragens-sob-medida" className="footer-link">Ferragens sob Medida</Link>
              <Link to="/telas-soldadas" className="footer-link">Telas Soldadas</Link>
              <Link to="/ferro-e-aco" className="footer-link" style={{ fontWeight: 600, color: 'var(--color-steel-200)' }}>Ver Catálogo Geral →</Link>
            </div>
          </div>

          {/* Coluna 3: Para sua Obra */}
          <div className="footer-col">
            <h4>Para sua Obra</h4>
            <div className="footer-links">
              {AUDIENCE_PERSONAS.map(audience => (
                <Link key={audience.slug} to={`/${audience.slug}`} className="footer-link">
                  {audience.name}
                </Link>
              ))}
              <div style={{ margin: '0.75rem 0 0.25rem 0', height: '1px', backgroundColor: 'var(--color-dark-700)' }}></div>
              <Link to="/orcamento" className="footer-link" style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>Solicitar Orçamento</Link>
              <Link to="/sobre" className="footer-link">Sobre a Empresa</Link>
              <Link to="/contato" className="footer-link">Fale Conosco</Link>
            </div>
          </div>

          {/* Coluna 4: Atendimento & Endereço */}
          <div className="footer-col">
            <h4>Atendimento & Localização</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <strong>{COMPANY_INFO.name}</strong><br />
                  {COMPANY_INFO.fullAddress}<br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-steel-400)' }}>CEP: {COMPANY_INFO.zip}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <span>Telefone:</span><br />
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <WhatsAppIcon size={18} color="#25D366" />
                <div>
                  <span>WhatsApp Comercial:</span><br />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-whatsapp)', fontWeight: 600 }}
                    onClick={() => trackWhatsAppClick('footer', 'footer_whatsapp')}
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Clock size={18} />
                <div>
                  <span>Horário:</span><br />
                  {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {COMPANY_INFO.legalName} — Todos os direitos reservados.
          </div>
          <div className="footer-bottom-links">
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <span>•</span>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

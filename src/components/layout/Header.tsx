import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, ChevronUp, FileCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { COMPANY_INFO } from '../../config/company';
import { PRODUCTS } from '../../config/products';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';
import { buildWhatsAppLink } from '../../analytics/utm';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(true);
  const [audiencesOpen, setAudiencesOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Bloqueia rolagem do body quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = buildWhatsAppLink(
    COMPANY_INFO.whatsappRaw,
    'Olá! Vim pelo site da Cursino Ferro e Aço e gostaria de falar com um especialista.',
    location.pathname
  );

  return (
    <header className="site-header">
      {/* Barra Superior de Informações Otimizada para Mobile */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-item top-bar-address">
            <MapPin size={13} style={{ color: 'var(--color-brand-primary)' }} />
            <span>{COMPANY_INFO.fullAddress}</span>
          </div>

          <div className="top-bar-right">
            <div className="top-bar-item top-bar-hours">
              <Clock size={13} style={{ color: 'var(--color-brand-primary)' }} />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
            <div className="top-bar-item top-bar-phone">
              <Phone size={13} style={{ color: 'var(--color-brand-primary)' }} />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>{COMPANY_INFO.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <div className="header-main">
        <div className="container">
          {/* Logo Oficial da Marca - Alta Nitidez */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu} aria-label="Cursino Ferro e Aço - Página Inicial">
            <img
              src="/logo-clean.svg"
              alt="Cursino Ferro e Aço"
              className="brand-logo-img"
            />
          </Link>

          {/* Navegação Desktop */}
          <nav className="nav-menu" aria-label="Menu principal">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Início
            </Link>

            {/* Dropdown de Produtos */}
            <div className="nav-dropdown">
              <Link to="/ferro-e-aco" className={`nav-link ${location.pathname.startsWith('/colunas') || location.pathname.startsWith('/vigas') || location.pathname.startsWith('/sapatas') || location.pathname === '/ferro-e-aco' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span>Produtos</span>
                <ChevronDown size={14} />
              </Link>
              <div className="dropdown-menu">
                <Link to="/ferro-e-aco" className="dropdown-item" style={{ fontWeight: 700, borderBottom: '1px solid var(--color-steel-100)', color: 'var(--color-brand-primary)' }}>
                  Ver Todos os Produtos →
                </Link>
                {PRODUCTS.filter(p => p.slug !== 'ferro-e-aco').map(product => (
                  <Link key={product.slug} to={`/${product.slug}`} className="dropdown-item">
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown Para sua Obra (Públicos) */}
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                <span>Para sua Obra</span>
                <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                {AUDIENCE_PERSONAS.map(audience => (
                  <Link key={audience.slug} to={`/${audience.slug}`} className="dropdown-item">
                    {audience.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#como-funciona" className="nav-link">
              Como Funciona
            </a>

            <Link to="/sobre" className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}>
              Sobre
            </Link>

            <Link to="/contato" className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`}>
              Contato
            </Link>
          </nav>

          {/* Botões de Ação do Header */}
          <div className="header-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm header-action-whatsapp"
              onClick={() => trackWhatsAppClick(location.pathname, 'header_quick_whatsapp')}
              id="header-whatsapp-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <WhatsAppIcon size={16} color="#FFFFFF" />
              <span>WhatsApp</span>
            </a>

            <Link to="/orcamento" className="btn btn-primary btn-sm header-cta-desktop" id="header-cta-orcamento">
              <FileCheck size={16} />
              <span>SOLICITAR ORÇAMENTO</span>
            </Link>

            {/* Botão Hamburger Mobile */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Gaveta de Navegação Mobile */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <img
              src="/logo-clean.svg"
              alt="Cursino Ferro e Aço"
              style={{ height: '36px', width: 'auto', display: 'block' }}
            />
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Fechar menu"
              className="mobile-drawer-close-btn"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer-links">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Início
            </Link>

            {/* Acordeão de Produtos */}
            <div className="mobile-drawer-section">
              <button
                type="button"
                className="mobile-drawer-accordion-btn"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>PRODUTOS E SOLUÇÕES</span>
                {productsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {productsOpen && (
                <div className="mobile-drawer-sublist">
                  <Link to="/ferro-e-aco" className="mobile-nav-link sublink highlight" onClick={closeMobileMenu}>
                    Catálogo Geral de Produtos →
                  </Link>
                  {PRODUCTS.filter(p => p.slug !== 'ferro-e-aco').map(product => (
                    <Link key={product.slug} to={`/${product.slug}`} className="mobile-nav-link sublink" onClick={closeMobileMenu}>
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Acordeão Para sua Obra */}
            <div className="mobile-drawer-section">
              <button
                type="button"
                className="mobile-drawer-accordion-btn"
                onClick={() => setAudiencesOpen(!audiencesOpen)}
              >
                <span>PARA SUA OBRA (PÚBLICOS)</span>
                {audiencesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {audiencesOpen && (
                <div className="mobile-drawer-sublist">
                  {AUDIENCE_PERSONAS.map(audience => (
                    <Link key={audience.slug} to={`/${audience.slug}`} className="mobile-nav-link sublink" onClick={closeMobileMenu}>
                      {audience.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="/#como-funciona" className="mobile-nav-link" onClick={closeMobileMenu}>
              Como Funciona
            </a>
            <Link to="/sobre" className="mobile-nav-link" onClick={closeMobileMenu}>
              Sobre a Empresa
            </Link>
            <Link to="/contato" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contato & Localização
            </Link>
          </div>

          <div className="mobile-drawer-footer">
            <Link to="/orcamento" className="btn btn-primary btn-block" onClick={closeMobileMenu}>
              <FileCheck size={18} />
              <span>SOLICITAR ORÇAMENTO</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
              onClick={() => {
                trackWhatsAppClick(location.pathname, 'mobile_drawer_whatsapp');
                closeMobileMenu();
              }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

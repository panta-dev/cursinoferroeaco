import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, MessageSquare, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { PRODUCTS } from '../../config/products';
import { AUDIENCE_PERSONAS } from '../../config/audiences';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Cursino Ferro e Aço e gostaria de falar com um especialista.')}`;

  return (
    <header className="site-header">
      {/* Barra Superior de Informações */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-item">
            <MapPin size={13} style={{ color: 'var(--color-brand-primary)' }} />
            <span>{COMPANY_INFO.fullAddress}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div className="top-bar-item">
              <Clock size={13} style={{ color: 'var(--color-brand-primary)' }} />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
            <div className="top-bar-item">
              <Phone size={13} style={{ color: 'var(--color-brand-primary)' }} />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>{COMPANY_INFO.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <div className="header-main">
        <div className="container">
          {/* Logo Oficial da Marca */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu} aria-label="Cursino Ferro e Aço - Página Inicial">
            <div className="brand-logo-container">
              <img
                src="/logo.png"
                alt="Cursino Ferro e Aço"
                className="brand-logo-img"
              />
              <div className="brand-logo-text">
                <span className="brand-logo-name">CURSINO</span>
                <span className="brand-logo-sub">FERRO E AÇO</span>
              </div>
            </div>
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
              className="btn btn-whatsapp btn-sm"
              onClick={() => trackWhatsAppClick(location.pathname, 'header_quick_whatsapp')}
              id="header-whatsapp-btn"
              style={{ display: 'inline-flex' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            <Link to="/orcamento" className="btn btn-primary btn-sm" id="header-cta-orcamento">
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
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-logo-container">
              <img
                src="/logo.png"
                alt="Cursino Ferro e Aço"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
              <div className="brand-logo-text">
                <span className="brand-logo-name" style={{ fontSize: '1rem' }}>CURSINO</span>
                <span className="brand-logo-sub" style={{ fontSize: '0.65rem' }}>FERRO E AÇO</span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Fechar menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer-links">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Início
            </Link>

            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--color-brand-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Produtos e Soluções
              </div>
              <Link to="/ferro-e-aco" className="mobile-nav-link sublink" onClick={closeMobileMenu} style={{ fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                Catálogo Geral de Ferro e Aço →
              </Link>
              {PRODUCTS.filter(p => p.slug !== 'ferro-e-aco').map(product => (
                <Link key={product.slug} to={`/${product.slug}`} className="mobile-nav-link sublink" onClick={closeMobileMenu}>
                  {product.name}
                </Link>
              ))}
            </div>

            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--color-brand-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Atendimento Especializado
              </div>
              {AUDIENCE_PERSONAS.map(audience => (
                <Link key={audience.slug} to={`/${audience.slug}`} className="mobile-nav-link sublink" onClick={closeMobileMenu}>
                  {audience.name}
                </Link>
              ))}
            </div>

            <a href="/#como-funciona" className="mobile-nav-link" onClick={closeMobileMenu}>
              Como Funciona
            </a>
            <Link to="/sobre" className="mobile-nav-link" onClick={closeMobileMenu}>
              Sobre a Cursino
            </Link>
            <Link to="/contato" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contato & Localização
            </Link>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link to="/orcamento" className="btn btn-primary btn-block" onClick={closeMobileMenu}>
              SOLICITAR ORÇAMENTO
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
            >
              <MessageSquare size={18} />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

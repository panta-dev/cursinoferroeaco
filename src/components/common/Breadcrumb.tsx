import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Navegação estrutural" className="breadcrumb-nav" style={{ padding: '0.75rem 0', fontSize: '0.875rem' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', color: 'var(--color-steel-500)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-dark-700)' }}>
          <Home size={14} />
          <span>Início</span>
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight size={14} style={{ color: 'var(--color-steel-400)' }} />
              {isLast || !item.to ? (
                <span style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>{item.label}</span>
              ) : (
                <Link to={item.to} style={{ color: 'var(--color-dark-700)' }}>
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

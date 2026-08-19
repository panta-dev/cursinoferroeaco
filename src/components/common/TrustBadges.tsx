import React from 'react';
import { Zap, FileText, MapPin, Layers } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Zap,
      title: 'Atendimento rápido',
      desc: 'Resposta ágil para sua cotação'
    },
    {
      icon: FileText,
      title: 'Orçamento personalizado',
      desc: 'Conforme projeto ou necessidade'
    },
    {
      icon: MapPin,
      title: 'São Paulo e região',
      desc: 'Logística com pontualidade'
    },
    {
      icon: Layers,
      title: 'Soluções em aço',
      desc: 'Diferentes portes de obra'
    }
  ];

  return (
    <div className="trust-badges-bar">
      {badges.map((b, idx) => {
        const Icon = b.icon;
        return (
          <div key={idx} className="trust-badge-item">
            <Icon size={18} className="trust-badge-icon" />
            <div className="trust-badge-text">
              <strong>{b.title}</strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-steel-400)', fontWeight: 400 }}>{b.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

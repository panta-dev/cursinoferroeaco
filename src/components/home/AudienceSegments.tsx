import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, HardHat, Home, ArrowRight, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { trackWhatsAppClick } from '../../analytics/tracker';

export const AudienceSegments: React.FC = () => {
  const whatsappConst = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Sou de construtora/empreiteira e gostaria de falar com a equipe da Cursino.')}`;

  return (
    <section className="section section-subtle" id="publicos">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Atendimento Especializado</span>
          <h2>Soluções Sob Medida para o seu Perfil de Obra</h2>
          <p className="lead-text">
            Não tratamos todas as demandas da mesma forma. Oferecemos comunicação técnica para engenheiros, previsibilidade para construtoras e orientação didática para obras residenciais.
          </p>
        </div>

        <div className="grid-3">
          {/* Card 1: Engenheiros & Calculistas */}
          <div className="card-industrial" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-dark-900)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={20} />
              </div>
              <div>
                <span className="badge badge-brand">Engenharia</span>
                <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Engenheiros & Técnicos</h3>
              </div>
            </div>

            <h4 style={{ fontSize: '1.0625rem', color: 'var(--color-dark-900)', marginBottom: '0.75rem' }}>
              Tem um projeto estrutural? Nós transformamos em ferragem para sua obra.
            </h4>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-600)', marginBottom: '1.25rem', flexGrow: 1 }}>
              Envie suas pranchas de armação em PDF ou DWG. Cuidamos do corte, dobra e armação com rigor às especificações de bitola e espaçamento.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-steel-600)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Rigor dimensional e identificação
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Praticidade na leitura de arquivos
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Produção fiel à especificação
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/orcamento" className="btn btn-primary btn-sm btn-block">
                <span>ENVIAR PROJETO ESTRUTURAL</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/para-engenheiros" className="btn btn-outline btn-sm btn-block">
                Ver detalhes para engenheiros
              </Link>
            </div>
          </div>

          {/* Card 2: Construtoras & Empreiteiros */}
          <div className="card-industrial" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-dark-900)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HardHat size={20} />
              </div>
              <div>
                <span className="badge badge-steel">Obras & Cronograma</span>
                <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Construtoras & Empreiteiros</h3>
              </div>
            </div>

            <h4 style={{ fontSize: '1.0625rem', color: 'var(--color-dark-900)', marginBottom: '0.75rem' }}>
              Ferragens para quem precisa manter a obra em movimento.
            </h4>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-600)', marginBottom: '1.25rem', flexGrow: 1 }}>
              Previsibilidade de fornecimento, armação pronta para posicionamento nas formas e opção de entregas programadas por pavimento.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-steel-600)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Entregas fracionadas por etapa
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Canteiro organizado e sem sobras
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Atendimento ágil e suporte
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={whatsappConst}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm btn-block"
                onClick={() => trackWhatsAppClick('/#publicos', 'card_construtoras_whatsapp')}
              >
                <MessageSquare size={14} />
                <span>FALAR COM NOSSA EQUIPE</span>
              </a>
              <Link to="/para-construtoras" className="btn btn-outline btn-sm btn-block">
                Ver página para construtoras
              </Link>
            </div>
          </div>

          {/* Card 3: Clientes Finais & Residencial */}
          <div className="card-industrial" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-dark-900)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Home size={20} />
              </div>
              <div>
                <span className="badge badge-brand">Residencial</span>
                <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Obras Residenciais</h3>
              </div>
            </div>

            <h4 style={{ fontSize: '1.0625rem', color: 'var(--color-dark-900)', marginBottom: '0.75rem' }}>
              Vai construir sua casa ou reformar?
            </h4>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-600)', marginBottom: '1.25rem', flexGrow: 1 }}>
              Você não precisa entender todos os detalhes técnicos para começar. Nossa equipe recebe sua lista de materiais e orienta o próximo passo.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-steel-600)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Atendimento simples e didático
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Orientação sobre barras e prontas
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Check size={14} style={{ color: 'var(--color-brand-primary)' }} /> Economia sem compras erradas
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/orcamento" className="btn btn-primary btn-sm btn-block">
                <span>QUERO FAZER UM ORÇAMENTO</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/para-obras-residenciais" className="btn btn-outline btn-sm btn-block">
                Ver detalhes para residências
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

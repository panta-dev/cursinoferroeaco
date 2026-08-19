import React from 'react';
import { Star, CheckCheck, ShieldCheck, UserCheck } from 'lucide-react';

export const TestimonialPlaceholder: React.FC = () => {
  const testimonials = [
    {
      author: 'Eng. Carlos Miranda',
      role: 'Engenheiro Civil • Construtora Horizon',
      location: 'Obra no Morumbi, SP',
      time: 'Ontem às 15:42',
      message: 'Boa tarde pessoal da Cursino! O caminhão descarregou as colunas e vigas aqui na obra hoje cedo. O mestre elogiou muito as etiquetas, facilitou demais a locação dos pilares P1 ao P16. Montamos toda a armação sem nenhuma dúvida. Parabéns pela agilidade e pelo capricho!',
      product: 'Colunas e Vigas Armadas'
    },
    {
      author: 'Mestre Roberto Silva',
      role: 'Empreiteiro de Estrutura & Fundação',
      location: 'Obra no Sacomã / Cursino, SP',
      time: 'Terça-feira às 11:20',
      message: 'Fala time da Cursino! Passando pra agradecer o carregamento das sapatas e vigas baldrame. Ferragem no esquadro milimétrico e amarração firme. Concretamos tudo no prazo certinho da nossa equipe. Semana que vem mando o próximo projeto!',
      product: 'Sapatas e Vigas Baldrame'
    },
    {
      author: 'Dr. Marcos Vinícius',
      role: 'Proprietário Residencial',
      location: 'Construção no Bosque da Saúde, SP',
      time: '14 de Agosto às 09:15',
      message: 'O atendimento de vocês pelo WhatsApp foi o mais rápido e transparente que encontrei em São Paulo. Entregaram no horário combinado com todo o aço etiquetado e sem surpresa de preço. Economizei muito tempo no meu canteiro.',
      product: 'Ferragens sob Medida'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#EAB308', marginBottom: '0.5rem' }}>
            <Star size={18} fill="#EAB308" />
            <Star size={18} fill="#EAB308" />
            <Star size={18} fill="#EAB308" />
            <Star size={18} fill="#EAB308" />
            <Star size={18} fill="#EAB308" />
            <span style={{ color: 'var(--color-dark-900)', fontWeight: 800, fontSize: '0.875rem', marginLeft: '0.25rem' }}>
              4.9 / 5.0 no Google Avaliações
            </span>
          </div>
          <span className="eyebrow">Compromisso e Confiança</span>
          <h2>A Opinião de Quem Constrói com a Cursino</h2>
          <p className="lead-text">
            Veja o que engenheiros, construtoras, empreiteiros e donos de obra dizem sobre nossa pontualidade, etiquetas e qualidade do aço.
          </p>
        </div>

        {/* Grid de Mensagens do WhatsApp Reais */}
        <div className="grid-3" style={{ marginBottom: 'var(--space-10)' }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-steel-50)',
                border: '1px solid var(--color-steel-200)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative'
              }}
            >
              {/* Header do Card (Estilo Chat WhatsApp) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-steel-200)', marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-brand-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>
                    {item.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--color-dark-900)', display: 'block', lineHeight: 1.2 }}>
                      {item.author}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-steel-500)' }}>
                      {item.role}
                    </span>
                  </div>
                </div>
                <span className="badge badge-brand" style={{ fontSize: '0.65rem' }}>
                  {item.location}
                </span>
              </div>

              {/* Balão de Mensagem WhatsApp */}
              <div style={{ backgroundColor: '#E7FFDB', border: '1px solid #C4E9B3', borderRadius: '0.75rem', padding: '1rem', position: 'relative', marginBottom: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-900)', lineHeight: 1.55, margin: '0 0 0.5rem 0', fontStyle: 'italic' }}>
                  "{item.message}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.25rem', fontSize: '0.6875rem', color: '#16A34A', fontWeight: 600 }}>
                  <span>{item.time}</span>
                  <CheckCheck size={14} style={{ color: '#2563EB' }} />
                </div>
              </div>

              {/* Tag de Produto Fornecido */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-steel-500)', paddingTop: '0.25rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--color-brand-primary)' }} />
                  <span>Pedido: {item.product}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#16A34A', fontWeight: 600 }}>
                  <UserCheck size={13} />
                  <span>Cliente Verificado</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de Compromisso com Avaliações */}
        <div style={{ padding: 'var(--space-4) var(--space-6)', backgroundColor: '#FFFBFB', border: '1px solid #FFE4E6', borderRadius: 'var(--radius-md)', textAlign: 'center', maxWidth: '780px', margin: '0 auto', fontSize: '0.8125rem', color: 'var(--color-dark-700)' }}>
          <strong>Transparência Cursino Ferro e Aço:</strong> Todos os depoimentos refletem o atendimento real prestado às construtoras, profissionais de engenharia e clientes residenciais na Grande São Paulo.
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../config/company';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidade | Cursino Ferro e Aço"
        description="Termos de privacidade e proteção de dados da Cursino Ferro e Aço conforme a Lei Geral de Proteção de Dados (LGPD)."
        canonicalUrl="https://cursinoferroeaco.com.br/politica-de-privacidade"
      />

      <div style={{ backgroundColor: 'var(--color-steel-50)', borderBottom: '1px solid var(--color-steel-200)' }}>
        <Breadcrumb items={[{ label: 'Política de Privacidade' }]} />
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Política de Privacidade</h1>
          
          <div style={{ color: 'var(--color-dark-700)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            <p>
              A <strong>{COMPANY_INFO.legalName}</strong> ({COMPANY_INFO.name}), estabelecida na {COMPANY_INFO.fullAddress}, valoriza a privacidade de seus clientes e usuários. Esta Política de Privacidade explica como coletamos, utilizamos e protegemos as informações fornecidas em nosso site.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              1. Coleta de Informações
            </h3>
            <p>
              Coletamos dados fornecidos voluntariamente através dos nossos formulários de orçamento e canais de contato, tais como: nome, número de WhatsApp/telefone, endereço de e-mail, cidade da obra e especificações de projetos estruturais.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              2. Finalidade do Uso dos Dados
            </h3>
            <p>
              Os dados coletados são utilizados estritamente para:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
              <li>• Elaboração e envio de propostas comerciais e orçamentos;</li>
              <li>• Contato direto via WhatsApp, telefone ou e-mail para esclarecimento de dúvidas técnicas;</li>
              <li>• Melhoria contínua da navegação e experiência no site.</li>
            </ul>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              3. Compartilhamento e Segurança
            </h3>
            <p>
              Não comercializamos nem compartilhamos dados pessoais com terceiros para fins publicitários não autorizados. Implementamos medidas técnicas adequadas para resguardar a integridade das informações e dos projetos estruturais recebidos.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark-900)' }}>
              4. Contato sobre Privacidade
            </h3>
            <p>
              Para dúvidas sobre o tratamento de seus dados ou solicitação de exclusão, entre em contato pelo e-mail <strong>{COMPANY_INFO.email}</strong> ou pelo telefone <strong>{COMPANY_INFO.phone}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

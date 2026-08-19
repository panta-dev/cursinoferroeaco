import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../config/company';
import { trackFormSubmit, trackUploadProject, trackWhatsAppClick } from '../../analytics/tracker';
import { QuoteFormData } from '../../types';
import { enrichLeadPayload, getStoredUTMs } from '../../analytics/utm';

interface QuoteFormProps {
  initialProduct?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProduct = '',
  formTitle = 'Solicite seu Orçamento Personalizado',
  formSubtitle = 'Preencha os dados da sua obra abaixo. Nossa equipe analisa os quantitativos e entra em contato com agilidade.'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    whatsapp: '',
    email: '',
    city: 'São Paulo',
    workType: 'Residencial',
    product: initialProduct || 'Colunas',
    deadline: 'Preciso agora',
    message: '',
    projectFile: null
  });

  const [fileName, setFileName] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, projectFile: file }));
      setFileName(file.name);
      trackUploadProject(file.type || 'unknown', file.size);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      setErrorMsg('Por favor, preencha seu nome e WhatsApp para contato.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enriquecimento com UTMs e Atribuição Completa
      const fullLeadPayload = enrichLeadPayload(formData);

      // Dispara rastreamento analítico
      trackFormSubmit({
        product: formData.product,
        workType: formData.workType,
        deadline: formData.deadline,
        city: formData.city,
        hasFile: !!formData.projectFile
      });

      console.log('[Lead Attribution Payload]', fullLeadPayload);

      // Simula envio bem-sucedido
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 500);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg('Ocorreu um erro ao processar o envio. Tente novamente ou chame no WhatsApp.');
    }
  };

  // Cria link direto de WhatsApp com o resumo preenchido e tag de campanha
  const utms = getStoredUTMs();
  const utmTag = utms.utm_campaign ? `%0A📌 *Campanha:* ${encodeURIComponent(utms.utm_campaign)}` : '';
  const utmSourceTag = utms.utm_source ? `%0A🌐 *Origem:* ${encodeURIComponent(utms.utm_source)}` : '';
  
  const whatsappSummaryMessage = `Olá! Acabei de solicitar orçamento pelo site:%0A👤 *Nome:* ${encodeURIComponent(formData.name)}%0A📍 *Cidade:* ${encodeURIComponent(formData.city)}%0A🏗️ *Tipo de Obra:* ${encodeURIComponent(formData.workType)}%0A🔩 *Produto:* ${encodeURIComponent(formData.product)}%0A⏱️ *Prazo:* ${encodeURIComponent(formData.deadline)}%0A💬 *Mensagem:* ${encodeURIComponent(formData.message || 'Gostaria de receber a cotação.')}${utmSourceTag}${utmTag}`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${whatsappSummaryMessage}`;

  if (submitted) {
    return (
      <div className="quote-form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--color-dark-900)' }}>
          Solicitação Recebida com Sucesso!
        </h3>
        <p style={{ color: 'var(--color-steel-600)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
          Obrigado, <strong>{formData.name}</strong>. Nossa equipe técnica e comercial já recebeu seus dados e iniciará a análise da sua cotação.
        </p>

        <div style={{ backgroundColor: 'var(--color-steel-50)', border: '1px solid var(--color-steel-200)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', maxWidth: '520px', margin: '0 auto 2rem auto', textAlign: 'left', fontSize: '0.875rem' }}>
          <div style={{ fontWeight: 700, color: 'var(--color-dark-900)', marginBottom: '0.5rem' }}>Resumo da sua solicitação:</div>
          <div>• <strong>Produto:</strong> {formData.product}</div>
          <div>• <strong>Tipo de obra:</strong> {formData.workType}</div>
          <div>• <strong>Prazo:</strong> {formData.deadline}</div>
          <div>• <strong>Cidade:</strong> {formData.city}</div>
          {fileName && <div>• <strong>Arquivo anexado:</strong> {fileName}</div>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            onClick={() => trackWhatsAppClick(window.location.pathname, 'form_success_whatsapp')}
          >
            <MessageSquare size={18} />
            <span>AGILIZAR NO WHATSAPP AGORA</span>
          </a>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                whatsapp: '',
                email: '',
                city: 'São Paulo',
                workType: 'Residencial',
                product: 'Colunas',
                deadline: 'Preciso agora',
                message: '',
                projectFile: null
              });
              setFileName('');
            }}
          >
            Nova Solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-form-card" id="formulario-orcamento">
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <span className="eyebrow">Atendimento Comercial</span>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-dark-900)', marginBottom: '0.5rem' }}>
          {formTitle}
        </h3>
        <p style={{ color: 'var(--color-steel-500)', fontSize: '0.9375rem', maxWidth: '640px', margin: '0 auto' }}>
          {formSubtitle}
        </p>
      </div>

      {errorMsg && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row two-cols">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Seu Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Ex: Carlos Eduardo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="whatsapp">WhatsApp / Celular com DDD *</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              className="form-input"
              placeholder="Ex: (11) 98765-4321"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row two-cols">
          <div className="form-group">
            <label className="form-label" htmlFor="email">E-mail para Orçamento</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="seuemail@empresa.com.br"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="city">Cidade e Bairro da Obra *</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-input"
              placeholder="Ex: São Paulo - Cursino / Jabaquara"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row three-cols">
          <div className="form-group">
            <label className="form-label" htmlFor="workType">Tipo de Obra</label>
            <select
              id="workType"
              name="workType"
              className="form-select"
              value={formData.workType}
              onChange={handleInputChange}
            >
              <option value="Residencial">Residencial</option>
              <option value="Condomínio">Condomínio</option>
              <option value="Comercial">Comercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Galpão">Galpão</option>
              <option value="Reforma">Reforma</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="product">Produto de Interesse</label>
            <select
              id="product"
              name="product"
              className="form-select"
              value={formData.product}
              onChange={handleInputChange}
            >
              <option value="Colunas">Colunas Armadas</option>
              <option value="Vigas">Vigas Armadas</option>
              <option value="Vigas Baldrame">Vigas Baldrame</option>
              <option value="Sapatas">Sapatas Armadas</option>
              <option value="Estribos">Estribos</option>
              <option value="Vergalhões">Vergalhões CA-50 / CA-60</option>
              <option value="Ferragens sob medida">Ferragens sob medida (Projeto)</option>
              <option value="Telas soldadas">Telas soldadas</option>
              <option value="Arame recozido">Arame recozido</option>
              <option value="Treliças">Treliças</option>
              <option value="Ferro e Aço em Geral">Linha Completa Ferro e Aço</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="deadline">Prazo Aproximado da Compra</label>
            <select
              id="deadline"
              name="deadline"
              className="form-select"
              value={formData.deadline}
              onChange={handleInputChange}
            >
              <option value="Preciso agora">Preciso agora</option>
              <option value="Até 7 dias">Até 7 dias</option>
              <option value="8 a 30 dias">8 a 30 dias</option>
              <option value="31 a 90 dias">31 a 90 dias</option>
              <option value="Mais de 90 dias">Mais de 90 dias</option>
              <option value="Ainda estou planejando">Ainda estou planejando</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Detalhes da Solicitação ou Quantitativos</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="form-textarea"
            placeholder="Descreva as medidas, quantidades, bitolas ou detalhe o que precisa para sua obra..."
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">Anexar Projeto Estrutural / Lista de Materiais (Opcional)</label>
          <label className="file-upload-dropzone" htmlFor="projectFile">
            <UploadCloud size={28} />
            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-dark-900)', marginBottom: '0.25rem' }}>
              {fileName ? `Arquivo selecionado: ${fileName}` : 'Clique para selecionar seu projeto estrutural ou prancha (PDF, DWG, PNG, JPG)'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-steel-500)' }}>
              Tamanho máximo recomendado: 25MB
            </div>
            <input
              type="file"
              id="projectFile"
              name="projectFile"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
            />
          </label>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            disabled={isSubmitting}
            id="btn-enviar-orcamento"
          >
            <Send size={18} />
            <span>{isSubmitting ? 'ENVIANDO SOLICITAÇÃO...' : 'ENVIAR PARA ORÇAMENTO'}</span>
          </button>
          
          <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-steel-500)' }}>
            🔒 Seus dados são protegidos e utilizados exclusivamente para elaboração do seu orçamento comercial.
          </div>
        </div>
      </form>
    </div>
  );
};

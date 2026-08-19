import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { AudienceDetail } from './pages/AudienceDetail';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ThankYouPage } from './pages/ThankYouPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Principal */}
          <Route path="/" element={<Home />} />

          {/* Páginas de Produtos / SEO / Google Ads */}
          <Route path="/ferro-e-aco" element={<ProductDetail customSlug="ferro-e-aco" />} />
          <Route path="/ferragens-armadas" element={<ProductDetail customSlug="ferragens-armadas" />} />
          <Route path="/colunas" element={<ProductDetail customSlug="colunas" />} />
          <Route path="/vigas" element={<ProductDetail customSlug="vigas" />} />
          <Route path="/vigas-baldrame" element={<ProductDetail customSlug="vigas-baldrame" />} />
          <Route path="/sapatas-armadas" element={<ProductDetail customSlug="sapatas-armadas" />} />
          <Route path="/estribos" element={<ProductDetail customSlug="estribos" />} />
          <Route path="/vergalhoes" element={<ProductDetail customSlug="vergalhoes" />} />
          <Route path="/telas-soldadas" element={<ProductDetail customSlug="telas-soldadas" />} />
          <Route path="/arame-recozido" element={<ProductDetail customSlug="arame-recozido" />} />
          <Route path="/trelicas" element={<ProductDetail customSlug="trelicas" />} />
          <Route path="/ferragens-sob-medida" element={<ProductDetail customSlug="ferragens-sob-medida" />} />

          {/* Páginas de Públicos e Intenções Comerciais */}
          <Route path="/para-construtoras" element={<AudienceDetail customSlug="para-construtoras" />} />
          <Route path="/para-engenheiros" element={<AudienceDetail customSlug="para-engenheiros" />} />
          <Route path="/para-empreiteiros" element={<AudienceDetail customSlug="para-empreiteiros" />} />
          <Route path="/para-obras-residenciais" element={<AudienceDetail customSlug="para-obras-residenciais" />} />

          {/* Páginas Institucionais e Conversão */}
          <Route path="/orcamento" element={<QuotePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="/termos-de-uso" element={<TermsPage />} />
          
          {/* Páginas de Conversão / Agradecimento para Google Ads & Meta Ads */}
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="/orcamento-sucesso" element={<ThankYouPage />} />

          {/* Fallback 404 para Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

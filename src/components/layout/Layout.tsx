import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';
import { captureAndStoreUTMs } from '../../analytics/utm';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Captura e persiste UTMs sempre que o usuário navegar ou entrar com parâmetros
    captureAndStoreUTMs();
    // Scroll para o topo na troca de rota
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

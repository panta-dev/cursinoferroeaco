import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';
import { MobileBottomBar } from '../common/MobileBottomBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  );
};

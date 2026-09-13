import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Process } from './components/Process';
import { WhyFrelanta } from './components/WhyFrelanta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-[#050505] text-white tracking-[-0.02em] relative selection:bg-[#E8702A] selection:text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] px-4 py-2 bg-[#E8702A] text-white text-xs font-semibold rounded-full"
      >
        Skip to main content
      </a>

      {/* Fixed Studio Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <WhyFrelanta />
        <Contact />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
};

export default App;

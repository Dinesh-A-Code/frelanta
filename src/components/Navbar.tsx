import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 md:px-8 transition-all duration-500 ${
          scrolled
            ? 'bg-black/75 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5 sm:py-4'
            : 'bg-transparent py-5 sm:py-6'
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-white font-bold tracking-[-0.04em] text-xl sm:text-2xl transition-transform duration-300"
          aria-label="FRELANTA Studio Home"
        >
          <span className="text-white tracking-[-0.03em] font-semibold">FRELANTA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8702A] inline-block transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-xs lg:text-sm font-medium tracking-tight text-white/70 hover:text-white transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/60 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8702A]/50"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-[#050505]/95 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 pt-24 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 mt-4">
          <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
            Navigation
          </p>
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className="text-3xl sm:text-4xl font-light text-white hover:text-[#E8702A] tracking-tight transition-colors duration-300 flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#E8702A]" />
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-5">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 bg-[#E8702A] hover:bg-[#D2611F] text-white py-3.5 rounded-full font-medium text-sm transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>FRELANTA Studio</span>
            <span>Based in India / Global</span>
          </div>
        </div>
      </div>
    </>
  );
};

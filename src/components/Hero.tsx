import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RevealLayer } from './RevealLayer';

// Centralized hero imagery configuration
export const HERO_IMAGES = {
  // Dark cinematic architectural digital structure
  base: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
  // Radiant amber/illuminated digital monolith revealed through cursor spotlight
  reveal: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85',
};

export const Hero: React.FC = () => {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to disable cursor spotlight on mobile
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // If initial position was offscreen, jump smooth cursor closer
      if (smooth.current.x < -500) {
        smooth.current.x = e.clientX;
        smooth.current.y = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      if (mouse.current.x > -500) {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

        setCursorPos({
          x: Math.round(smooth.current.x * 10) / 10,
          y: Math.round(smooth.current.y * 10) / 10,
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full overflow-hidden h-screen bg-black select-none"
      style={{ height: '100dvh' }}
      aria-label="Frelanta Studio Introduction"
    >
      {/* Base Hero Image with Zoom Load Animation */}
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGES.base})`,
          filter: 'brightness(0.65) contrast(1.15)',
        }}
      />

      {/* Dark gradient overlays for contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)] pointer-events-none" />

      {/* Reveal Layer with Cursor Spotlight (Desktop only) */}
      {!isTouchDevice && (
        <RevealLayer
          image={HERO_IMAGES.reveal}
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
        />
      )}

      {/* Hero Typography & Content Overlay */}
      <div className="absolute top-[14%] sm:top-[15%] md:top-[14%] left-0 right-0 flex flex-col items-center text-center px-4 sm:px-6 pointer-events-none z-20">
        {/* Eyebrow */}
        <div
          className="hero-anim hero-fade mb-3 sm:mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8702A] animate-pulse" />
            Independent Digital Studio
          </span>
        </div>

        {/* Main Heading with tight leading & Playfair italic accents */}
        <h1 className="max-w-6xl tracking-tightest leading-[0.9] text-white">
          <span
            className="hero-anim hero-reveal block text-4xl sm:text-6xl md:text-7xl lg:text-[8.5rem]"
            style={{ animationDelay: '0.15s' }}
          >
            We build
          </span>
          <span
            className="hero-anim hero-reveal block text-4xl sm:text-6xl md:text-7xl lg:text-[8.5rem] mt-1 sm:mt-2"
            style={{ animationDelay: '0.30s' }}
          >
            <span className="font-playfair italic font-normal text-neutral-200">
              digital
            </span>{' '}
            things
          </span>
          <span
            className="hero-anim hero-reveal block text-3xl sm:text-5xl md:text-7xl lg:text-[7.8rem] text-neutral-300 mt-1 sm:mt-2"
            style={{ animationDelay: '0.45s' }}
          >
            worth{' '}
            <span className="font-playfair italic font-normal text-white">
              remembering.
            </span>
          </span>
        </h1>

        {/* Hero Supporting Copy */}
        <p
          className="hero-anim hero-fade mt-5 sm:mt-7 max-w-xl text-neutral-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight"
          style={{ animationDelay: '0.6s' }}
        >
          Frelanta designs and builds websites, landing pages, applications, and
          digital experiences for people and brands ready to stand out.
        </p>

        {/* Interactive Buttons (pointer-events-auto enabled) */}
        <div
          className="hero-anim hero-fade mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
          style={{ animationDelay: '0.7s' }}
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#E8702A] hover:bg-[#D2611F] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#E8702A]/30 focus:outline-none focus:ring-2 focus:ring-[#E8702A]/60"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span>View our work</span>
          </button>
        </div>
      </div>

      {/* Hero Bottom Bar Information */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-6 sm:px-10 flex items-end justify-between text-xs text-neutral-400 pointer-events-none z-20">
        {/* Bottom Left: Studio identity */}
        <div
          className="hero-anim hero-fade hidden sm:block text-left"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="font-medium text-white/90">Independent digital studio</p>
          <p className="text-neutral-500 text-[11px] mt-0.5 tracking-tight">
            Design × Development
          </p>
        </div>

        {/* Center: Subtle Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToWork}
          className="pointer-events-auto mx-auto sm:mx-0 flex flex-col items-center gap-2 group cursor-pointer text-[10px] uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors"
          aria-label="Scroll to portfolio section"
        >
          <span>SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/50 transition-colors">
            <span className="w-1 h-2 rounded-full bg-[#E8702A] animate-bounce" />
          </div>
        </button>

        {/* Bottom Right: Global Presence */}
        <div
          className="hero-anim hero-fade hidden sm:block text-right"
          style={{ animationDelay: '0.9s' }}
        >
          <p className="font-medium text-white/90">Based in India.</p>
          <p className="text-neutral-500 text-[11px] mt-0.5 tracking-tight">
            Working globally.
          </p>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/projects';
import { GithubIcon } from './Icons';
import { RevealOnScroll } from './RevealOnScroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll delay={0} duration={800} direction="up">
          {/* Top Tier */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-16 border-b border-white/[0.08]">
            {/* Brand Column */}
            <div className="max-w-sm">
              <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-4">
                <span>{STUDIO_CONFIG.name}</span>
              </a>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {STUDIO_CONFIG.tagline}
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-3">
                {STUDIO_CONFIG.location}
              </p>
            </div>

            {/* Quick Nav Links & Social */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                  Studio Index
                </p>
                <ul className="flex flex-col gap-2.5">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Channel: GitHub Only */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                  Connect
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
                  <li>
                    <a
                      href={STUDIO_CONFIG.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Tier: Copyright & Back to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 Frelanta. All rights reserved.</p>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              </div>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

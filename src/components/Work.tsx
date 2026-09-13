import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, STUDIO_CONFIG } from '../data/projects';
import { RevealOnScroll } from './RevealOnScroll';
import { ExpandedProjectRail } from './ExpandedProjectRail';

export const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="relative bg-[#050505] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="Selected Work"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealOnScroll delay={0} duration={800} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/10">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
                Portfolio
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
                Selected <span className="font-playfair italic font-normal text-neutral-300">work.</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-sm leading-relaxed">
              Real production builds spanning digital commerce, modern web applications,
              and interactive tools. Engineered with precision.
            </p>
          </div>
        </RevealOnScroll>

        {/* Interactive Expanded Cards Rail (Desktop) & Clean Stacked Cards (Mobile) */}
        <RevealOnScroll delay={150} duration={850} direction="up">
          <ExpandedProjectRail projects={PROJECTS} />
        </RevealOnScroll>

        {/* Section Footer Callout */}
        <RevealOnScroll delay={300} duration={800} direction="up">
          <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <p>
              More client prototypes and open experiments are documented on GitHub.
            </p>
            <a
              href={STUDIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#E8702A] font-medium transition-colors"
            >
              <span>Explore studio repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

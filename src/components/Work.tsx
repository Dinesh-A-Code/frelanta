import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS, STUDIO_CONFIG } from '../data/projects';
import { RevealOnScroll } from './RevealOnScroll';

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

        {/* Featured Lead Project: SD Flowers */}
        <RevealOnScroll delay={100} duration={850} direction="up" className="mb-14">
          <ProjectCard project={PROJECTS[0]} index={0} />
        </RevealOnScroll>

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.slice(1).map((project, idx) => (
            <RevealOnScroll
              key={project.id}
              delay={220 + idx * 120}
              duration={850}
              direction="up"
            >
              <ProjectCard project={project} index={idx + 1} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Section Footer Callout */}
        <RevealOnScroll delay={400} duration={800} direction="up">
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

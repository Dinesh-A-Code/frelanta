import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  const keywords = [
    {
      title: 'Design',
      description: 'Art direction, typographic discipline, and bespoke interface systems tailored to brand voice.',
    },
    {
      title: 'Development',
      description: 'Production-grade TypeScript, robust React architectures, and zero-compromise web performance.',
    },
    {
      title: 'Strategy',
      description: 'Translating product positioning and user goals into concise, high-converting digital journeys.',
    },
    {
      title: 'Interaction',
      description: 'Fluid choreography, sensory micro-interactions, and engaging cursor-driven visual narratives.',
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0A0A0A] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="About Frelanta Studio"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Eyebrow & Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0} duration={800} direction="up">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
                Studio Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                Small studio.{' '}
                <span className="block font-playfair italic font-normal text-neutral-300">
                  Big digital thinking.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <RevealOnScroll delay={150} duration={800} direction="up">
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                Frelanta is an independent digital studio focused on turning ambitious ideas
                into thoughtful digital experiences.
              </p>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                We combine design, frontend engineering, interaction, and product thinking to create
                work that feels as good as it functions.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Visual Keyword Quadrant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/[0.08]">
          {keywords.map((kw, idx) => (
            <RevealOnScroll
              key={kw.title}
              delay={250 + idx * 100}
              duration={800}
              direction="up"
            >
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors group h-full">
                <span className="text-xs font-mono text-[#E8702A] block mb-4">
                  0{idx + 1} //
                </span>
                <h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[#E8702A] transition-colors">
                  {kw.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {kw.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Editorial quote strip */}
        <RevealOnScroll delay={450} duration={850} direction="up">
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.08] flex flex-col md:flex-row items-baseline justify-between gap-6">
            <div>
              <p className="text-xl sm:text-2xl font-light text-white tracking-tight">
                "Built with intention. Designed to last."
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-2 uppercase tracking-wider">
                Studio Operating Principle
              </p>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              We partner directly with founders, makers, and innovators who value craft over conformity.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

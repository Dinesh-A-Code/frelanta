import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyFrelanta: React.FC = () => {
  const pillars = [
    {
      title: 'Design-led',
      subtitle: 'Form that commands respect',
      body: 'Every layout, typography pairing, and spacing unit is considered. We avoid tired tropes and cookie-cutter frameworks to give your product an unmistakable voice.',
    },
    {
      title: 'Engineering-minded',
      subtitle: 'Code that scales cleanly',
      body: 'Production TypeScript, clean component architecture, and modern build tooling. We engineer interfaces that are fast, maintainable, and resilient under pressure.',
    },
    {
      title: 'Detail-obsessed',
      subtitle: 'The micro matters as much as the macro',
      body: 'Subtle motion curves, proper touch targets, semantic markup, and responsive fluidity down to 375px. Craft is evident in the details you only notice after using it.',
    },
    {
      title: 'Built for the real world',
      subtitle: 'Honest utility over hype',
      body: 'No superfluous bloat or over-engineered gimmicks. We build software and websites focused on real user conversions, lightning load speeds, and long-term viability.',
    },
  ];

  return (
    <section
      className="relative bg-[#0A0A0A] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="Why Choose Frelanta Studio"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
            Distinction
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
            Not just another{' '}
            <span className="font-playfair italic font-normal text-neutral-300">
              web studio.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            We don't hand off PSD files and disappear, nor do we build generic templates.
            We are your embedded technical and visual partners from conception to live deployment.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 sm:p-10 rounded-3xl bg-[#0F0F0F] border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#E8702A]" />
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    Pillar
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#E8702A] mt-1 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Context & Vision',
    description:
      'We dive deep into your brand identity, audience expectations, and core functional needs to establish a distinctive digital angle.',
    activities: ['Goal definition', 'Aesthetic benchmarking', 'Architecture mapping'],
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'System & Prototype',
    description:
      'Crafting high-fidelity UI systems, typographic hierarchies, and interactive wireframes that validate the creative and user direction early.',
    activities: ['Art direction', 'Responsive design systems', 'Motion prototypes'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Engineering & Craft',
    description:
      'Writing clean, typed, modular code with precision. Seamless animations, rock-solid responsiveness, and strict attention to performance.',
    activities: ['React & TypeScript build', 'Performance tuning', 'Cross-browser testing'],
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Deployment & Beyond',
    description:
      'Ensuring seamless go-live deployment, domain configuration, Lighthouse optimization, and handover of documentation.',
    activities: ['CDN & hosting deploy', 'SEO & meta verification', 'Handover & support'],
  },
];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="relative bg-[#050505] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="Studio Process"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
              Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
              From idea{' '}
              <span className="block font-playfair italic font-normal text-neutral-300">
                to interface.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-sm leading-relaxed">
            A focused 4-stage delivery process built for speed, transparency,
            and flawless execution.
          </p>
        </div>

        {/* 4 Editorial Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/15 transition-all duration-300"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                  <span className="font-mono text-xs font-semibold text-[#E8702A] tracking-wider">
                    STEP {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#E8702A] transition-colors" />
                </div>

                <h3 className="text-2xl font-medium text-white tracking-tight mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Key Activities */}
              <div className="pt-4 border-t border-white/[0.04] flex flex-col gap-1.5">
                {step.activities.map((act) => (
                  <div key={act} className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                    <span className="text-[#E8702A]">›</span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

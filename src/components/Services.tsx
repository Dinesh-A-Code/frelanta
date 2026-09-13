import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Landing Pages',
    tagline: 'High-impact conversion & brand presence',
    description:
      'Conversion-focused landing pages with strong visual direction. Engineered to capture attention in seconds and communicate unique value with clarity and conviction.',
    deliverables: ['Creative Direction', 'Copy Architecture', 'Responsive Layout', 'Performance & SEO'],
  },
  {
    number: '02',
    title: 'Websites',
    tagline: 'Brand-defining digital flagships',
    description:
      'Modern, responsive websites designed around the brand. Crafted with meticulous typography, cohesive visual systems, and seamless navigation across all device breakpoints.',
    deliverables: ['Custom Web Architecture', 'Design Systems', 'CMS Integration', 'Interaction Design'],
  },
  {
    number: '03',
    title: 'Web Applications',
    tagline: 'Scalable software with refined UI/UX',
    description:
      'Functional digital products with thoughtful UX and reliable architecture. Translating complex business logic and state workflows into intuitive, resilient interfaces.',
    deliverables: ['Full-stack Frontend', 'Component Libraries', 'State & API Integration', 'Security & Testing'],
  },
  {
    number: '04',
    title: 'Digital Experiences',
    tagline: 'Creative computing & bespoke interactions',
    description:
      'Interactive, experimental, and custom web experiences. Pushing creative boundaries with fluid canvas graphics, micro-interactions, and memorable sensory storytelling.',
    deliverables: ['Interactive Canvas', '3D / WebGL Visuals', 'Micro-interactions', 'Experimental Interfaces'],
  },
];

export const Services: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative bg-[#0A0A0A] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="Studio Services"
    >
      {/* Background subtle noise and glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8702A]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              What we <span className="font-playfair italic font-normal text-neutral-300">build.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-sm leading-relaxed">
            Every project pairs strategic visual design with disciplined frontend engineering.
            No cookie-cutter templates.
          </p>
        </div>

        {/* Large Editorial Services Rows */}
        <div className="divide-y divide-white/[0.08]">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative py-10 sm:py-14 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl transition-all duration-500 hover:bg-white/[0.02] cursor-default"
              >
                {/* Highlight left accent on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#E8702A] rounded-full transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Service Number & Category */}
                  <div className="lg:col-span-4 flex items-baseline gap-5">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-[#E8702A] font-semibold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1 font-mono">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                      {service.description}
                    </p>
                    {/* Deliverable pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-neutral-400 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-[#E8702A] group-hover:bg-[#E8702A]/10 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E8702A]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';
import { ProjectCard } from './ProjectCard';

interface ExpandedProjectRailProps {
  projects: Project[];
}

export const ExpandedProjectRail: React.FC<ExpandedProjectRailProps> = ({ projects }) => {
  // activeId is null by default so all cards appear as balanced tall slivers
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* DESKTOP VIEW (lg+): Interactive Expanded Cards Rail           */}
      {/* ============================================================ */}
      <div
        className="hidden lg:flex w-full h-[580px] xl:h-[620px] gap-4 xl:gap-5 select-none"
        onMouseLeave={() => setActiveId(null)}
        role="region"
        aria-label="Interactive projects showcase"
      >
        {projects.map((project, index) => {
          const isExpanded = activeId === project.id;
          const isAnyActive = activeId !== null;

          return (
            <div
              key={project.id}
              tabIndex={0}
              onMouseEnter={() => setActiveId(project.id)}
              onFocus={() => setActiveId(project.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveId(null);
                }
              }}
              style={{
                flex: isExpanded ? 3.6 : isAnyActive ? 0.75 : 1,
              }}
              className={`relative h-full rounded-3xl overflow-hidden bg-[#0D0D0D] border transition-[flex,border-color,box-shadow] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8702A] cursor-pointer ${
                isExpanded
                  ? 'border-white/25 shadow-2xl shadow-black/80'
                  : 'border-white/[0.08] hover:border-white/15'
              }`}
            >
              {/* Full-bleed Project Screenshot (Crisp, zero blur, object-cover) */}
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out pointer-events-none ${
                  isExpanded ? 'scale-[1.03]' : 'scale-100'
                }`}
              />

              {/* Gradient Overlays for Readability and Depth */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  isExpanded
                    ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-90'
                    : isAnyActive
                    ? 'bg-black/75 opacity-90'
                    : 'bg-gradient-to-t from-black/90 via-black/40 to-black/20 opacity-80'
                }`}
              />

              {/* ============================================================ */}
              {/* COLLAPSED SLIVER VIEW: Vertical editorial typography         */}
              {/* ============================================================ */}
              <div
                className={`absolute inset-0 p-6 xl:p-8 flex flex-col justify-between transition-opacity duration-400 pointer-events-none ${
                  isExpanded ? 'opacity-0' : 'opacity-100'
                }`}
                aria-hidden={isExpanded}
              >
                {/* Top: Project Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#E8702A] tracking-widest">
                    {project.number || `0${index + 1}`}
                  </span>
                </div>

                {/* Middle: Rotated Vertical Studio Title */}
                <div className="flex-1 flex items-center justify-center my-auto py-8">
                  <span
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                    className="text-2xl xl:text-3xl font-light tracking-tight text-white/90 whitespace-nowrap uppercase tracking-wider"
                  >
                    {project.title}
                  </span>
                </div>

                {/* Bottom: Subtle Icon Badge */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/60">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* EXPANDED VIEW: Fixed-width composed layout, NO text reflow   */}
              {/* ============================================================ */}
              <div
                className={`absolute inset-0 p-8 xl:p-10 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isExpanded
                    ? 'opacity-100 pointer-events-auto translate-y-0 delay-100'
                    : 'opacity-0 pointer-events-none translate-y-4'
                }`}
                aria-hidden={!isExpanded}
              >
                {/* Top Bar inside expanded card */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E8702A]/20 border border-[#E8702A]/40 text-[#E8702A]">
                      {project.number || `0${index + 1}`}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Action Trigger */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E8702A] hover:bg-[#D2611F] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-[#E8702A]/30"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Bottom Content: Pre-composed width prevents any line wrapping shifts */}
                <div className="w-full max-w-xl">
                  {/* Title & Year */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-3xl xl:text-4xl font-normal text-white tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                        aria-label={`Source repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET VIEW (< lg): Clean stacked editorial cards   */}
      {/* ============================================================ */}
      <div className="flex flex-col lg:hidden gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

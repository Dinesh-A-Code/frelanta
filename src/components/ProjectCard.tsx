import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative flex flex-col bg-[#0D0D0D] border border-white/[0.08] rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60">
      {/* Visual Canvas Area */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-900 cursor-pointer"
        aria-label={`View ${project.title} live project`}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-500 p-8 text-center">
            <span className="font-mono text-sm uppercase tracking-wider text-neutral-400">
              {project.title}
            </span>
            <span className="text-xs text-neutral-600 mt-1">Digital Preview</span>
          </div>
        )}

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

        {/* Floating Quick Action Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#E8702A] group-hover:border-[#E8702A] group-hover:scale-110 shadow-lg">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </a>

      {/* Editorial Content Meta Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 font-mono mb-3">
            <span className="text-neutral-400 tracking-tight">{project.category}</span>
            <span className="text-[#E8702A] font-semibold">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:underline"
            >
              {project.title}
            </a>
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-light">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white hover:text-[#E8702A] transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4" />
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
              <span className="hidden sm:inline">Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

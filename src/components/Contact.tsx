import React, { useState } from 'react';
import { ArrowUpRight, Mail, Check } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/projects';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website / Landing Page',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const projectTypes = [
    'Website / Landing Page',
    'Web Application',
    'UI/UX & Product Design',
    'Interactive Experience',
    'Other Custom Software',
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-28 sm:py-36 px-4 sm:px-8 border-t border-white/[0.06] overflow-hidden"
      aria-label="Contact Frelanta Studio"
    >
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E8702A]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Typography & Direct Studio Email */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <RevealOnScroll delay={0} duration={850} direction="up">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E8702A] block mb-3">
                  Inquiries & Partnerships
                </span>

                <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.05]">
                  Have something{' '}
                  <span className="block font-playfair italic font-normal text-neutral-300">
                    worth building?
                  </span>
                </h2>

                <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-md">
                  Whether you are launching a new brand, redesigning a digital flagship, or building a complex web product, we are ready to listen.
                </p>
              </div>
            </RevealOnScroll>

            {/* Direct Studio Email Contact Button */}
            <RevealOnScroll delay={150} duration={850} direction="up">
              <div className="mt-10 sm:mt-14 pt-8 border-t border-white/[0.08]">
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3">
                  DIRECT LINE
                </p>
                <a
                  href={`mailto:${STUDIO_CONFIG.contactEmail}`}
                  className="group inline-flex items-center gap-2 sm:gap-3 text-base sm:text-2xl md:text-3xl font-light text-white hover:text-[#E8702A] transition-colors break-all"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8702A] flex-shrink-0" />
                  <span className="underline decoration-white/20 underline-offset-8 group-hover:decoration-[#E8702A]">
                    {STUDIO_CONFIG.contactEmail}
                  </span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Currently taking on select projects for 2026.</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Sleek Inquiry Form */}
          <div className="lg:col-span-6">
            <RevealOnScroll delay={250} duration={850} direction="up">
              <div className="bg-[#0D0D0D] border border-white/[0.08] p-8 sm:p-10 rounded-3xl">
                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#E8702A]/20 border border-[#E8702A]/40 flex items-center justify-center text-[#E8702A] mb-4">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-2">Message Received</h3>
                    <p className="text-sm text-neutral-400 max-w-sm">
                      Thank you for reaching out. We will review your project requirements and respond within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'Website / Landing Page',
                          message: '',
                        });
                      }}
                      className="mt-6 text-xs text-neutral-400 hover:text-white underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E8702A] focus:ring-1 focus:ring-[#E8702A] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E8702A] focus:ring-1 focus:ring-[#E8702A] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#E8702A] focus:ring-1 focus:ring-[#E8702A] transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#141414] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about what you want to build, timelines, and requirements..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E8702A] focus:ring-1 focus:ring-[#E8702A] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#E8702A] hover:bg-[#D2611F] text-white py-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-[#E8702A]/20 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Sending inquiry...</span>
                      ) : (
                        <>
                          <span>Let's talk</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

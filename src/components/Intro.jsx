import React from 'react';
import { Eye, Code2, RefreshCw } from 'lucide-react';

export const Intro = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We study how your team actually works.',
      detail: 'We observe existing manual friction, WhatsApp threads, and Excel workarounds before writing a single line of code.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Build',
      desc: 'We design and build around your real-world requirements.',
      detail: 'Clean, custom-tailored software and process workflows engineered to fit seamlessly into your existing operations.',
      icon: Code2,
    },
    {
      num: '03',
      title: 'Improve',
      desc: 'We continuously refine the solution based on feedback.',
      detail: 'Weekly reviews ensure your tools evolve alongside your business with zero downtime or rigid software lock-in.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="about" className="section bg-[#101C33]/60 border-y border-white/5 relative overflow-hidden scroll-mt-24">
      <div className="container relative z-10">
        <div className="section-header mb-6">
          <div className="badge mb-3">
            <span className="badge-dot" />
            <span>The Solbasket Difference</span>
          </div>
          <h2 className="heading-lg mb-3">Not Just Another IT Company.</h2>
          <p className="body-lead max-w-2xl mx-auto mb-10 md:mb-12">
            Solbasket is a small, hands-on team of technology, HR and marketing professionals who work closely with businesses to solve real problems.
          </p>
        </div>

        {/* Outer Centering Wrapper for Core Approach Card */}
        <div
          className="w-full flex justify-center items-center my-10 md:my-14"
          style={{ marginTop: '48px', marginBottom: '56px' }}
        >
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl bg-[#162542]/90 border border-white/10 shadow-2xl relative flex flex-col items-center justify-center text-center">
            {/* Top Badge Pill */}
            <div
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00C853] text-[#050B14] font-bold text-xs uppercase tracking-wider shadow-md mb-6 shrink-0"
              style={{ padding: '6px 16px', display: 'inline-flex', alignItems: 'center' }}
            >
              Our Core Approach
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
              "Instead of forcing your problem into an existing product, we understand the problem first — then build the solution around your workflow."
            </p>

            {/* Sub-Badge Highlight Pill */}
            <div
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/5 border border-[#00C853]/30 text-[#00C853] font-bold text-sm md:text-base text-center leading-normal max-w-2xl mx-auto"
              style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Your problem. Our analysis. A solution built around you.
            </div>
          </div>
        </div>

        {/* 3 Animated Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#00C853]/40 transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-mono font-extrabold text-[#00C853]/60 group-hover:text-[#00C853] transition-colors">
                      {item.num}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00C853]/40 text-[#00C853] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2.5 text-white group-hover:text-[#00C853] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-200 font-semibold mb-2.5 text-sm leading-snug">
                    "{item.desc}"
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400 group-hover:text-[#00C853]">
                  <span>Step {item.num} Workflow Phase</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

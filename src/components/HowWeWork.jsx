import React, { useState } from 'react';
import { MessageSquare, Search, Compass, Code, MonitorPlay, ThumbsUp, RefreshCw } from 'lucide-react';

export const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'You Tell Us',
      desc: 'Explain the problem in plain English. No technical jargon required.',
      icon: MessageSquare,
      detail: 'Whether it is a chaotic spreadsheet system, an HR policy gap, or a need for patient portal automation — just tell us what hurts.'
    },
    {
      num: '02',
      title: 'We Analyse',
      desc: 'We understand your current process, people, pain points and desired outcome.',
      icon: Search,
      detail: 'Our business analysts map out your existing workflow, identify bottlenecks, and define clear success metrics.'
    },
    {
      num: '03',
      title: 'We Design',
      desc: 'We convert the problem into a clean workflow and solution architecture.',
      icon: Compass,
      detail: 'We sketch user roles, database architecture, and user-friendly screens before coding.'
    },
    {
      num: '04',
      title: 'We Build',
      desc: 'Our team develops the solution.',
      icon: Code,
      detail: 'Our specialist developers build modular, secure, and fast software tailored exactly to your workflow.'
    },
    {
      num: '05',
      title: 'Weekly Demo',
      desc: 'You see progress every week.',
      icon: MonitorPlay,
      detail: 'No black-box development. Every week, we present a working build for your leadership to test.'
    },
    {
      num: '06',
      title: 'Feedback',
      desc: "You tell us what works and what doesn't.",
      icon: ThumbsUp,
      detail: 'Your actual team members test the features in real scenarios and suggest adjustments.'
    },
    {
      num: '07',
      title: 'Improve',
      desc: 'We iterate until the solution fits your workflow.',
      icon: RefreshCw,
      detail: 'We continuously tweak and refine until the system operates smoothly with zero friction.'
    }
  ];

  return (
    <section id="how-we-work" className="section bg-[#0B1326] relative border-t border-white/5 scroll-mt-24">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Step-by-Step Delivery</span>
          </div>
          <h2 className="heading-lg">How We Work</h2>
          <p className="body-lead">
            A clear, predictable process built around collaboration, transparency, and weekly progress.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Timeline Navigation Steps (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#162542] border-[#00C853] text-white shadow-[0_0_20px_rgba(0,200,83,0.18)] translate-x-1'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md inline-flex items-center justify-center shrink-0 ${isActive ? 'bg-[#00C853] text-[#050B14]' : 'bg-white/10 text-slate-400'}`}
                      style={{ padding: '2px 8px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      {step.num}
                    </span>
                    <span className="text-sm font-semibold">{step.title}</span>
                  </div>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00C853]' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 border-[#00C853]/40 shadow-2xl relative min-h-[360px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex items-center justify-center text-xs font-mono font-bold text-[#00C853] tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/40 leading-normal shrink-0"
                    style={{ padding: '4px 14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Phase {steps[activeStep].num} of 07
                  </span>

                  {React.createElement(steps[activeStep].icon, {
                    className: 'w-7 h-7 text-[#00C853]'
                  })}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {steps[activeStep].num} — {steps[activeStep].title}
                </h3>

                <p className="text-base font-semibold text-[#00C853] mb-3 leading-snug">
                  "{steps[activeStep].desc}"
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span>Process Completion</span>
                  <span className="text-[#00C853] font-bold">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00C853] to-[#00E676] transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

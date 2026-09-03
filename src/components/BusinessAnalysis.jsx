import React from 'react';
import { Brain, Network, Cpu, LineChart, Compass, MapPin, TrendingUp, Lightbulb } from 'lucide-react';

export const BusinessAnalysis = () => {
  const capabilities = [
    {
      title: 'Process Analysis',
      desc: 'Deconstructing existing daily tasks to identify unnecessary manual steps and redundancy.',
      icon: Brain
    },
    {
      title: 'Workflow Mapping',
      desc: 'Visualizing data movement between teams, departments, and communication tools.',
      icon: Network
    },
    {
      title: 'Automation Opportunities',
      desc: 'Pinpointing high-friction areas ideal for instant digital workflow automation.',
      icon: Cpu
    },
    {
      title: 'Operational Insights',
      desc: 'Uncovering hidden delays, inventory mismatches, and workforce bottlenecks.',
      icon: LineChart
    },
    {
      title: 'Digital Transformation',
      desc: 'Guiding non-technical organizations through smooth digital adoption without downtime.',
      icon: Compass
    },
    {
      title: 'Technology Roadmap',
      desc: 'Creating clear, phased implementation plans aligned with growth milestones.',
      icon: MapPin
    },
    {
      title: 'Business Process Improvement',
      desc: 'Re-engineering operational policies for maximum clarity, speed, and profitability.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section bg-[#101C33] relative border-t border-white/5">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Strategic Advisory</span>
          </div>
          <h2 className="heading-lg">Before We Build, We Think.</h2>
          <p className="body-lead">
            Sometimes the right answer isn't software. Sometimes it is a better process.
          </p>
          <p className="text-slate-300 text-sm mt-3 max-w-2xl mx-auto">
            We analyse your workflows, identify bottlenecks, understand operational inefficiencies and recommend practical improvements.
          </p>
        </div>

        {/* Centered Banner Quote Box */}
        <div
          className="w-full flex justify-center items-center my-10 md:my-12"
          style={{ marginTop: '36px', marginBottom: '48px' }}
        >
          <div
            className="w-full max-w-3xl mx-auto rounded-2xl bg-[#00C853]/10 border border-[#00C853]/40 text-center relative shadow-[0_0_30px_rgba(0,200,83,0.18)] flex flex-col items-center justify-center"
            style={{ padding: '24px 32px' }}
          >
            <Lightbulb className="w-8 h-8 text-[#00C853] mx-auto mb-4 animate-pulse shrink-0" />
            <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
              "We don't want to automate a bad process. We want to fix it first."
            </p>
          </div>
        </div>

        {/* 7 Capability Cards Grid (Balanced 3-Column Layout with Center-Aligned 7th Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isLast = idx === capabilities.length - 1;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl flex flex-col justify-between group hover:border-[#00C853]/50 transition-all duration-300 h-full min-h-[190px] ${
                  isLast ? 'lg:col-start-2' : ''
                }`}
                style={{ padding: '24px 28px' }}
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 text-[#00C853] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{cap.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono w-full">
                  <span>Solbasket Analysis</span>
                  <span className="text-[#00C853]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

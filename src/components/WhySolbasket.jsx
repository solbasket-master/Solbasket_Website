import React from 'react';
import { Users, Target, Eye, Sliders, Layers, TrendingUp } from 'lucide-react';

export const WhySolbasket = () => {
  const reasons = [
    {
      title: 'Small Team. Big Ownership.',
      desc: "You're working directly with the people solving your problem.",
      icon: Users
    },
    {
      title: 'Built Around You.',
      desc: 'No unnecessary one-size-fits-all products.',
      icon: Target
    },
    {
      title: 'Weekly Visibility.',
      desc: 'You see what we’re building.',
      icon: Eye
    },
    {
      title: 'Flexible Engagement.',
      desc: 'Scale the relationship based on your needs.',
      icon: Sliders
    },
    {
      title: 'Cross-Functional Expertise.',
      desc: 'Technology + HR + Marketing under one roof.',
      icon: Layers
    },
    {
      title: 'Business First.',
      desc: 'We care about the outcome, not just the software.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section bg-[#0B1326] relative border-t border-white/5">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Value Proposition</span>
          </div>
          <h2 className="heading-lg">Why Solbasket?</h2>
          <p className="body-lead">
            We operate as an extended internal team focused entirely on practical execution.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#00C853]/40 transition-all duration-300 h-full"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-5 text-[#00C853] group-hover:bg-[#00C853]/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00C853] transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    "{r.desc}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Solbasket Core Principle</span>
                  <span className="text-[#00C853]">0{i + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

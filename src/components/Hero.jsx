import React, { useState } from 'react';
import { ArrowUpRight, Code, Users, TrendingUp, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const [activePillar, setActivePillar] = useState('TECH');

  const pillars = {
    TECH: {
      title: 'TECH',
      subtitle: 'Software + Automation',
      icon: Code,
      badge: 'Custom Development & Systems',
      details: [
        'Custom Business Software & ERPs',
        'Hospital & Healthcare Systems (HMS)',
        'Workflow Automation & Internal Tools',
        'Licence & LMS Compliance Dashboards'
      ]
    },
    PEOPLE: {
      title: 'PEOPLE',
      subtitle: 'HR + Recruitment',
      icon: Users,
      badge: 'HR & Manpower Planning',
      details: [
        'End-to-End HR Policy & Process Design',
        'Healthcare & IT Specialist Recruitment',
        'Payroll Support & Manpower Optimization',
        'Training Records & NABH Audit Readiness'
      ]
    },
    GROWTH: {
      title: 'GROWTH',
      subtitle: 'Marketing + Digital',
      icon: TrendingUp,
      badge: 'Digital Presence & Reach',
      details: [
        'Healthcare & Enterprise Social Marketing',
        'High-Impact Ad Campaigns & Production',
        'Search Engine Optimization (SEO)',
        'Strategic Brand Communication & Content'
      ]
    }
  };

  return (
    <section id="home" className="pt-44 lg:pt-56 pb-24 lg:pb-32 relative overflow-hidden min-h-[760px] flex items-center">
      {/* Ambient background glows */}
      <div className="bg-grid" />
      <div className="glow-orb top-16 left-1/2 -translate-x-1/2" />
      <div className="glow-orb bottom-10 right-10 opacity-60" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="badge mb-10">
              <span className="badge-dot" />
              <span className="leading-snug">One expert team for your technology, HR and growth needs.</span>
            </div>

            <h1 className="heading-xl mb-10 max-w-[680px]">
              Technology That Works.{' '}
              <span className="text-gradient-green block mt-4 sm:mt-5">People That Perform.</span>
              <span className="text-gradient block mt-4 sm:mt-5">Marketing That Grows.</span>
            </h1>

            <p className="body-lead mb-12 max-w-[660px] text-slate-300">
              Solbasket helps organizations automate everyday work, build custom software, streamline HR processes and strengthen their digital presence — without unnecessary complexity.
            </p>

            <div className="flex flex-wrap items-center gap-4.5 w-full sm:w-auto mb-12">
              <a
                href="mailto:admin@solbasket.com?subject=Solbasket%20Enquiry"
                className="btn-primary h-[52px] px-7 w-full sm:w-auto text-center"
              >
                <span>Let's Build Something</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="btn-secondary h-[52px] px-7 w-full sm:w-auto text-center"
              >
                <span>Explore What We Do</span>
              </a>
            </div>

            {/* Micro proof bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-7 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                <span>Zero bloated templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                <span>Weekly progress demos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                <span>Hands-on specialist team</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Interactive Connected 3-Pillar Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div
              className="w-full max-w-[560px] bg-[#101C33]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative mx-auto"
              style={{ padding: '32px' }}
            >
              
              {/* Explorer Header Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-[#00C853]" />
                  <span className="text-xs font-mono tracking-wider text-slate-200 uppercase font-bold">Pillar Explorer</span>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/20 font-semibold shrink-0">
                  Select pillar
                </span>
              </div>

              {/* 3 Connected Pillar Tabs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {Object.keys(pillars).map((key) => {
                  const p = pillars[key];
                  const IconComponent = p.icon;
                  const isActive = activePillar === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePillar(key)}
                      onMouseEnter={() => setActivePillar(key)}
                      className={`py-3 px-2 rounded-xl flex flex-col items-center gap-1.5 transition-all duration-200 ${
                        isActive
                          ? 'bg-[#162542] border border-[#00C853] text-white shadow-[0_0_15px_rgba(0,200,83,0.25)]'
                          : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <IconComponent className={`w-4.5 h-4.5 ${isActive ? 'text-[#00C853]' : ''}`} />
                      <span className="text-xs font-bold font-mono tracking-wider">{p.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Body Content Container directly below tab bar */}
              <div
                className="bg-[#162542] border border-white/10 rounded-2xl relative flex flex-col justify-between shadow-xl w-full"
                style={{ padding: '24px 28px' }}
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#00C853]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5 gap-3">
                    <span
                      className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30 leading-normal shrink-0"
                      style={{ padding: '6px 16px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      {pillars[activePillar].badge}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#00C853] animate-pulse shrink-0" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {pillars[activePillar].subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    Core capability integrated directly into client workflow.
                  </p>

                  <ul className="space-y-3.5 mb-7 pl-1">
                    {pillars[activePillar].details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-snug">
                        <span className="w-2 h-2 rounded-full bg-[#00C853] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-slate-400 gap-4">
                  <span>Integrated Solution</span>
                  <a href="#services" className="text-[#00C853] font-semibold hover:underline flex items-center gap-1 shrink-0">
                    Learn more →
                  </a>
                </div>
              </div>

              {/* Connection Footer */}
              <div className="mt-6 flex items-center justify-center gap-2.5 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#00C853] animate-ping shrink-0" />
                <span>Connected Architecture • Solbasket Hub</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

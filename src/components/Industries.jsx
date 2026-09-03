import React, { useState } from 'react';
import { HeartPulse, GraduationCap, Pill, Building2, Briefcase, Store, ArrowRight, ShieldCheck } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare & Hospitals',
      badge: 'Featured Specialization',
      icon: HeartPulse,
      prominent: true,
      description: 'Our deepest domain expertise. We build integrated hospital operating systems, compliance tracking, and specialized patient reach campaigns.',
      solutions: [
        'Hospital Management Systems (HMS)',
        'Nursing Training LMS (NABH Audit Ready)',
        'Hospital Licence Management Systems',
        'Pharmacy Billing & Stock Control',
        'Healthcare HR & Doctor Recruitment',
        'Healthcare Marketing & Patient Portals'
      ]
    },
    {
      id: 'education',
      title: 'Schools & Colleges',
      badge: 'Education Tech',
      icon: GraduationCap,
      prominent: false,
      description: 'Streamlining academic administration, fee management, student records, and digital learning environments.',
      solutions: [
        'School ERP Systems',
        'College Learning Management Systems (LMS)',
        'Automated Fee Receipt & Alerts',
        'Student Assessment & Grade Portals'
      ]
    },
    {
      id: 'pharmacies',
      title: 'Pharmacies & Retail',
      badge: 'Retail Health',
      icon: Pill,
      prominent: false,
      description: 'High-speed point-of-sale billing, batch expiry protection, and clinical stock management.',
      solutions: [
        'Barcode Pharmacy POS Billing',
        'Batch Expiry Alert Engine',
        'Multi-Store Inventory Sync'
      ]
    },
    {
      id: 'it-companies',
      title: 'IT & Tech Firms',
      badge: 'Enterprise Tech',
      icon: Building2,
      prominent: false,
      description: 'Supporting tech startups and software firms with specialist talent acquisition and operational tools.',
      solutions: [
        'IT Specialist Recruitment',
        'Developer Manpower Planning',
        'Internal Workflow Automation Tools'
      ]
    },
    {
      id: 'smes',
      title: 'SMEs & Growing Businesses',
      badge: 'Business Growth',
      icon: Store,
      prominent: false,
      description: 'Transforming chaotic paper/spreadsheet setups into clean, scalable digital software environments.',
      solutions: [
        'Custom Business Software',
        'Process Automation',
        'HR Policy Creation',
        'Digital Marketing Strategy'
      ]
    },
    {
      id: 'services',
      title: 'Professional Services',
      badge: 'Operations',
      icon: Briefcase,
      prominent: false,
      description: 'Custom client portals, scheduling automation, and administrative workflow optimization.',
      solutions: [
        'Custom Client Dashboards',
        'Billing & Invoicing Workflows',
        'Employee Process Design'
      ]
    }
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="section bg-[#0B1326] relative border-t border-white/5">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Tailored Expertise</span>
          </div>
          <h2 className="heading-lg">Built For Real Businesses.</h2>
          <p className="body-lead">
            Domain-specific technology, HR, and marketing solutions designed around your sector's operational reality.
          </p>
        </div>

        {/* Featured Prominent Healthcare Hero Card */}
        <div
          className="rounded-2xl bg-gradient-to-br from-[#162542] via-[#101C33] to-[#162542] border-2 border-[#00C853]/60 shadow-[0_0_35px_rgba(0,200,83,0.2)] relative overflow-hidden"
          style={{ padding: '32px 36px', marginBottom: '36px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              
              {/* Header Title & Top-Right Primary Focus Badge */}
              <div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#00C853]/20 border border-[#00C853]/40 text-[#00C853] shrink-0">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-0.5">Healthcare & Hospitals</h3>
                    <span className="text-xs font-mono text-[#00C853] block">Specialized Clinical & Operational Engineering</span>
                  </div>
                </div>

                <span
                  className="inline-flex items-center px-3.5 py-1.5 text-xs font-mono font-semibold rounded-full bg-[#00C853]/15 text-[#00C853] border border-[#00C853]/40 shrink-0"
                  style={{ padding: '4px 14px', display: 'inline-flex', alignItems: 'center' }}
                >
                  🏆 PRIMARY INDUSTRY FOCUS
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Healthcare operations require absolute precision, compliance, and speed. Solbasket builds custom hospital management tools, NABH-ready nursing LMS, licence monitoring, and targeted hospital marketing.
              </p>

              {/* Checklist tags with flex-wrap & gap-2.5 */}
              <div className="flex flex-wrap gap-2.5">
                {industries[0].solutions.map((sol, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-200"
                    style={{ padding: '6px 14px', display: 'inline-flex', alignItems: 'center' }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                    <span>{sol}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Box with space-y-4 & 24px 28px padding */}
            <div
              className="lg:col-span-5 flex flex-col justify-center bg-black/40 rounded-2xl border border-white/10 text-center space-y-4"
              style={{ padding: '24px 28px' }}
            >
              <div>
                <span className="text-xs font-mono text-slate-400 mb-1 uppercase tracking-wider block">Healthcare Growth & Ops</span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Transforming Hospital Operations</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  From emergency room token management to NABH documentation, we help medical institutions operate effortlessly.
                </p>
              </div>
              <a
                href="mailto:admin@solbasket.com?subject=Healthcare%20Solution%20Enquiry"
                className="btn-primary h-[44px] text-xs px-5 justify-center w-full"
              >
                Discuss Healthcare Build
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Industry Cards Grid with 36px top margin */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          style={{ marginTop: '36px' }}
        >
          {industries.slice(1).map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="glass-card rounded-2xl flex flex-col justify-between group hover:border-[#00C853]/40 transition-all duration-300 h-full"
                style={{ padding: '28px 24px' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30 shrink-0"
                      style={{ padding: '4px 12px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      {ind.badge}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#00C853] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{ind.description}</p>

                  <div className="space-y-2.5 my-5 pt-3 border-t border-white/5">
                    {ind.solutions.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#00C853]">
                  <a
                    href={`mailto:admin@solbasket.com?subject=Enquiry%20for%20${encodeURIComponent(ind.title)}`}
                    className="font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Get Industry Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Activity, ShieldCheck, BookOpen, GraduationCap, FileCheck, Stethoscope, Receipt, Globe, LayoutDashboard, Cpu, Check, Lightbulb } from 'lucide-react';

export const SolutionsShowcase = () => {
  const solutions = [
    {
      id: 'hms',
      title: 'Hospital Management System',
      badge: 'Healthcare Core',
      icon: Activity,
      problem: 'Disjointed IPD/OPD patient records, manual doctor billing, and delayed discharge summaries causing patient queue bottlenecks.',
      built: 'Unified web dashboard connecting patient registration, OPD tokens, IPD ward management, pharmacy billing, and automated discharge reporting.',
      impact: 'Faster patient discharge turnaround, zero missing billing items, and real-time operational clarity for medical directors.'
    },
    {
      id: 'nursing-lms',
      title: 'Nursing Training LMS',
      badge: 'NABH Audit Ready',
      icon: Stethoscope,
      note: 'Designed to maintain nursing training records, assessments, attendance and documentation — supporting organizations during NABH audit preparation.',
      problem: 'Paper-based nursing training logs made tracking continuous education, competency assessments, and audit evidence tedious and error-prone.',
      built: 'Centralized LMS for hospital nursing staff with online modules, practical skill evaluation checklists, attendance logs, and automated compliance reports.',
      impact: '100% audit-ready digital documentation for NABH inspections, automated staff skill verification, and streamlined nursing education.'
    },
    {
      id: 'hrms-portal',
      title: 'HRMS Portal',
      badge: 'Workforce Hub',
      icon: LayoutDashboard,
      problem: 'HR staff overwhelmed with leave requests on WhatsApp, manual attendance calculation, and missing employee document records.',
      built: 'Self-service employee portal with shift rosters, biometric attendance sync, automated leave approval workflows, and digital HR onboarding.',
      impact: 'Eliminated manual attendance reconciliation, reduced HR tickets, and streamlined monthly payroll preparation.'
    },
    {
      id: 'lms-colleges',
      title: 'Learning Management System for Colleges',
      badge: 'Higher Ed',
      icon: GraduationCap,
      problem: 'Colleges struggled to track student submission deadlines, internal assessment scores, and online lecture attendance across departments.',
      built: 'Multi-department college LMS with course management, quiz engine, automated grade sheets, and parent transparency dashboard.',
      impact: 'Seamless remote & hybrid learning, instant internal marks compilation, and clear student performance analytics.'
    },
    {
      id: 'erp-schools',
      title: 'ERP System for Schools',
      badge: 'Education ERP',
      icon: BookOpen,
      problem: 'School fee collection was tracked across physical receipts and disconnected Excel files, causing parent confusion and delayed tracking.',
      built: 'Integrated school ERP covering admission management, automated fee receipt generation, SMS parent alerts, and transport route mapping.',
      impact: 'Transparent fee reconciliation, automated payment reminders, and zero lost accounting entries.'
    },
    {
      id: 'licence-mgmt',
      title: 'Hospital Licence Management System',
      badge: 'Compliance Tool',
      icon: FileCheck,
      problem: 'Hospitals faced risk of heavy penalties due to unexpected expiry of statutory medical licences, radiation safety certificates, and pollution permits.',
      built: 'Centralized compliance tracker with document repository, automated escalation alerts (90, 60, 30 days prior), and renewal workflow status.',
      impact: 'Zero lapsed licences, proactive renewal scheduling, and clear multi-branch compliance overview.'
    },
    {
      id: 'pharmacy-billing',
      title: 'Pharmacy Billing System',
      badge: 'Retail & Clinical',
      icon: Receipt,
      problem: 'Slow counter billing queues, manual batch expiry tracking, and stock-out scenarios during peak hospital prescription hours.',
      built: 'Ultra-fast barcode-enabled billing portal with instant stock lookup, automated batch expiry warnings, and GST tax invoice printing.',
      impact: '3x faster counter billing speed, zero expired medicine sales, and automated re-order triggers.'
    },
    {
      id: 'hospital-websites',
      title: 'Hospital Websites & Patient Portals',
      badge: 'Digital Front Door',
      icon: Globe,
      problem: 'Outdated static websites with no doctor appointment booking, poor mobile experience, and zero search engine visibility for specialties.',
      built: 'Modern, blazing-fast, mobile-optimized hospital web platform with online doctor scheduling, department showcases, and local SEO structure.',
      impact: 'Higher online doctor bookings, elevated patient trust, and strong organic search rankings.'
    },
    {
      id: 'custom-internal',
      title: 'Custom Internal Business Applications',
      badge: 'Operations',
      icon: ShieldCheck,
      problem: 'Proprietary business workflows forced into generic software spreadsheets, creating data duplication and loss of accountability.',
      built: 'Purpose-built web applications matching exact business logic, role-based security access, and real-time operational status dashboards.',
      impact: 'Total workflow alignment, zero unnecessary manual steps, and complete data security.'
    },
    {
      id: 'problem-software',
      title: 'Custom Problem-Statement Software',
      badge: 'Bespoke Engineering',
      icon: Cpu,
      problem: 'Niche operational bottleneck that standard off-the-shelf software tools cannot solve.',
      built: 'Hands-on architectural review, rapid prototyping, and custom full-stack software tailored specifically to the problem statement.',
      impact: 'Immediate resolution of unique operational pain points with customized tools built around your team.'
    }
  ];

  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  return (
    <section id="solutions" className="section bg-[#101C33] relative border-t border-white/5 scroll-mt-24">
      <div className="container relative z-10">
        <div className="section-header mb-12 md:mb-14">
          <div className="badge mb-4">
            <span className="badge-dot" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="heading-lg mb-4">We Don't Sell Software. We Build Solutions.</h2>
          <p className="body-lead">
            Every organization has its own way of working. Your software should respect that.
          </p>
        </div>

        {/* Dashboard Grid & Preview System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Solution Selector List (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[640px] overflow-y-auto pr-2 py-1">
            {solutions.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedSolution.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSolution(item)}
                  className={`px-4 py-3 min-h-[58px] rounded-xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#162542] border-[#00C853] text-white shadow-[0_0_20px_rgba(0,200,83,0.18)]'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-[#00C853]/20 text-[#00C853]' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold leading-snug">{item.title}</h4>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">{item.badge}</span>
                    </div>
                  </div>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853] shrink-0 ml-3" />}
                </button>
              );
            })}
          </div>

          {/* Interactive Software Dashboard Preview Card (Right Column) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div
              className="glass-card p-6 sm:p-8 rounded-2xl border-[#00C853]/40 shadow-2xl relative overflow-hidden"
              style={{ padding: '28px 32px' }}
            >
              
              {/* Dashboard top header bar */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/10 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
                    Solbasket Dashboard :: {selectedSolution.badge}
                  </span>
                </div>
                <span
                  className="inline-flex items-center text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30 leading-normal shrink-0"
                  style={{ padding: '4px 12px', display: 'inline-flex', alignItems: 'center' }}
                >
                  Case Study
                </span>
              </div>

              {/* Title & Optional Special Note */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{selectedSolution.title}</h3>

              {selectedSolution.note && (
                <div
                  className="mb-4 p-4.5 rounded-xl bg-[#00C853]/10 border border-[#00C853]/30 text-[#00C853] text-xs leading-relaxed font-mono flex items-start gap-3"
                  style={{ padding: '16px' }}
                >
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{selectedSolution.note}</span>
                </div>
              )}

              {/* 3 Detail Blocks with space-y-4 & 16px sub-box padding */}
              <div className="space-y-4 my-2">
                
                {/* 1. Problem */}
                <div
                  className="p-4.5 rounded-xl bg-white/5 border border-white/5"
                  style={{ padding: '16px 20px' }}
                >
                  <div className="text-xs font-mono uppercase text-red-400 mb-1.5 font-bold tracking-wider">
                    The Challenge / Operational Bottleneck
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedSolution.problem}
                  </p>
                </div>

                {/* 2. What We Built */}
                <div
                  className="p-4.5 rounded-xl bg-white/5 border border-white/5"
                  style={{ padding: '16px 20px' }}
                >
                  <div className="text-xs font-mono uppercase text-[#00C853] mb-1.5 font-bold tracking-wider">
                    What Solbasket Engineered
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedSolution.built}
                  </p>
                </div>

                {/* 3. Business Impact */}
                <div
                  className="p-4.5 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20"
                  style={{ padding: '16px 20px' }}
                >
                  <div className="text-xs font-mono uppercase text-white mb-1.5 font-bold tracking-wider flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00C853]" />
                    <span>Real Business Impact</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {selectedSolution.impact}
                  </p>
                </div>

              </div>

              {/* Bottom CTA with 24px top margin clearance */}
              <div
                className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-4"
                style={{ marginTop: '24px', paddingTop: '20px' }}
              >
                <span className="text-xs text-slate-400 font-medium">Need something similar for your organization?</span>
                <a
                  href={`mailto:admin@solbasket.com?subject=Requirement%20for%20${encodeURIComponent(selectedSolution.title)}`}
                  className="btn-primary h-[44px] text-xs px-5"
                >
                  Discuss This Build
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

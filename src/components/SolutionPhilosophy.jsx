import React, { useState } from 'react';
import { FileSpreadsheet, MessageSquare, Mail, PhoneCall, HelpCircle, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const SolutionPhilosophy = () => {
  const [transformed, setTransformed] = useState(false);

  return (
    <section className="section bg-[#0B1326] relative overflow-hidden border-t border-white/5">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header mb-10">
          <div className="badge mb-3">
            <span className="badge-dot" />
            <span>Solution-First Engineering</span>
          </div>
          <h2 className="heading-lg mb-3">Got a Problem That Doesn't Have a Software?</h2>
          <p className="text-2xl md:text-3xl font-extrabold text-[#00C853] mb-4">
            "Good. Those are our favourite ones."
          </p>
          <p className="body-lead max-w-2xl mx-auto">
            Tell us what currently takes five people, ten spreadsheets and three WhatsApp groups. We'll figure out whether it can be simplified.
          </p>
        </div>

        {/* Outer Centering Wrapper for Operational Diagnostic Card */}
        <div
          className="w-full flex justify-center items-center my-12 md:my-16"
          style={{ marginTop: '48px', marginBottom: '64px' }}
        >
          {/* Interactive Transformation Visualizer Card */}
          <div
            className="w-full max-w-5xl mx-auto glass-card rounded-2xl relative overflow-hidden border-[#00C853]/30 shadow-2xl"
            style={{ padding: '36px 32px' }}
          >
            
            {/* Header Row with explicit 32px bottom margin */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10"
              style={{ marginBottom: '32px' }}
            >
              <div>
                <span className="text-xs font-mono text-[#00C853] uppercase tracking-wider block mb-1 font-bold">
                  Operational Diagnostic
                </span>
                <h3 className="text-xl font-bold text-white">
                  {transformed ? '✨ Solbasket Unified Workflow' : '⚠️ Current Manual Chaos'}
                </h3>
              </div>

              <button
                onClick={() => setTransformed(!transformed)}
                className="btn-primary h-[44px] text-xs px-5 shadow-[0_0_15px_rgba(0,200,83,0.3)] hover:scale-105 transition-transform shrink-0"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{transformed ? 'Show Manual Chaos' : 'Simplify My Workflow'}</span>
              </button>
            </div>

            {!transformed ? (
              /* CHAOS STATE */
              <div className="animate-in fade-in duration-300">
                <p
                  className="text-center text-xs sm:text-sm font-mono text-slate-400"
                  style={{ marginTop: '16px', marginBottom: '28px' }}
                >
                  Current Disjointed Operational Loop (Click button above to transform)
                </p>

                <div
                  className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 items-stretch"
                  style={{ marginTop: '24px', marginBottom: '28px' }}
                >
                  <div className="p-4 sm:p-5 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col items-center justify-center text-center h-full">
                    <FileSpreadsheet className="w-7 h-7 text-red-400 mb-2.5 animate-bounce" />
                    <span className="text-xs sm:text-sm font-bold text-white">10 Spreadsheets</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1">Manual formulas</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-center h-full">
                    <MessageSquare className="w-7 h-7 text-amber-400 mb-2.5" />
                    <span className="text-xs sm:text-sm font-bold text-white">WhatsApp Groups</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1">Lost updates</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center text-center h-full">
                    <Mail className="w-7 h-7 text-blue-400 mb-2.5" />
                    <span className="text-xs sm:text-sm font-bold text-white">Email Threads</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1">Unread approvals</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col items-center justify-center text-center h-full">
                    <PhoneCall className="w-7 h-7 text-purple-400 mb-2.5" />
                    <span className="text-xs sm:text-sm font-bold text-white">Phone Calls</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1">Status chasing</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-pink-500/10 border border-pink-500/20 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 h-full">
                    <HelpCircle className="w-7 h-7 text-pink-400 mb-2.5 animate-spin" />
                    <span className="text-xs sm:text-sm font-bold text-white">Total Confusion</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1">Monday stress</span>
                  </div>
                </div>

                <div
                  className="text-center"
                  style={{ marginTop: '24px', marginBottom: '24px' }}
                >
                  <p className="text-sm text-slate-300 italic font-medium">
                    "Your team shouldn't spend Monday morning moving data from Excel to Excel."
                  </p>
                </div>
              </div>
            ) : (
              /* CLEAN WORKFLOW STATE */
              <div className="space-y-6 animate-in zoom-in-95 duration-500">
                <div className="p-6 md:p-8 rounded-2xl bg-[#00C853]/10 border border-[#00C853]/40 text-center relative">
                  <Sparkles className="w-9 h-9 text-[#00C853] mx-auto mb-3 animate-pulse" />
                  
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2.5">
                    ONE CLEAN WORKFLOW
                  </h4>
                  
                  <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                    Single automated web platform. Real-time data sync. Role-based access. Zero lost approvals. Zero spreadsheet copy-pasting.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">1-Click Live Status</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">Automated Reminders</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">100% Operational Clarity</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom callout */}
            <div
              className="border-t border-white/10 text-center"
              style={{ paddingTop: '20px', marginTop: '20px' }}
            >
              <a
                href="mailto:admin@solbasket.com?subject=Workflow%20Simplification%20Query"
                className="text-sm font-semibold text-[#00C853] hover:underline inline-flex items-center gap-2"
              >
                <span>Have a chaotic workflow to simplify? Email our engineering team →</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

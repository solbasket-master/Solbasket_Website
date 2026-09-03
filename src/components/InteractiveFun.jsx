import React, { useState } from 'react';
import { Sliders, Frown, Smile, Mail, MessageCircle, AlertTriangle } from 'lucide-react';

export const InteractiveFun = () => {
  const [spreadsheets, setSpreadsheets] = useState(12);
  const [excelChoice, setExcelChoice] = useState(null);

  const getSpreadsheetReaction = (val) => {
    if (val <= 3) {
      return { text: "Manageable... for now. Keep an eye on it.", color: "text-green-400" };
    } else if (val <= 15) {
      return { text: "Getting cluttered. You're copy-pasting every Friday, aren't you?", color: "text-amber-400" };
    } else if (val <= 50) {
      return { text: "Danger zone! One corrupt formula will wreck your weekly tracking.", color: "text-orange-400" };
    } else {
      return { text: "That's not a workflow. That's a cry for help. 🆘", color: "text-red-400 font-bold" };
    }
  };

  const reaction = getSpreadsheetReaction(spreadsheets);

  return (
    <section id="interactive-fun" className="section pt-20 md:pt-24 pb-16 md:pb-20 bg-[#101C33] relative border-t border-white/5 scroll-mt-28">
      <div className="container max-w-7xl relative z-10" style={{ maxWidth: '1280px' }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Interactive Reality Check</span>
          </div>
          <h2 className="heading-lg">Is Your Process Slowing You Down?</h2>
          <p className="body-lead">
            Take a quick 10-second operational health check.
          </p>
        </div>

        <div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}
        >
          
          {/* Card 1: Spreadsheet Slider */}
          <div
            className="glass-card w-full h-full flex flex-col justify-between border-[#00C853]/30 shadow-2xl"
            style={{ padding: '28px 32px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#00C853] uppercase tracking-wider font-bold">
                  Spreadsheet Counter
                </span>
                <Sliders className="w-5 h-5 text-[#00C853]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                "How many spreadsheets does your business need?"
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Drag the slider to count your active business tracking files:
              </p>

              {/* Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-2xl font-mono font-bold text-white mb-2">
                  <span>{spreadsheets} {spreadsheets === 100 ? '100+' : ''}</span>
                  <span className="text-xs text-slate-400 font-normal">Spreadsheets</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={spreadsheets}
                  onChange={(e) => setSpreadsheets(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
                />
              </div>

              {/* Dynamic Reaction Box */}
              <div
                className="rounded-xl bg-white/5 border border-white/10 text-center min-h-[80px] flex items-center justify-center"
                style={{ padding: '12px 16px' }}
              >
                <p className={`text-sm ${reaction.color}`}>
                  "{reaction.text}"
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="mailto:admin@solbasket.com?subject=Spreadsheet%20Cleanup%20Requirement"
                className="btn-primary h-[48px] w-full text-xs justify-center"
              >
                <span>Replace Spreadsheets with Custom Tools</span>
              </a>
            </div>
          </div>

          {/* Card 2: Excel + WhatsApp Check */}
          <div
            className="glass-card w-full h-full flex flex-col justify-between border-[#00C853]/30 shadow-2xl"
            style={{ padding: '28px 32px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#00C853] uppercase tracking-wider font-bold">
                  Operational Diagnostic
                </span>
                <MessageCircle className="w-5 h-5 text-[#00C853]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                "Is your current process held together by Excel + WhatsApp?"
              </h3>

              <p className="text-xs text-slate-300 mb-6">
                Be honest. Do your team members send daily updates across 15 WhatsApp groups and paste them into Excel?
              </p>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setExcelChoice('YES')}
                  className={`p-4 rounded-xl border font-bold text-sm transition-all flex flex-col items-center gap-2 ${
                    excelChoice === 'YES'
                      ? 'bg-red-500/20 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <Frown className="w-6 h-6 text-red-400" />
                  <span>YES 😭</span>
                </button>

                <button
                  onClick={() => setExcelChoice('NO')}
                  className={`p-4 rounded-xl border font-bold text-sm transition-all flex flex-col items-center gap-2 ${
                    excelChoice === 'NO'
                      ? 'bg-[#00C853]/20 border-[#00C853] text-white shadow-[0_0_15px_rgba(0,200,83,0.3)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <Smile className="w-6 h-6 text-[#00C853]" />
                  <span>NO 😎</span>
                </button>
              </div>

              {/* Reaction display */}
              {excelChoice === 'YES' && (
                <div
                  className="rounded-xl bg-red-500/10 border border-red-500/30 text-center animate-in fade-in duration-300"
                  style={{ padding: '12px 16px' }}
                >
                  <p className="text-xs text-slate-200 font-bold mb-2">
                    "We should talk."
                  </p>
                  <p className="text-[11px] text-slate-400 mb-3">
                    Solbasket builds real tools so your team can stop copy-pasting.
                  </p>
                  <a
                    href="mailto:admin@solbasket.com?subject=Fix%20My%20WhatsApp%20Excel%20Chaos"
                    className="text-xs text-[#00C853] font-bold hover:underline"
                  >
                    Email Solbasket Now →
                  </a>
                </div>
              )}

              {excelChoice === 'NO' && (
                <div
                  className="rounded-xl bg-[#00C853]/10 border border-[#00C853]/30 text-center animate-in fade-in duration-300"
                  style={{ padding: '12px 16px' }}
                >
                  <p className="text-xs text-slate-200 font-bold mb-1">
                    "Respect."
                  </p>
                  <p className="text-[11px] text-slate-300">
                    "But we can still help automate what remains."
                  </p>
                </div>
              )}

              {!excelChoice && (
                <p className="text-xs text-slate-500 text-center italic">
                  Select an option above to test your workflow status.
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <a
                href="mailto:admin@solbasket.com?subject=Manual%20Task%20Analysis"
                className="text-xs text-[#00C853] font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>"Still doing this manually? Tell us what you're doing."</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



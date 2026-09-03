import React, { useState } from 'react';
import { Check, Mail, Sparkles } from 'lucide-react';

export const NeedSelector = () => {
  const options = [
    'Automate a manual process',
    'Build custom software',
    'Improve HR processes',
    'Hire people',
    'Manage payroll',
    'Build an LMS',
    'Build a hospital system',
    'Improve digital marketing',
    'Improve SEO',
    'Build a website',
    'Analyse my business process',
    'I have no idea — I just know something is broken'
  ];

  const [selected, setSelected] = useState([]);

  const toggleOption = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const mailtoSubject = selected.length > 0
    ? `Solbasket%20Requirement:%20${encodeURIComponent(selected.slice(0, 3).join(', '))}`
    : 'Solbasket%20Requirement';

  return (
    <section id="need-selector" className="section pt-20 md:pt-24 pb-16 md:pb-20 bg-[#0B1326] relative border-t border-white/5 scroll-mt-28">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Interactive Requirement Finder</span>
          </div>
          <h2 className="heading-lg">What are you trying to solve?</h2>
          <p className="body-lead">
            Select all that apply to your current business objectives.
          </p>
        </div>

        {/* Parent Wrapper for Center Alignment */}
        <div className="w-full flex justify-center items-center px-4">
          {/* Main Glass Card */}
          <div
            className="glass-card max-w-4xl w-full mx-auto border-[#00C853]/30 shadow-2xl"
            style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 36px' }}
          >
            {/* Options Pill Grid */}
            <div className="flex flex-wrap items-center justify-center gap-3 my-6">
              {options.map((opt, idx) => {
                const isChecked = selected.includes(opt);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleOption(opt)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all duration-200 ${
                      isChecked
                        ? 'bg-[#00C853] text-[#050B14] border-[#00C853] shadow-[0_0_15px_rgba(0,200,83,0.4)] scale-105 font-semibold'
                        : 'bg-white/5 text-slate-200 border-white/10 hover:border-[#00C853]/40 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${isChecked ? 'bg-[#050B14] border-[#050B14]' : 'border-slate-500'}`}>
                      {isChecked && <Check className="w-3 h-3 text-[#00C853]" />}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Result Box / Helper Caption */}
            {selected.length > 0 ? (
              <div className="mt-6 pt-4 border-t border-white/10 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 text-[#00C853] font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selected.length} requirement{selected.length > 1 ? 's' : ''} selected</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  "Sounds like something we should discuss."
                </h3>
                <a
                  href={`mailto:admin@solbasket.com?subject=${mailtoSubject}`}
                  className="btn-primary h-[48px] px-7 inline-flex items-center justify-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            ) : (
              <p className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400 italic">
                Click any options above to build your custom enquiry.
              </p>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};


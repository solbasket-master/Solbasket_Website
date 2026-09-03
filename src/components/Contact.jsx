import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section pt-20 md:pt-24 pb-16 md:pb-20 bg-[#101C33] relative border-t border-white/5 scroll-mt-28 w-full flex flex-col items-center justify-center px-4">
      <div className="bg-grid" />

      <div className="container relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="heading-lg">Get In Touch</h2>
          <p className="body-lead">
            Ready to streamline operations, build tailored software, or scale your team? Let's talk.
          </p>
        </div>

        {/* Centered Main CTA Card */}
        <div
          className="glass-card w-full max-w-4xl mx-auto flex flex-col items-center text-center border-[#00C853]/40 shadow-2xl relative overflow-hidden"
          style={{ margin: '0 auto', maxWidth: '880px', width: '100%', padding: '36px 32px' }}
        >
          <div className="badge mb-4">
            <span className="badge-dot" />
            <span>Direct Access</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Have a Problem Worth Solving?
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-2">
            Tell us what's slowing your business down. We'll figure out what can be done.
          </p>

          {/* Primary Mailto Action */}
          <div className="my-6 flex flex-col items-center gap-3.5 w-full">
            <a
              href="mailto:admin@solbasket.com?subject=Solbasket%20Enquiry"
              className="btn-primary h-[50px] text-base px-8 shadow-[0_0_30px_rgba(0,200,83,0.4)]"
            >
              <span>Email Solbasket</span>
              <Mail className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-2 text-slate-300 text-sm font-mono mt-1">
              <span className="text-slate-400">Direct Email:</span>
              <a href="mailto:admin@solbasket.com" className="text-[#00C853] font-bold hover:underline">
                admin@solbasket.com
              </a>
            </div>
          </div>

          {/* Guarantee / Assurance Badges */}
          <div className="pt-6 mt-2 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>Direct response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>No pushy sales calls</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>Practical architectural review</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


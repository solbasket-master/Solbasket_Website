import React from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const SubscriptionModel = () => {
  const traditionalSteps = [
    'Requirement Gathering',
    'Hefty Quotation & Negotiation',
    'Months of Waiting',
    'Rigid Delivery',
    'Paid Change Requests',
    'More Cost & Delay'
  ];

  const solbasketSteps = [
    'Share Your Requirement',
    'Rapid Analysis',
    'Focused Sprint Build',
    'Weekly Live Demo',
    'Your Direct Feedback',
    'Iterate & Expand'
  ];

  const rules = [
    {
      title: 'Monthly Subscription Model',
      desc: 'Predictable monthly investment without the overhead of hiring full-time developers or HR leads.'
    },
    {
      title: 'Demand-Driven Builds',
      desc: 'Request solutions based on your actual business priorities. Not a static off-the-shelf catalog.'
    },
    {
      title: 'Weekly Live Progress Demos',
      desc: 'See exactly what is being built every single week. Complete transparency and zero surprises.'
    },
    {
      title: 'Continuous Feedback Cycle',
      desc: 'Refine features in real-time as your team tests solutions in live daily operations.'
    },
    {
      title: 'No Long-Term Lock-in',
      desc: 'If your business needs change, cancel anytime. You pay only up to the completed review period as agreed.'
    }
  ];

  return (
    <section className="section bg-[#101C33] relative border-t border-white/5">
      <div className="container max-w-6xl w-full mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Key Solbasket Differentiator</span>
          </div>
          <h2 className="heading-lg">Your Own Tech Team. Without Hiring One.</h2>
          <p className="body-lead">
            Need software regularly but don't want to hire a full development team? Work with Solbasket on a monthly subscription.
          </p>
          <p className="text-slate-300 text-sm mt-3">
            Instead of buying a predefined product, you get access to our expert team to build solutions around your business requirements.
          </p>
        </div>

        {/* Visual Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-14 items-stretch">
          
          {/* Traditional Card */}
          <div
            className="p-6 md:p-8 rounded-2xl bg-[#162542]/50 border border-red-500/20 relative flex flex-col justify-between h-full"
            style={{ padding: '32px 28px' }}
          >
            <div>
              <div className="flex items-center gap-2 mb-5 text-red-400 font-mono text-xs uppercase tracking-wider font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Traditional Agency Model</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-5">Slow, Rigid & Costly</h3>

              <div className="space-y-3">
                {traditionalSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl bg-red-500/5 border border-red-500/10 text-slate-400 text-sm"
                    style={{ padding: '12px 16px', marginBottom: '12px' }}
                  >
                    <span className="font-mono text-xs text-red-400/60 font-bold shrink-0">0{idx + 1}</span>
                    <span className="line-through">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-xs text-slate-500 italic text-center"
              style={{ marginTop: '24px', paddingTop: '16px' }}
            >
              High initial risk, delayed delivery, and endless change requests.
            </p>
          </div>

          {/* Solbasket Subscription Card */}
          <div
            className="glass-card p-6 md:p-8 border-[#00C853]/40 shadow-2xl relative flex flex-col justify-between h-full"
            style={{ padding: '32px 28px' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
                <div className="flex items-center gap-2 text-[#00C853] font-mono text-xs uppercase tracking-wider font-bold">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Agile Monthly Subscription</span>
                </div>

                <span
                  className="inline-flex items-center text-xs font-bold font-mono px-3.5 py-1.5 rounded-full bg-[#00C853] text-[#050B14] shrink-0"
                  style={{ padding: '4px 14px', display: 'inline-flex', alignItems: 'center' }}
                >
                  SOLBASKET MODEL
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-5">Agile, Transparent & Continuous</h3>

              <div className="space-y-3">
                {solbasketSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl bg-[#00C853]/10 border border-[#00C853]/20 text-slate-100 text-sm font-semibold"
                    style={{ padding: '12px 16px', marginBottom: '12px' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#00C853] shrink-0">0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-xs text-[#00C853] font-semibold text-center"
              style={{ marginTop: '24px', paddingTop: '16px' }}
            >
              "Flexible engagement. Regular demos. No long-term lock-in."
            </p>
          </div>

        </div>

        {/* Subscription Guarantees / Rules Grid with 48px top margin */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8"
          style={{ marginTop: '48px' }}
        >
          {rules.map((rule, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#00C853]/40 transition-colors flex flex-col justify-between h-full"
              style={{ padding: '20px' }}
            >
              <div>
                <ShieldCheck className="w-5 h-5 text-[#00C853] mb-3" />
                <h4 className="text-sm font-bold text-white mb-1.5">{rule.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button Container */}
        <div className="w-full flex justify-center mt-10" style={{ marginTop: '40px' }}>
          <a
            href="mailto:admin@solbasket.com?subject=Solbasket%20Subscription%20Enquiry"
            className="btn-primary h-[48px] px-8 text-sm inline-flex items-center gap-2"
          >
            <span>Talk About a Subscription</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

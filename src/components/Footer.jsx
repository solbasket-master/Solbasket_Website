import React from 'react';
import logoImg from '../assets/logo.png';

export const Footer = () => {
  const scrollToTop = (e) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a1120] text-slate-300 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <a href="#top" onClick={scrollToTop} className="bg-white p-2.5 rounded-xl inline-flex items-center justify-center">
              <img src={logoImg} alt="Solbasket" className="h-7 w-auto object-contain" />
            </a>
            <p className="text-[#00C853] font-semibold text-sm">
              "Build Better. Work Smarter. Grow Faster."
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Solbasket is a technology, HR and marketing solutions firm. We help organizations automate daily operations, build custom software, streamline people processes, and grow their digital presence.
            </p>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/15 text-slate-300 mt-1">
              Technology • HR • Marketing
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
              Quick Navigation
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs text-slate-400">
              <a href="#top" onClick={scrollToTop} className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">Services (IT, HR, Marketing)</a>
              <a href="#solutions" className="hover:text-white transition-colors">Solutions We've Built</a>
              <a href="#how-we-work" className="hover:text-white transition-colors">How We Work</a>
              <a href="#clients" className="hover:text-white transition-colors">Clients &amp; Trusted By</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Col 3: Get In Touch */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Send us your problem statement or custom requirement anytime:
            </p>
            <a
              href="mailto:admin@solbasket.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#00C853] transition-colors mt-1"
            >
              <span>✉</span>
              <span>admin@solbasket.com</span>
            </a>
          </div>
        </div>

        {/* Dedicated Sub-Footer / Copyright Row */}
        <div className="border-t border-white/10 mt-12 pt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>© 2026 Solbasket. All rights reserved.</span>
          <a href="#top" onClick={scrollToTop} className="hover:text-slate-300 flex items-center gap-1 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};



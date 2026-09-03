import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'solutions', 'how-we-work', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How We Work', href: '#how-we-work', id: 'how-we-work' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1326]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container h-[80px] flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center group" aria-label="Solbasket Home">
          <div className="bg-white/95 px-4 py-2 rounded-xl shadow-md border border-white/20 flex items-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg}
              alt="Solbasket Logo"
              className="h-11 md:h-13 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                activeSection === link.id
                  ? 'text-[#00C853] font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C853] rounded-full shadow-[0_0_8px_#00C853]" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Magnetic CTA */}
        <div className="hidden lg:block">
          <a
            href="mailto:admin@solbasket.com?subject=Solbasket%20Enquiry"
            className="btn-primary h-[44px] px-5 group relative overflow-hidden text-sm"
          >
            <span>Let's Build Something</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bg-[#101C33]/98 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  activeSection === link.id ? 'text-[#00C853]' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="mailto:admin@solbasket.com?subject=Solbasket%20Enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full justify-center text-center mt-2"
          >
            <span>Let's Build Something</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

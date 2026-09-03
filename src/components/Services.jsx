import React, { useState } from 'react';
import { Code, Users, Megaphone, CheckCircle2, Mail } from 'lucide-react';

export const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const servicesData = [
    {
      id: 'it-software',
      category: 'IT & SOFTWARE',
      tagline: 'Automate the boring stuff.',
      description: 'We build custom software, automation systems and digital workflows that eliminate repetitive work and bring clarity to your operations.',
      icon: Code,
      ctaText: 'Build My Software',
      ctaSubject: 'Custom%20Software%20Requirement',
      services: [
        'Custom Software Development',
        'Business Process Automation',
        'Workflow Management',
        'Hospital Management Systems',
        'HRMS',
        'Learning Management Systems',
        'ERP Systems',
        'Licence Management Systems',
        'Pharmacy Billing Systems',
        'Hospital Websites',
        'Custom Dashboards',
        'Internal Business Tools',
        'Custom Problem-Statement Solutions',
        'Business Analysis & Digital Transformation'
      ]
    },
    {
      id: 'hr-services',
      category: 'HR SERVICES',
      tagline: 'People problems. Process solutions.',
      description: 'We help organizations create structured, scalable HR processes — from hiring to policies to payroll and manpower planning.',
      icon: Users,
      ctaText: 'Fix My HR Process',
      ctaSubject: 'HR%20Services%20Enquiry',
      services: [
        'End-to-End HR Process Creation',
        'HR Policy Creation',
        'Healthcare Recruitment',
        'IT Recruitment',
        'Payroll Support',
        'HR Manpower Planning',
        'Recruitment & Staffing',
        'Employee Process Design',
        'HR Operations Support',
        'Training & Development'
      ]
    },
    {
      id: 'marketing',
      category: 'MARKETING',
      tagline: "Don't just exist online.",
      description: 'We help hospitals and businesses build a stronger digital presence through strategy, content, advertising and search.',
      icon: Megaphone,
      ctaText: 'Grow My Brand',
      ctaSubject: 'Marketing%20Enquiry',
      services: [
        'Social Media Marketing',
        'Digital Marketing',
        'SEO',
        'Ad Campaigns',
        'Ad Shoots',
        'Creative Content',
        'Social Media Management',
        'Brand Communication',
        'Healthcare Marketing',
        'Digital Presence Strategy'
      ]
    }
  ];

  return (
    <section id="services" className="section bg-[#0B1326] relative">
      <div className="container relative z-10">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="heading-lg">Three Areas. One Goal.</h2>
          <p className="body-lead">
            Make your business simpler, smarter and more scalable.
          </p>
        </div>

        {/* 3 Large Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((card) => {
            const Icon = card.icon;
            const isExpanded = expandedCard === card.id;
            const displayedServices = isExpanded ? card.services : card.services.slice(0, 6);

            return (
              <div
                key={card.id}
                className="glass-card p-6 md:p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00C853]/50 transition-all duration-300 relative overflow-hidden h-full"
              >
                {/* Glowing top line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00C853]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col h-full">
                  {/* Card Header: Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 gap-3">
                    <span
                      className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[#00C853] uppercase px-3.5 py-1.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 leading-normal shrink-0"
                      style={{ padding: '4px 14px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      {card.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00C853]/40 text-[#00C853] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2.5 text-white leading-snug">
                    "{card.tagline}"
                  </h3>

                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Services Checklist with 24px top margin clearance */}
                  <div className="mt-6 pt-5 border-t border-white/10" style={{ marginTop: '24px', paddingTop: '20px' }}>
                    <p className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider font-semibold">
                      Included Solutions ({card.services.length}):
                    </p>
                    <ul className="space-y-2">
                      {displayedServices.map((svc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>

                    {card.services.length > 6 && (
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                        className="mt-3 text-xs text-[#00C853] font-semibold hover:underline flex items-center gap-1 focus:outline-none"
                      >
                        {isExpanded ? 'Show fewer services ↑' : `+ ${card.services.length - 6} more services ↓`}
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 mt-auto">
                  <a
                    href={`mailto:admin@solbasket.com?subject=${card.ctaSubject}`}
                    className="btn-primary h-[48px] w-full justify-center text-sm"
                  >
                    <span>{card.ctaText}</span>
                    <Mail className="w-4 h-4" />
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

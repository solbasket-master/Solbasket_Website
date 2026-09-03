import React from 'react';
import { Building, MapPin, Award } from 'lucide-react';

export const Clients = () => {
  const clientList = [
    {
      name: 'Manitham Hospitals',
      location: 'Chennai',
      type: 'Multi-Specialty Hospital',
      badge: 'Technology Partner'
    },
    {
      name: 'Yazhini Hospitals',
      location: 'Salem',
      type: 'Advanced Healthcare Institution',
      badge: 'Technology Partner'
    },
    {
      name: 'Vinayaka Missions Hospitals',
      location: 'Salem',
      type: 'Premier Teaching & Medical Center',
      badge: 'Technology Partner'
    }
  ];

  return (
    <section id="clients" className="section pt-24 md:pt-28 pb-16 md:pb-20 bg-[#101C33] relative border-t border-white/5 scroll-mt-28">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot" />
            <span>Proven Relationships</span>
          </div>
          <h2 className="heading-lg">Trusted By</h2>
          <p className="body-lead">
            Selected organizations we've worked with.
          </p>
        </div>

        {/* Text-Based Premium Client Cards (Natural Height & Tight Layout) */}
        <div
          className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-start"
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          {clientList.map((client, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[#00C853]/50 transition-all duration-300 relative overflow-hidden h-auto py-7 px-6"
              style={{ height: 'auto', padding: '28px 24px' }}
            >
              <div className="w-full flex flex-col items-center">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 text-xs font-semibold text-[#00C853] mb-4 shrink-0"
                  style={{ padding: '4px 12px', display: 'inline-flex', alignItems: 'center' }}
                >
                  <Award className="w-3.5 h-3.5 text-[#00C853]" />
                  <span>{client.badge}</span>
                </div>

                <div className="p-3.5 rounded-full bg-white/5 border border-white/10 w-14 h-14 mx-auto mb-4 flex items-center justify-center text-[#00C853] group-hover:scale-110 transition-transform">
                  <Building className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#00C853] transition-colors leading-snug">
                  {client.name}
                </h3>

                <p className="text-xs text-slate-400 mb-4">{client.type}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs text-slate-300 font-mono w-full">
                <MapPin className="w-3.5 h-3.5 text-[#00C853]" />
                <span>{client.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


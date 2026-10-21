import React from 'react';
import { TOPPER_TESTIMONIALS } from '../data/mockData';
import { Award, Quote, CheckCircle2, Star, TrendingUp, ShieldCheck, UserCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const getInitials = (name: string) => {
    return name
      .replace('Dr. ', '')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);
  };

  const getServiceBadgeColor = (service: string) => {
    if (service.includes('IAS')) return 'bg-amber-950 text-amber-200 border-amber-800/80';
    if (service.includes('IPS')) return 'bg-stone-900 text-stone-200 border-stone-700';
    if (service.includes('IFS')) return 'bg-emerald-950 text-emerald-200 border-emerald-800/80';
    return 'bg-stone-800 text-stone-200 border-stone-700';
  };

  return (
    <section id="rankers" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Verified Social Proof</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Topper Case Studies</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Recommended by Top 100 Rankers & Dedicated Working Aspirants
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            Real outcomes from civil servants who replaced subjective coaching feedback with data-calibrated AI evaluations.
          </p>
        </div>

        {/* Testimonials Grid (2x2 Grid with quantitative impact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOPPER_TESTIMONIALS.map((top) => (
            <div 
              key={top.id}
              className="bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Attributable Rank & Service Lockup with Initials Avatar */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Initials Avatar Badge */}
                    <div className="w-11 h-11 rounded-full bg-stone-900 text-amber-200 border-2 border-amber-700/40 flex items-center justify-center font-serif font-bold text-sm shrink-0 shadow-xs">
                      {getInitials(top.name)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-lg text-stone-900">
                          {top.name}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getServiceBadgeColor(top.service)}`}>
                          {top.rank}
                        </span>
                      </div>
                      <div className="text-xs text-stone-600 mt-0.5 flex items-center gap-1.5">
                        <span className="font-medium text-stone-800">{top.service}</span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-stone-500 font-mono text-[11px]">{top.examYear}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantitative outcome box */}
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {top.mainsImprovement}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>UPSC Verified</span>
                    </div>
                  </div>
                </div>

                {/* Candidate Quote */}
                <p className="text-stone-700 text-sm font-serif-prose leading-relaxed italic pt-1">
                  "{top.quote}"
                </p>

              </div>

              {/* Clean footer with feature attribution */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-stone-700">Optional:</span>
                  <span>{top.optionalSubject}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-stone-700">Primary Tool:</span>
                  <span className="text-amber-900 font-semibold">{top.keyFeatureUsed}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Civil Services Integrity Disclaimer */}
        <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
            <span>All testimonials verified through roll numbers and official UPSC CSE Final Merit List releases.</span>
          </div>
          <span className="font-medium text-stone-700 hidden sm:inline">UPSC ZONE AI Code of Academic Integrity</span>
        </div>

      </div>
    </section>
  );
};

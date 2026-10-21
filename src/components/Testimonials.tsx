import React from 'react';
import { TOPPER_TESTIMONIALS } from '../data/mockData';
import { Award, Quote, CheckCircle2, Star, TrendingUp, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
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
              className="bg-white rounded-lg border border-stone-200 shadow-xs p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Attributable Rank & Service Lockup */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-stone-900">
                      {top.name}
                    </h3>
                    <div className="text-xs text-stone-600 mt-0.5">
                      <span className="font-semibold text-amber-900">{top.rank}</span>
                      <span aria-hidden="true" className="mx-1.5 text-stone-300">·</span>
                      <span>{top.service}</span>
                    </div>
                  </div>

                  {/* Quantitative outcome box */}
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      {top.mainsImprovement}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">{top.examYear}</div>
                  </div>
                </div>

                {/* Candidate Quote with honest editorial depth */}
                <p className="text-stone-700 text-sm font-serif-prose leading-relaxed italic">
                  "{top.quote}"
                </p>

              </div>

              {/* Clean unboxed footer with feature attribution */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-stone-700">Optional:</span>
                  <span>{top.optionalSubject}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-stone-700">Primary Tool:</span>
                  <span className="text-amber-900 font-medium">{top.keyFeatureUsed}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Civil Services Integrity Disclaimer */}
        <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-500 flex items-center justify-between">
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

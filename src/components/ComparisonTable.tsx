import React from 'react';
import { Check, X, Minus, HelpCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonRows = [
    {
      parameter: 'Mains Answer Feedback Turnaround',
      upscZone: 'Instant (Under 60 seconds)',
      traditionalCoaching: '14 to 25 days delay',
      unassisted: 'No external benchmark'
    },
    {
      parameter: 'Rubric & Dimension Granularity',
      upscZone: '5-factor official rubric + missing articles',
      traditionalCoaching: 'Vague 2-line subjective notes',
      unassisted: 'Personal guesswork'
    },
    {
      parameter: 'Annual Cost to Aspirant',
      upscZone: 'Democratized (₹0 free tier / ₹1,499 yr)',
      traditionalCoaching: '₹1,80,000 – ₹2,50,000 + Delhi rent',
      unassisted: 'Book costs only'
    },
    {
      parameter: 'Daily Editorial & PIB Synthesis',
      upscZone: 'Syllabus-tagged daily briefs at 06:00 AM',
      traditionalCoaching: 'Monthly bulky 150-page PDF compilations',
      unassisted: '3–4 hours manual newspaper reading'
    },
    {
      parameter: 'Prelims Elimination Training',
      upscZone: '12-year PYQ pattern & distractor recognition',
      traditionalCoaching: 'Standard rote test series with answer keys',
      unassisted: 'Unchecked trial and error'
    },
    {
      parameter: 'Flexibility for Working Aspirants',
      upscZone: '100% on-demand 24/7 web & mobile access',
      traditionalCoaching: 'Fixed rigid classroom or batch timings',
      unassisted: 'Isolated with zero accountability'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Transparent Comparison</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Why Aspirants Switch</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            How UPSC ZONE AI Compares with Traditional Preparation
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            Eliminate geographical boundaries, inflated coaching fees, and delayed feedback cycles.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg border border-stone-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-800">
                  <th className="py-4 px-5 font-semibold">Evaluation Criteria</th>
                  <th className="py-4 px-5 font-semibold text-amber-950 bg-amber-50/70 border-x border-amber-200/60">
                    UPSC ZONE AI
                  </th>
                  <th className="py-4 px-5 font-semibold text-stone-600">
                    Traditional Coaching Centers
                  </th>
                  <th className="py-4 px-5 font-semibold text-stone-600">
                    Unassisted Self-Study
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-stone-900">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-5 font-semibold text-amber-950 bg-amber-50/40 border-x border-amber-200/50">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{row.upscZone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-stone-600">
                      <div className="flex items-center gap-2">
                        <Minus className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{row.traditionalCoaching}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-stone-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-stone-300 shrink-0" />
                        <span>{row.unassisted}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

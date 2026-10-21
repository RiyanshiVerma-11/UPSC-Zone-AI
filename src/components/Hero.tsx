import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Clock, Target, Compass, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { TRUST_METRICS } from '../data/mockData';
import { WorkspaceTab } from './FeaturesOverview';

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onLaunchWorkspaceTool: (tab: WorkspaceTab) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToSection,
  onOpenAuth,
  onLaunchWorkspaceTool,
}) => {
  const [activeTab, setActiveTab] = useState<'mains' | 'prelims' | 'editorial'>('mains');

  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-stone-100/70 via-stone-50 to-stone-50 border-b border-stone-200">
      
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Sub-Header / Metadata - Clean unboxed text with typographic separators */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-4">
          <span>UPSC Civil Services Examination</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Prelims & Mains 2026</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Grounded in 12-Year PYQ Trends</span>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 leading-[1.12] tracking-tight [text-wrap:balance]">
              The Cognitive Command Center for Serious Civil Services Aspirants
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-serif-prose leading-relaxed max-w-2xl">
              Turn hundreds of study hours into marks on the merit list. UPSC ZONE AI delivers instant, 
              rubric-calibrated Mains answer evaluations, intelligent Prelims elimination analytics, and 
              daily editorial synthesis mapped straight to the GS syllabus.
            </p>

            {/* Value bullets - clean and unboxed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <span>Instant 5-factor Mains rubric evaluation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <span>2013–2024 PYQ elimination logic</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <span>The Hindu & PIB mapped to GS 1-4 papers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <span>Verified by top 100 rankers & state officers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onLaunchWorkspaceTool('mains')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Launch App & Start Practice</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollToSection('features')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Key Features</span>
              </button>
            </div>

            {/* Quiet trust badge */}
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-400" />
              <span>Zero-hallucination factual verification backed by Constitution articles & official commission keys.</span>
            </div>
          </div>

          {/* Right Column: Interactive UPSC Cockpit Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-stone-200/90 shadow-md overflow-hidden">
              
              {/* Cockpit Card Header with Interactive Segmented Controls */}
              <div className="px-4 py-3 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Live Aspirant Cockpit</span>
                </div>
                <span className="text-xs text-stone-400 font-mono">CSE 2026 Cycle</span>
              </div>

              {/* Segmented Filter Control */}
              <div className="p-2 bg-stone-100 border-b border-stone-200 flex gap-1">
                <button
                  onClick={() => setActiveTab('mains')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    activeTab === 'mains'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Mains Evaluator
                </button>
                <button
                  onClick={() => setActiveTab('prelims')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    activeTab === 'prelims'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  PYQ Eliminator
                </button>
                <button
                  onClick={() => setActiveTab('editorial')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    activeTab === 'editorial'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Daily Editorial
                </button>
              </div>

              {/* Interactive Cockpit Body */}
              <div className="p-5 space-y-4">
                {activeTab === 'mains' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span>GS-2 Governance</span>
                      <span className="font-mono tabular-nums text-emerald-800 font-semibold">Score: 10.5 / 15 (70%)</span>
                    </div>

                    <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-800">
                      <p className="font-semibold text-stone-900 mb-1">Q: 16th Finance Commission & Fiscal Federalism</p>
                      <p className="text-stone-600 font-serif-prose line-clamp-2">
                        "The Finance Commission, constituted under Article 280, serves as the constitutional arbiter balancing vertical devolution..."
                      </p>
                    </div>

                    {/* Rubric metrics */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-stone-600">
                        <span>Constitutional Citations (Art. 280, 275)</span>
                        <span className="font-medium text-emerald-700">Covered</span>
                      </div>
                      <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full w-[85%]" />
                      </div>

                      <div className="flex justify-between items-center text-stone-600 pt-1">
                        <span>Missing Dimension: Sarkaria Commission</span>
                        <span className="font-medium text-amber-800">+1.5 Marks Potential</span>
                      </div>
                      <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-600 h-full rounded-full w-[65%]" />
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-xs text-stone-500">Evaluation completed in 1.4s</span>
                      <button
                        onClick={() => onLaunchWorkspaceTool('mains')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in App</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'prelims' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span>Indian Polity · PYQ 2024</span>
                      <span className="text-amber-800 font-medium">Article 368 Amendment</span>
                    </div>

                    <p className="text-xs text-stone-800 font-medium">
                      "Which of the following requires prior recommendation of the President before introduction?"
                    </p>

                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded border border-red-200 bg-red-50/50 text-stone-700 flex items-center justify-between">
                        <span>1. Constitutional Amendment Bill</span>
                        <span className="text-red-700 font-medium text-[11px]">False (Eliminated)</span>
                      </div>
                      <div className="p-2 rounded border border-emerald-300 bg-emerald-50 text-stone-900 font-medium flex items-center justify-between">
                        <span>2. Money Bill & Art. 3 State Alteration</span>
                        <span className="text-emerald-800 font-semibold text-[11px]">Correct Option</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs text-stone-600">
                      <span className="font-semibold text-stone-800">Elimination Logic: </span>
                      Option 1 can be safely struck out, reducing 4 choices to 2 in under 15 seconds.
                    </div>

                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-xs text-stone-500">Source: M. Laxmikanth Ch. 10</span>
                      <button
                        onClick={() => onLaunchWorkspaceTool('prelims')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in App</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'editorial' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span>The Hindu Editorial Synthesis</span>
                      <span className="text-stone-700 font-mono">Today, 06:00 AM</span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        Inter-State River Water Disputes: Supreme Court invokes Article 131
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 font-serif-prose">
                        Apex Court calls for permanent mediation benches before formal tribunal setup to save cooperative federalism.
                      </p>
                    </div>

                    <div className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs space-y-1">
                      <div className="font-semibold text-stone-800">GS-2 Syllabus Linkage:</div>
                      <div className="text-stone-600">Functions and responsibilities of Union and States, Article 262 tribunal issues.</div>
                    </div>

                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-xs text-emerald-800 font-medium">3 Mains Points · 2 Prelims Facts</span>
                      <button
                        onClick={() => onLaunchWorkspaceTool('editorial')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in App</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar inside card */}
              <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
                <span>Free Trial: 5 Evaluations Daily</span>
                <span className="font-medium text-stone-800">No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Section (Claim-to-proof adjacency) */}
        <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-stone-700">
                {metric.label}
              </div>
              <div className="text-xs text-stone-500">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

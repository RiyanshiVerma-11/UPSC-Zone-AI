import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Clock,
  Target,
  Compass,
  Award,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  FileCheck,
  Flame,
  Star,
  Users,
} from 'lucide-react';
import { TRUST_METRICS, MAINS_QUESTIONS } from '../data/mockData';
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

  // Interactive Mains State
  const [selectedMainsIndex, setSelectedMainsIndex] = useState(0);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showRuledSheet, setShowRuledSheet] = useState(false);

  // Interactive Prelims State
  const [eliminatedStatement, setEliminatedStatement] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Interactive Audio Editorial State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');

  const handleRunEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
    }, 800);
  };

  const currentMains = MAINS_QUESTIONS[selectedMainsIndex];

  return (
    <section id="top" className="relative pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-gradient-to-b from-stone-100/80 via-stone-50 to-stone-50 border-b border-stone-200">
      
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Sub-Header / Pre-Title */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-4">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-950 font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>CSE 2026–2027</span>
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Constitutional Commission Standard</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Grounded in 12-Year PYQ Trends</span>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 leading-[1.12] tracking-tight [text-wrap:balance]">
              The Cognitive Command Center for Serious Civil Services Aspirants
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-serif-prose leading-relaxed max-w-2xl">
              Turn hundreds of study hours into marks on the final merit list. UPSC ZONE AI delivers instant, 
              rubric-calibrated Mains answer evaluations, intelligent Prelims elimination analytics, and 
              daily editorial synthesis mapped straight to the GS syllabus.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-stone-700">
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
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onLaunchWorkspaceTool('mains')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap group"
              >
                <span>Launch App & Start Practice</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onScrollToSection('features')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>Explore Key Features</span>
              </button>
            </div>

            {/* Social proof bar with aspirant avatars */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-600">
              <div className="flex items-center -space-x-2">
                <div className="w-7 h-7 rounded-full bg-stone-900 text-amber-200 border-2 border-white flex items-center justify-center font-bold text-[10px]">
                  AS
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-800 text-white border-2 border-white flex items-center justify-center font-bold text-[10px]">
                  KS
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white border-2 border-white flex items-center justify-center font-bold text-[10px]">
                  RP
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-700 text-stone-200 border-2 border-white flex items-center justify-center font-bold text-[10px]">
                  +14k
                </div>
              </div>
              <div>
                <span className="font-semibold text-stone-900">14,800+ Aspirants</span>
                <span className="text-stone-400 mx-1">·</span>
                <span className="text-stone-500">Old Rajinder Nagar, Mukherjee Nagar & across India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ultra-Interactive Cockpit Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-stone-300/80 shadow-xl overflow-hidden transition-all">
              
              {/* Cockpit Card Header */}
              <div className="px-4 py-3 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Live Aspirant Cockpit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono text-[11px] border border-amber-800">
                    238 Days to Prelims
                  </span>
                </div>
              </div>

              {/* Segmented Filter Control */}
              <div className="p-2 bg-stone-100 border-b border-stone-200 flex gap-1">
                <button
                  onClick={() => setActiveTab('mains')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'mains'
                      ? 'bg-white text-stone-900 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Mains Evaluator
                </button>
                <button
                  onClick={() => setActiveTab('prelims')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'prelims'
                      ? 'bg-white text-stone-900 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  PYQ Eliminator
                </button>
                <button
                  onClick={() => setActiveTab('editorial')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'editorial'
                      ? 'bg-white text-stone-900 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Daily Editorial
                </button>
              </div>

              {/* Interactive Cockpit Body */}
              <div className="p-4 sm:p-5 space-y-4 min-h-[380px] flex flex-col justify-between">
                
                {/* 1. MAINS TAB */}
                {activeTab === 'mains' && (
                  <div className="space-y-3.5">
                    {/* Question Switcher Pills */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex gap-1.5">
                        {MAINS_QUESTIONS.map((q, idx) => (
                          <button
                            key={q.id}
                            onClick={() => setSelectedMainsIndex(idx)}
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                              selectedMainsIndex === idx
                                ? 'bg-amber-900 text-white'
                                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                            }`}
                          >
                            {q.paper}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowRuledSheet(!showRuledSheet)}
                        className="text-[11px] font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer flex items-center gap-1"
                      >
                        <FileCheck className="w-3 h-3 text-amber-800" />
                        <span>{showRuledSheet ? 'Standard View' : 'Ruled Sheet View'}</span>
                      </button>
                    </div>

                    {/* Question Banner */}
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs">
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                        <span className="font-semibold text-amber-900">{currentMains.context}</span>
                        <span className="font-mono font-bold text-stone-700">{currentMains.marks} Marks ({currentMains.wordLimit} Words)</span>
                      </div>
                      <p className="font-bold text-stone-900 text-xs line-clamp-2">
                        {currentMains.question}
                      </p>
                    </div>

                    {/* Answer Preview: Standard vs Ruled Sheet */}
                    {showRuledSheet ? (
                      <div className="p-3 bg-amber-50/40 border border-stone-300 rounded-md text-xs relative overflow-hidden font-serif-prose">
                        <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-red-400" />
                        <div className="absolute top-0 bottom-0 right-6 w-[1px] bg-red-400" />
                        <div className="text-[10px] text-red-500 font-sans uppercase tracking-widest text-center mb-1">
                          Official UPSC Answer Booklet Simulation
                        </div>
                        <div className="pl-6 pr-6 text-stone-800 text-[11px] leading-relaxed line-clamp-3">
                          {currentMains.sampleAnswer}
                        </div>
                        <div className="mt-2 text-[10px] text-amber-900 bg-amber-100/70 p-1.5 rounded border border-amber-300">
                          <strong>Red-Ink Examiner Note: </strong>
                          {currentMains.evaluation.strengths[0]}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-stone-600">5-Point Rubric Score:</span>
                          <span className="font-mono tabular-nums text-emerald-800 font-bold">
                            {currentMains.evaluation.score} / {currentMains.evaluation.maxScore} ({currentMains.evaluation.percentage}%)
                          </span>
                        </div>

                        {/* Animated Rubric Bars */}
                        <div className="space-y-1.5 text-[11px]">
                          <div>
                            <div className="flex justify-between text-stone-600 mb-0.5">
                              <span>Constitutional & Commission Anchors</span>
                              <span className="font-medium text-emerald-700">Covered</span>
                            </div>
                            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-emerald-600 h-full rounded-full w-[85%]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-stone-600 mb-0.5">
                              <span>Missing Dimension Optimization</span>
                              <span className="font-medium text-amber-800">+1.5 Marks Potential</span>
                            </div>
                            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-amber-600 h-full rounded-full w-[65%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100">
                      <button
                        onClick={handleRunEvaluation}
                        disabled={isEvaluating}
                        className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        {isEvaluating ? (
                          <>
                            <div className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                            <span>Scoring Rubric...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>Run AI Evaluation</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onLaunchWorkspaceTool('mains')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in Workspace</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. PRELIMS TAB */}
                {activeTab === 'prelims' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-amber-900">UPSC Prelims PYQ 2024 · Polity</span>
                      <span className="font-mono text-emerald-700 font-bold">+2.00 / -0.66</span>
                    </div>

                    <p className="text-xs text-stone-900 font-semibold leading-snug">
                      "Which of the following requires the prior recommendation of the President of India?"
                    </p>

                    {/* Interactive statements */}
                    <div className="space-y-1.5 text-xs">
                      <div
                        onClick={() => setEliminatedStatement(1)}
                        className={`p-2 rounded border cursor-pointer transition-all ${
                          eliminatedStatement === 1
                            ? 'bg-red-50 border-red-300 line-through text-stone-400'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>1. Constitutional Amendment Bill (Art. 368)</span>
                          <span className="text-[10px] text-red-600 font-mono">
                            {eliminatedStatement === 1 ? 'Eliminated ✕' : 'Click to strike'}
                          </span>
                        </div>
                      </div>

                      <div
                        onClick={() => setSelectedOption('B')}
                        className={`p-2 rounded border cursor-pointer transition-all ${
                          selectedOption === 'B'
                            ? 'bg-emerald-50 border-emerald-400 text-stone-900 font-medium'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>2. Money Bill (Art. 110) & State Alteration (Art. 3)</span>
                          <span className="text-[10px] text-emerald-700 font-bold">
                            {selectedOption === 'B' ? '✓ Correct Answer' : 'Select option'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-amber-50 rounded border border-amber-200 text-[11px] text-stone-700">
                      <span className="font-bold text-amber-950">Elimination Logic: </span>
                      Art. 368 requires NO presidential sanction. Striking Statement 1 eliminates 3 choices in 10s.
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-[11px] text-stone-500">M. Laxmikanth Ch. 10</span>
                      <button
                        onClick={() => onLaunchWorkspaceTool('prelims')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open 12-Year PYQ Engine</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. DAILY EDITORIAL TAB */}
                {activeTab === 'editorial' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-amber-900">The Hindu & PIB Synthesis</span>
                      <span className="text-stone-600 font-mono">Today, 06:00 AM</span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-snug">
                        Inter-State River Water Disputes: Supreme Court Invokes Article 131
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-1 font-serif-prose">
                        Apex Court calls for permanent mediation benches before formal tribunal setup to preserve cooperative federalism.
                      </p>
                    </div>

                    {/* Interactive 5-Min Commuter Audio Player with Waveform */}
                    <div className="p-3 bg-stone-900 text-stone-100 rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold flex items-center gap-1.5 text-amber-300">
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>5-Min Audio Brief</span>
                        </span>
                        <div className="flex items-center gap-1">
                          {(['1x', '1.25x', '1.5x'] as const).map((spd) => (
                            <button
                              key={spd}
                              onClick={() => setAudioSpeed(spd)}
                              className={`px-1.5 py-0.5 rounded text-[10px] font-mono cursor-pointer ${
                                audioSpeed === spd ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                              }`}
                            >
                              {spd}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Equalizer animation */}
                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center cursor-pointer shrink-0 transition-colors shadow-sm"
                        >
                          {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                        </button>

                        <div className="flex-1 flex items-center gap-1 h-6">
                          {[40, 70, 30, 90, 60, 80, 50, 95, 45, 75, 35, 85, 55, 65, 40, 80, 50].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-full transition-all duration-200 ${
                                isPlayingAudio ? 'bg-amber-400' : 'bg-stone-700'
                              }`}
                              style={{ height: isPlayingAudio ? `${Math.max(20, (h * ((i % 3) + 1)) % 100)}%` : '25%' }}
                            />
                          ))}
                        </div>

                        <span className="text-[10px] font-mono text-stone-400 shrink-0">
                          {isPlayingAudio ? '01:42' : '05:00'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-[11px] text-emerald-800 font-semibold">GS-2 Syllabus Linkage</span>
                      <button
                        onClick={() => onLaunchWorkspaceTool('editorial')}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Daily Brief</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom bar inside card */}
              <div className="px-4 py-2 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
                <span>Free Tier: 5 Evaluations Daily</span>
                <span className="font-semibold text-stone-800">No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Section */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
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

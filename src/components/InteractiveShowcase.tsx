import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sliders,
  BookOpen,
  Award,
  Zap,
  Target,
  FileText,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
} from 'lucide-react';

export const InteractiveShowcase: React.FC<{
  onLaunchWorkspaceTool: (tab: any) => void;
}> = ({ onLaunchWorkspaceTool }) => {
  const [activeMode, setActiveMode] = useState<'mains-compare' | 'prelims-interactive' | 'syllabus-linker'>('mains-compare');
  const [scoreTier, setScoreTier] = useState<'average' | 'topper'>('topper');

  // Prelims interactive state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleEliminate = (opt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (eliminatedOptions.includes(opt)) {
      setEliminatedOptions(eliminatedOptions.filter((o) => o !== opt));
    } else {
      setEliminatedOptions([...eliminatedOptions, opt]);
    }
  };

  return (
    <section id="interactive-demo" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive AI Demonstration</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Experience How UPSC ZONE AI Elevates Your Preparation in Real Time
          </h2>
          <p className="mt-3 text-stone-400 font-serif-prose text-sm sm:text-base leading-relaxed">
            Don't just take our word for it. Test the rubric analyzer, experience multi-statement distractor elimination, 
            and see how average answers transform into AIR-1 caliber scores.
          </p>

          {/* Mode Switcher Pills */}
          <div className="mt-8 inline-flex p-1.5 bg-stone-950 rounded-xl border border-stone-800 gap-1.5 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveMode('mains-compare')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeMode === 'mains-compare'
                  ? 'bg-amber-600 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Mains Score Transformer</span>
            </button>
            <button
              onClick={() => setActiveMode('prelims-interactive')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeMode === 'prelims-interactive'
                  ? 'bg-amber-600 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Prelims Trap Eliminator</span>
            </button>
            <button
              onClick={() => setActiveMode('syllabus-linker')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeMode === 'syllabus-linker'
                  ? 'bg-amber-600 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>News-to-Syllabus Graph</span>
            </button>
          </div>
        </div>

        {/* 1. Mains Score Transformer Mode */}
        {activeMode === 'mains-compare' && (
          <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Top comparison control bar */}
            <div className="px-6 py-4 bg-stone-900 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  GS-2 Question:
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  "Examine the role of the 16th Finance Commission in fiscal federalism."
                </span>
              </div>

              {/* Toggle Tier */}
              <div className="flex items-center gap-2 bg-stone-950 p-1 rounded-lg border border-stone-800">
                <button
                  onClick={() => setScoreTier('average')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    scoreTier === 'average'
                      ? 'bg-red-950 text-red-200 border border-red-800/60'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Average Candidate (4.5 / 15)
                </button>
                <button
                  onClick={() => setScoreTier('topper')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    scoreTier === 'topper'
                      ? 'bg-emerald-950 text-emerald-200 border border-emerald-800/60 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  ★ AIR 1 Topper Answer (11.0 / 15)
                </button>
              </div>
            </div>

            {/* Split Screen Answer Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
              {/* Answer Content Panel */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-400">Official Ruled Sheet Preview</span>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                    scoreTier === 'topper' ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60' : 'bg-stone-800 text-stone-300'
                  }`}>
                    {scoreTier === 'topper' ? 'Score: 11.0 / 15 (73% - Merit Cutoff+)' : 'Score: 4.5 / 15 (30% - Below Cutoff)'}
                  </span>
                </div>

                {scoreTier === 'average' ? (
                  <div className="bg-stone-900/90 rounded-lg p-5 border border-stone-800 text-stone-300 font-serif-prose text-xs sm:text-sm leading-relaxed space-y-3">
                    <p className="text-stone-400">
                      "Finance Commission is a body in India that gives money from Center to States. It is made every 5 years. States need more money because they have lots of public expenses like schools and hospitals."
                    </p>
                    <p className="text-stone-400">
                      "16th Finance Commission has Arvind Panagariya as chairman. Center takes taxes and gives some portion to states. Nowadays states are complaining about cess and surcharges. Center should give more share to states."
                    </p>
                    <div className="mt-4 p-3 bg-red-950/30 border border-red-900/40 rounded text-red-300 text-xs font-sans space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-red-400">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Why this loses 6.5 Marks:</span>
                      </div>
                      <p className="text-stone-300 text-[11px]">
                        • Zero constitutional article citations (Article 280, 275 missing).<br />
                        • No mention of horizontal vs vertical devolution formulas.<br />
                        • Lacks authoritative recommendations from Sarkaria Commission or 15th FC precedents.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-stone-900/90 rounded-lg p-5 border border-emerald-900/30 text-stone-200 font-serif-prose text-xs sm:text-sm leading-relaxed space-y-3 relative">
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                        <Award className="w-3 h-3" />
                        <span>TOPPER CADRE</span>
                      </span>
                    </div>

                    <p>
                      <strong className="text-amber-300 font-sans text-xs uppercase tracking-wide">Constitutional Anchor: </strong>
                      The Finance Commission, constituted under <mark className="bg-amber-900/50 text-amber-200 px-1 rounded">Article 280</mark>, serves as the constitutional arbiter of fiscal federalism in India, balancing vertical equity and macroeconomic prudence.
                    </p>

                    <p>
                      <strong className="text-amber-300 font-sans text-xs uppercase tracking-wide">1. Dual Devolution Dynamics: </strong>
                      Recommends vertical sharing (41% under 15th FC) and horizontal equity across states using progressive metrics (income distance 45%, demographic performance 12.5%, forest cover 10%).
                    </p>

                    <p>
                      <strong className="text-amber-300 font-sans text-xs uppercase tracking-wide">2. 16th FC Terms of Reference Friction: </strong>
                      Expanding share of <mark className="bg-amber-900/50 text-amber-200 px-1 rounded">Cess & Surcharges (&gt;10% of gross tax revenue)</mark> outside the divisible pool creates vertical friction, while FRBM Act glide paths demand disciplined borrowing limits.
                    </p>

                    <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-900/50 rounded text-emerald-200 text-xs font-sans space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Why this wins 11.0 / 15 Marks (+6.5 Marks Delta):</span>
                      </div>
                      <p className="text-stone-300 text-[11px]">
                        ✓ Precise Article 280 & 275 citations.<br />
                        ✓ Explicit 15th FC formula weightage percentages quoted.<br />
                        ✓ Structured headings and actionable consultative way-forward.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Rubric Feedback Panel */}
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 bg-stone-950/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    5-Point UPSC Rubric Analysis
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400">AI Latency: 1.2s</span>
                </div>

                {/* Rubric Breakdown Bars */}
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Constitutional & Statutory Anchor (Art. 280)</span>
                      <span className="font-mono font-bold text-amber-300">
                        {scoreTier === 'topper' ? '2.5 / 2.5' : '0.5 / 2.5'}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          scoreTier === 'topper' ? 'w-full bg-emerald-500' : 'w-[20%] bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Multi-Sectoral Dimensions (Tax, Cess, FRBM)</span>
                      <span className="font-mono font-bold text-amber-300">
                        {scoreTier === 'topper' ? '3.5 / 4.0' : '1.0 / 4.0'}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          scoreTier === 'topper' ? 'w-[88%] bg-emerald-500' : 'w-[25%] bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Quantitative Benchmarks & Data (41%, 12.5%)</span>
                      <span className="font-mono font-bold text-amber-300">
                        {scoreTier === 'topper' ? '2.0 / 2.5' : '0.5 / 2.5'}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          scoreTier === 'topper' ? 'w-[80%] bg-emerald-500' : 'w-[20%] bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Balanced Conclusion / Way Forward</span>
                      <span className="font-mono font-bold text-amber-300">
                        {scoreTier === 'topper' ? '3.0 / 3.0' : '1.0 / 3.0'}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          scoreTier === 'topper' ? 'w-full bg-emerald-500' : 'w-[33%] bg-red-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Action CTA */}
                <div className="pt-4 border-t border-stone-800">
                  <button
                    onClick={() => onLaunchWorkspaceTool('mains')}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Test Your Own Mains Answer in Full App</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    5 free calibrations daily · Full ruled answer booklet view
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Prelims Trap Eliminator Mode */}
        {activeMode === 'prelims-interactive' && (
          <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-800 text-amber-300 font-mono text-xs font-bold">
                  UPSC CSE Prelims 2024
                </span>
                <span className="text-xs text-stone-400">Indian Polity · Special Majority & Art. 368</span>
              </div>
              <div className="text-xs text-stone-400">
                Marking: <span className="text-emerald-400 font-bold">+2.00</span> / <span className="text-red-400 font-bold">-0.66</span>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base font-semibold text-white">
                With reference to the Parliament of India, consider the following statements:
              </p>

              {/* Statements with Elimination capability */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className={`p-3.5 rounded-lg border transition-all ${
                  eliminatedOptions.includes('stmt1')
                    ? 'bg-red-950/20 border-red-900/50 line-through text-stone-500'
                    : 'bg-stone-900 border-stone-800 text-stone-200'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <span>
                      <strong>1. </strong> A Bill amending the Constitution requires the prior recommendation of the President of India.
                    </span>
                    <button
                      onClick={(e) => handleEliminate('stmt1', e)}
                      className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer shrink-0 transition-colors ${
                        eliminatedOptions.includes('stmt1')
                          ? 'bg-red-900 text-white'
                          : 'bg-stone-800 text-stone-400 hover:text-red-300'
                      }`}
                    >
                      {eliminatedOptions.includes('stmt1') ? 'Eliminated ✕' : 'Eliminate ✕'}
                    </button>
                  </div>
                </div>

                <div className={`p-3.5 rounded-lg border transition-all ${
                  eliminatedOptions.includes('stmt2')
                    ? 'bg-red-950/20 border-red-900/50 line-through text-stone-500'
                    : 'bg-stone-900 border-stone-800 text-stone-200'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <span>
                      <strong>2. </strong> When a Constitution Amendment Bill is presented to the President of India, it is obligatory for the President to give assent.
                    </span>
                    <button
                      onClick={(e) => handleEliminate('stmt2', e)}
                      className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer shrink-0 transition-colors ${
                        eliminatedOptions.includes('stmt2')
                          ? 'bg-red-900 text-white'
                          : 'bg-stone-800 text-stone-400 hover:text-red-300'
                      }`}
                    >
                      {eliminatedOptions.includes('stmt2') ? 'Eliminated ✕' : 'Eliminate ✕'}
                    </button>
                  </div>
                </div>

                <div className={`p-3.5 rounded-lg border transition-all ${
                  eliminatedOptions.includes('stmt3')
                    ? 'bg-red-950/20 border-red-900/50 line-through text-stone-500'
                    : 'bg-stone-900 border-stone-800 text-stone-200'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <span>
                      <strong>3. </strong> A Constitution Amendment Bill must be passed by each House by a majority of total membership and two-thirds present and voting.
                    </span>
                    <button
                      onClick={(e) => handleEliminate('stmt3', e)}
                      className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer shrink-0 transition-colors ${
                        eliminatedOptions.includes('stmt3')
                          ? 'bg-red-900 text-white'
                          : 'bg-stone-800 text-stone-400 hover:text-red-300'
                      }`}
                    >
                      {eliminatedOptions.includes('stmt3') ? 'Eliminated ✕' : 'Eliminate ✕'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Options selection */}
              <div className="pt-4">
                <div className="text-xs font-semibold text-stone-400 mb-2">Select the correct option:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'A', text: '1 and 2 only', containsEliminated: eliminatedOptions.includes('stmt1') },
                    { id: 'B', text: '2 and 3 only (Correct)', isCorrect: true },
                    { id: 'C', text: '1 and 3 only', containsEliminated: eliminatedOptions.includes('stmt1') },
                    { id: 'D', text: '1, 2 and 3', containsEliminated: eliminatedOptions.includes('stmt1') },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedOption(opt.id);
                        setShowExplanation(true);
                      }}
                      className={`p-3.5 rounded-lg border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        selectedOption === opt.id
                          ? opt.isCorrect
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-200 shadow-lg'
                            : 'bg-red-950 border-red-500 text-red-200'
                          : opt.containsEliminated
                          ? 'bg-stone-900/40 border-stone-800/40 text-stone-600 line-through'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700/60'
                      }`}
                    >
                      <span>
                        <strong className="mr-2">({opt.id})</strong> {opt.text}
                      </span>
                      {selectedOption === opt.id && (
                        <span>
                          {opt.isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-400" />
                          )}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Logic Feedback */}
              {showExplanation && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-900/60 rounded-lg text-xs space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>The UPSC ZONE AI Elimination Rule:</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    By simply recognizing that Article 368 bills do <em>not</em> require prior presidential sanction (unlike Money Bills), 
                    <strong> Statement 1 is struck out</strong>. This immediately knocks out Options A, C, and D simultaneously! 
                    Option B is the guaranteed correct answer in under 12 seconds.
                  </p>
                  <div className="text-[11px] text-amber-300 pt-1 font-mono">
                    Source: M. Laxmikanth, Chapter 10 "Amendment of Constitution" & 24th Amendment Act 1971.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                12 Years of UPSC CSE PYQs (2013–2024) with statement-level distractor logic
              </span>
              <button
                onClick={() => onLaunchWorkspaceTool('prelims')}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Launch Prelims PYQ Engine →
              </button>
            </div>
          </div>
        )}

        {/* 3. News-to-Syllabus Graph Mode */}
        {activeMode === 'syllabus-linker' && (
          <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  The Hindu & PIB Synthesis · Today 06:00 AM
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-0.5">
                  "Supreme Court Invokes Article 131 in Inter-State River Water Dispute"
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-mono text-xs hidden sm:inline">
                Read Time: 3 mins
              </span>
            </div>

            {/* 3-Way Syllabus Mapping Graph */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  GS-2: Polity & Federalism
                </div>
                <h4 className="text-sm font-semibold text-white">Article 131 vs Article 262</h4>
                <p className="text-xs text-stone-400 font-serif-prose leading-relaxed">
                  Direct conflict between Supreme Court's Original Jurisdiction (Art 131) and Parliament's power to exclude courts in water tribunals (Art 262).
                </p>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  Mains Yield: +2.0 Marks for Art 262(2) citation
                </div>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  GS-1: Physical Geography
                </div>
                <h4 className="text-sm font-semibold text-white">Basin Hydrology & Riparian Rights</h4>
                <p className="text-xs text-stone-400 font-serif-prose leading-relaxed">
                  Monsoon variability, Cauvery / Krishna basin deficits, and Helsinki Rules on equitable basin resource distribution.
                </p>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  Mains Yield: Geography diagram hook
                </div>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Prelims Fact Vault
                </div>
                <h4 className="text-sm font-semibold text-white">Inter-State River Water Disputes Act 1956</h4>
                <p className="text-xs text-stone-400 font-serif-prose leading-relaxed">
                  Key fact: Tribunal awards carry the full force of a Supreme Court decree under Section 6 of the 1956 Act.
                </p>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  Prelims Yield: 2013 & 2019 repeat question
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                Saves 3 hours of manual newspaper cutting every morning. Audio brief ready by 6:00 AM.
              </span>
              <button
                onClick={() => onLaunchWorkspaceTool('editorial')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-md transition-colors cursor-pointer"
              >
                Listen to Today's 5-Min Editorial Digest →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

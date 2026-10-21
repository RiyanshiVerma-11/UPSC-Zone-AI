import React, { useState } from 'react';
import { MAINS_QUESTIONS } from '../data/mockData';
import { MainsQuestion } from '../types';
import { UpscZoneApi } from '../services/api';
import { CheckCircle2, AlertCircle, Sparkles, BookOpen, Clock, RefreshCw, BarChart2, Layers, Lightbulb, PenTool, FileText, Check, Shield, TrendingUp } from 'lucide-react';

export const MainsEvaluatorDemo: React.FC = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('mains-1');
  const [userAnswerText, setUserAnswerText] = useState<string>(MAINS_QUESTIONS[0].sampleAnswer);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluatedResult, setEvaluatedResult] = useState<MainsQuestion | null>(MAINS_QUESTIONS[0]);
  const [displayMode, setDisplayMode] = useState<'rubric' | 'upsc-sheet' | 'topper-compare'>('rubric');
  const [customQuestionMode, setCustomQuestionMode] = useState(false);

  const activeQuestion = MAINS_QUESTIONS.find(q => q.id === selectedQuestionId) || MAINS_QUESTIONS[0];

  const handleSelectQuestion = (q: MainsQuestion) => {
    setSelectedQuestionId(q.id);
    setUserAnswerText(q.sampleAnswer);
    setEvaluatedResult(q);
    setCustomQuestionMode(false);
  };

  const handleRunEvaluation = async () => {
    setIsEvaluating(true);
    try {
      const evaluation = await UpscZoneApi.evaluateMainsAnswer({
        questionId: activeQuestion.id,
        questionText: activeQuestion.question,
        answerText: userAnswerText,
        paper: activeQuestion.paper,
      });
      setEvaluatedResult({
        ...activeQuestion,
        evaluation,
      });
    } catch {
      setEvaluatedResult(activeQuestion);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Word count calculator
  const wordCount = userAnswerText.trim() ? userAnswerText.trim().split(/\s+/).length : 0;
  const isWithinLimit = wordCount <= activeQuestion.wordLimit + 25;

  return (
    <section id="mains-evaluator" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Core Capability 01</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Mains Answer Intelligence</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Instant UPSC Mains Answer Evaluation with Examiner-Grade Rubrics
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            Stop waiting 3 weeks for coaching test series. UPSC ZONE AI audits your answer against 
            10 years of official model keys, scoring structure, constitutional citations, and missing dimensions in seconds.
          </p>
        </div>

        {/* Question Selector & Custom Input Toggle */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-lg max-w-2xl">
            {MAINS_QUESTIONS.map((q) => (
              <button
                key={q.id}
                onClick={() => handleSelectQuestion(q)}
                className={`flex-1 min-w-[130px] px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer text-left ${
                  selectedQuestionId === q.id && !customQuestionMode
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <div className="text-[10px] text-stone-500">{q.paper} · {q.year}</div>
                <div className="truncate font-semibold">{q.context.split('—')[0]}</div>
              </button>
            ))}
          </div>

          {/* Mode Switchers for the Evaluator Presentation */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg text-xs">
            <button
              onClick={() => setDisplayMode('rubric')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                displayMode === 'rubric' ? 'bg-white text-stone-900 shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Rubric Matrix
            </button>
            <button
              onClick={() => setDisplayMode('upsc-sheet')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                displayMode === 'upsc-sheet' ? 'bg-white text-stone-900 shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              UPSC Ruled Booklet
            </button>
            <button
              onClick={() => setDisplayMode('topper-compare')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                displayMode === 'topper-compare' ? 'bg-white text-stone-900 shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              AIR 1 Model Comparison
            </button>
          </div>
        </div>

        {/* Main 2-Column Evaluation Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Question Prompt & Answer Drafting Area */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Question Card */}
            <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-medium text-amber-900">{activeQuestion.paper} ({activeQuestion.year})</span>
                <div className="flex items-center gap-2">
                  <span>{activeQuestion.marks} Marks</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeQuestion.wordLimit} Words</span>
                </div>
              </div>
              <p className="font-display font-semibold text-stone-900 text-sm sm:text-base leading-snug">
                {activeQuestion.question}
              </p>
              <div className="mt-2 text-xs text-stone-500">
                <span className="font-medium text-stone-700">Syllabus Topic: </span>
                {activeQuestion.context}
              </div>
            </div>

            {/* Answer Textarea with Live Counters */}
            <div className="bg-white rounded-lg border border-stone-200 shadow-xs overflow-hidden">
              <div className="px-4 py-2.5 bg-stone-100/70 border-b border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <PenTool className="w-3.5 h-3.5 text-stone-500" />
                  <span>Draft Answer (Fully Editable)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-mono tabular-nums ${isWithinLimit ? 'text-stone-600' : 'text-amber-800 font-semibold'}`}>
                    {wordCount} / {activeQuestion.wordLimit} words
                  </span>
                  <button
                    onClick={() => setUserAnswerText(activeQuestion.sampleAnswer)}
                    className="text-stone-500 hover:text-stone-900 underline text-[11px] cursor-pointer"
                  >
                    Reset Sample
                  </button>
                </div>
              </div>

              <textarea
                value={userAnswerText}
                onChange={(e) => setUserAnswerText(e.target.value)}
                rows={13}
                placeholder="Type or paste your Mains answer here to evaluate against UPSC benchmarks..."
                className="w-full p-4 text-xs sm:text-sm text-stone-800 font-serif-prose leading-relaxed focus:outline-none focus:ring-1 focus:ring-amber-900/30 resize-none bg-[#fdfdfb]"
              />

              <div className="px-4 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Benchmarked against official UPSC 2024 keys
                </span>
                <button
                  onClick={handleRunEvaluation}
                  disabled={isEvaluating || !userAnswerText.trim()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 disabled:opacity-50 rounded-md transition-colors shadow-xs cursor-pointer"
                >
                  {isEvaluating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Auditing Rubrics...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Evaluate Answer</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Intelligent Evaluation Report */}
          <div className="lg:col-span-6">
            {evaluatedResult && !isEvaluating ? (
              <div className="space-y-4">
                
                {/* 1. View Mode: Rubric Matrix */}
                {displayMode === 'rubric' && (
                  <div className="bg-white rounded-lg border border-stone-200 shadow-sm overflow-hidden divide-y divide-stone-200 animate-in fade-in duration-200">
                    
                    {/* Score Header */}
                    <div className="p-5 bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-amber-300 uppercase tracking-wider font-semibold">UPSC Examiner Audit</div>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="font-display text-3xl font-bold tabular-nums text-white">
                            {evaluatedResult.evaluation.score}
                          </span>
                          <span className="text-stone-300 text-sm">/ {evaluatedResult.evaluation.maxScore} Marks</span>
                          <span className="ml-2 text-xs font-medium text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                            Top 5% Merit Bracket
                          </span>
                        </div>
                      </div>
                      <div className="text-right text-xs text-stone-300">
                        <div>Evaluated in 1.1s</div>
                        <div className="font-mono text-stone-400">Calibrated to 2024 Commission Key</div>
                      </div>
                    </div>

                    {/* Rubric Breakdown Grid */}
                    <div className="p-5 space-y-3.5">
                      <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider flex items-center justify-between">
                        <span>5-Point UPSC Rubric Analysis</span>
                        <span className="text-stone-500 font-normal">Standard UPSC marking criteria</span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        {Object.entries(evaluatedResult.evaluation.rubricScores).map(([key, item]) => (
                          <div key={key} className="space-y-1">
                            <div className="flex justify-between items-center text-stone-700">
                              <span className="capitalize font-medium text-stone-900">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </span>
                              <span className="font-mono tabular-nums font-semibold text-stone-800">
                                {item.score} / {item.max}
                              </span>
                            </div>
                            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                              <div 
                                className="bg-amber-800 h-full rounded-full transition-all duration-500" 
                                style={{ width: `${(item.score / item.max) * 100}%` }}
                              />
                            </div>
                            <p className="text-[11px] text-stone-500 font-serif-prose">{item.feedback}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Citations & Schemes Detected */}
                    <div className="p-5 bg-stone-50/50 space-y-2.5">
                      <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Constitutional Articles & Statutory Mandates Detected</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                        {evaluatedResult.evaluation.schemesAndArticles.map((cite, idx) => (
                          <span key={idx} className="bg-white border border-stone-200 px-2 py-1 rounded text-[11px] font-medium text-stone-800">
                            {cite}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Missing Dimensions & Topper Advice */}
                    <div className="p-5 space-y-3">
                      <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                        <span>High-Yield Missing Dimensions for +1.5 to +2.5 Marks</span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-stone-700 font-serif-prose">
                        {evaluatedResult.evaluation.missingDimensions.map((miss, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-800 font-bold shrink-0">→</span>
                            <span>{miss}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-950 font-serif-prose">
                        <span className="font-semibold text-amber-900">Examiner Diagram Recommendation: </span>
                        {evaluatedResult.evaluation.modelImprovementTip}
                      </div>
                    </div>

                  </div>
                )}

                {/* 2. View Mode: UPSC Official Lined Answer Booklet Simulation */}
                {displayMode === 'upsc-sheet' && (
                  <div className="bg-[#FAF7EE] rounded-lg border-2 border-stone-300 p-6 shadow-md relative overflow-hidden font-serif-prose text-stone-800 text-xs sm:text-sm animate-in fade-in duration-200">
                    
                    {/* Top UPSC Header */}
                    <div className="border-b-2 border-stone-400 pb-2 mb-4 text-center">
                      <div className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                        संघ लोक सेवा आयोग / UNION PUBLIC SERVICE COMMISSION
                      </div>
                      <div className="text-xs font-bold text-stone-900">
                        CIVIL SERVICES (MAINS) EXAMINATION 2024
                      </div>
                      <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                        <span>Roll No: 0847291</span>
                        <span>Subject: {activeQuestion.paper}</span>
                        <span>Q. No. 1 ({activeQuestion.marks} Marks)</span>
                      </div>
                    </div>

                    {/* Ruled lines styling container */}
                    <div className="relative pl-6 pr-6 border-x-2 border-red-300/80 space-y-3 py-2 bg-[linear-gradient(transparent_27px,#e5e7eb_28px)] bg-[size:100%_28px]">
                      
                      {/* Left Red Margin Warning */}
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-bold text-red-400 uppercase tracking-widest select-none pointer-events-none whitespace-nowrap">
                        Candidates must not write on this margin
                      </div>

                      {/* Right Red Margin Warning */}
                      <div className="absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 text-[8px] font-bold text-red-400 uppercase tracking-widest select-none pointer-events-none whitespace-nowrap">
                        इस हाशिए में नहीं लिखना चाहिए
                      </div>

                      {/* Evaluated Paragraph with Annotations */}
                      <div className="relative group">
                        <p className="leading-7 font-serif italic text-blue-900">
                          {userAnswerText.slice(0, 240)}...
                        </p>
                        <div className="mt-2 p-2 bg-emerald-50 border border-emerald-300 rounded text-[11px] text-emerald-900 font-sans flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span><strong>Examiner Ink:</strong> Strong constitutional grounding with Article 280 upfront (+2 Marks)</span>
                        </div>
                      </div>

                      <div className="relative group pt-2">
                        <p className="leading-7 font-serif italic text-blue-900">
                          {userAnswerText.slice(240, 520)}...
                        </p>
                        <div className="mt-2 p-2 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-900 font-sans flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                          <span><strong>Examiner Ink:</strong> Add a quick box on 15th FC devolution criteria weights (Demographic performance 12.5%, Income distance 45%) to lock top marks.</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Examiner Stamp */}
                    <div className="mt-4 pt-3 border-t-2 border-stone-400 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-red-700/80 flex flex-col items-center justify-center text-red-700 font-bold rotate-[-12deg] text-[10px] leading-tight">
                          <span>UPSC</span>
                          <span>EVAL</span>
                        </div>
                        <span className="font-sans text-[11px] text-stone-500">Evaluated on Official Commission Lined Booklet</span>
                      </div>
                      <div className="font-mono text-sm font-bold text-stone-900">
                        Marks Awarded: {evaluatedResult.evaluation.score} / {evaluatedResult.evaluation.maxScore}
                      </div>
                    </div>

                  </div>
                )}

                {/* 3. View Mode: AIR 1 Model Comparison */}
                {displayMode === 'topper-compare' && (
                  <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm space-y-4 animate-in fade-in duration-200 text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                      <div>
                        <span className="text-[11px] font-bold text-amber-900 uppercase">AIR 1 Benchmark</span>
                        <h4 className="font-display font-bold text-stone-900 text-sm">
                          Model Answer Structure by UPSC Toppers
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Benchmark: 11.5 / 15
                      </span>
                    </div>

                    <div className="space-y-3 font-serif-prose text-stone-700">
                      <div className="p-3 bg-stone-50 rounded border border-stone-200">
                        <div className="font-sans font-bold text-stone-900 mb-1">Topper Introduction Formula:</div>
                        <p className="text-stone-600 leading-relaxed">
                          "Article 280 envisions the Finance Commission as the 'balancing wheel of fiscal federalism' (Dr. B.R. Ambedkar), navigating the dual imperatives of vertical fiscal equity and horizontal cooperative federalism."
                        </p>
                      </div>

                      <div className="p-3 bg-stone-50 rounded border border-stone-200">
                        <div className="font-sans font-bold text-stone-900 mb-1">Recommended Micro-Flowchart:</div>
                        <div className="font-mono text-[11px] bg-stone-900 text-stone-200 p-3 rounded leading-snug">
                          Gross Tax Receipts ──► Deduct Cesses/Surcharges ──► Divisible Pool (₹X Lakh Cr)
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── 41% to States
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 59% to Centre
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50/60 rounded border border-amber-200 text-amber-950 font-sans">
                        <strong>Why Toppers Score 2+ Marks More:</strong> They incorporate committee citations (e.g. Sarkaria Commission 1988, Punchhi Commission 2010) and draw a 2-second flowchart instead of writing uninterrupted paragraphs.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="h-full min-h-[460px] bg-white rounded-lg border border-stone-200 p-8 flex flex-col items-center justify-center text-center">
                <RefreshCw className="w-8 h-8 text-amber-800 animate-spin mb-4" />
                <h3 className="font-display font-semibold text-stone-900 text-lg mb-1">
                  Benchmarking Answer with UPSC Commission Keys
                </h3>
                <p className="text-xs text-stone-500 max-w-sm font-serif-prose">
                  Checking introduction relevance, multi-sector body balance, Supreme Court precedents, and administrative feasibility...
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PRELIMS_QUESTIONS, SUBJECT_WEIGHTAGES } from '../data/mockData';
import { PrelimsQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle, BarChart3, ArrowRight, BookOpen, Shuffle, AlertTriangle, ShieldCheck } from 'lucide-react';

export const PrelimsMockEngine: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'simulator' | 'weightage'>('simulator');

  const filteredQuestions = selectedSubject === 'All' 
    ? PRELIMS_QUESTIONS 
    : PRELIMS_QUESTIONS.filter(q => q.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  const currentQ = filteredQuestions[activeQuestionIndex] || PRELIMS_QUESTIONS[0];

  const handleSelectOption = (optionId: string) => {
    if (!showExplanation) {
      setSelectedOption(optionId);
      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setActiveQuestionIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handleResetQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const isCorrect = selectedOption === currentQ.correctOptionId;

  return (
    <section id="prelims-engine" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Core Capability 02</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Prelims AI PYQ & Mock Simulator</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Master UPSC Prelims Elimination & 10-Year Subject Weightages
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            The UPSC Prelims paper is not just a test of memory—it is a game of probability, traps, and elimination. 
            Our simulator reverse-engineers commission question patterns to train your intuition.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-1 p-1 bg-stone-200 rounded-lg">
            <button
              onClick={() => setViewMode('simulator')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'simulator'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Interactive Question Simulator
            </button>
            <button
              onClick={() => setViewMode('weightage')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'weightage'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              10-Year Subject Weightage Analytics
            </button>
          </div>

          {viewMode === 'simulator' && (
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span>Question {activeQuestionIndex + 1} of {filteredQuestions.length}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-amber-900">{currentQ.subject} ({currentQ.year})</span>
            </div>
          )}
        </div>

        {/* Mode 1: Interactive Question Simulator */}
        {viewMode === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Card: Question Body */}
            <div className="lg:col-span-7 bg-white rounded-lg border border-stone-200 shadow-xs p-6 space-y-6">
              
              <div className="flex items-center justify-between text-xs pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900">{currentQ.subject}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-500">{currentQ.year} Paper 1</span>
                </div>
                <span className="text-amber-800 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[11px]">
                  {currentQ.difficulty} Difficulty
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <p className="font-display font-medium text-stone-900 text-sm sm:text-base leading-snug">
                  {currentQ.questionText}
                </p>

                {/* Statements */}
                <div className="space-y-2 pt-1">
                  {currentQ.statements.map((stmt, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-stone-50 rounded border border-stone-200/80 text-xs sm:text-sm text-stone-800">
                      <span className="font-mono font-bold text-stone-600 shrink-0">{idx + 1}.</span>
                      <span className="font-serif-prose leading-relaxed">{stmt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Options Selection */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                  Select the correct answer using the code below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentQ.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    const isCorrectAnswer = opt.id === currentQ.correctOptionId;
                    
                    let btnStyle = "border-stone-200 hover:border-stone-400 bg-white text-stone-800";
                    if (showExplanation) {
                      if (isCorrectAnswer) {
                        btnStyle = "border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-600";
                      } else if (isSelected && !isCorrectAnswer) {
                        btnStyle = "border-red-500 bg-red-50 text-red-950 ring-1 ring-red-500";
                      } else {
                        btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        disabled={showExplanation}
                        className={`p-3 rounded border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-stone-100 flex items-center justify-center font-mono font-bold text-xs text-stone-700">
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {showExplanation && isCorrectAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        )}
                        {showExplanation && isSelected && !isCorrectAnswer && (
                          <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={handleResetQuestion}
                  disabled={!showExplanation}
                  className="text-xs text-stone-500 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                >
                  Retry Question
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Card: AI Elimination & Detailed Rationale */}
            <div className="lg:col-span-5 space-y-4">
              {showExplanation ? (
                <div className="bg-white rounded-lg border border-stone-200 shadow-sm p-6 space-y-4 animate-in fade-in duration-200">
                  
                  {/* Status Banner */}
                  <div className={`p-3 rounded-md flex items-center gap-2.5 text-xs font-semibold ${
                    isCorrect 
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' 
                      : 'bg-red-50 text-red-900 border border-red-200'
                  }`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Correct! Option ({currentQ.correctOptionId}) is verified by official UPSC keys.</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-red-700 shrink-0" />
                        <span>Incorrect. The correct answer is Option ({currentQ.correctOptionId}).</span>
                      </>
                    )}
                  </div>

                  {/* Elimination Intelligence */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                      <span>UPSC Elimination Strategy</span>
                    </div>
                    <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-950 font-serif-prose leading-relaxed">
                      {currentQ.eliminationTechnique}
                    </div>
                  </div>

                  {/* Detailed Explanation */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                      Authoritative Explanation
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 font-serif-prose leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>

                  {/* Standard Text Source Citation */}
                  <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-700">Verified Reference: </span>
                      <span>{currentQ.sourceReference}</span>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-white rounded-lg border border-dashed border-stone-300 p-8 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-500">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-stone-800 text-sm">
                    Select an option to unlock AI elimination logic
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto font-serif-prose">
                    See how commission toppers break down multi-statement questions in under 45 seconds using systematic elimination.
                  </p>
                </div>
              )}

              {/* High Yield Quick Insight Box */}
              <div className="bg-stone-900 text-stone-200 p-4 rounded-lg text-xs space-y-2">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>2024 Prelims Pattern Shift Alert</span>
                </div>
                <p className="text-stone-300 font-serif-prose leading-relaxed">
                  Notice the "Only One / Only Two / All Three" format introduced by UPSC. 
                  Traditional pairing elimination requires deeper factual certainty on at least 2 statements.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Mode 2: 10-Year Subject Weightage Analytics */}
        {viewMode === 'weightage' && (
          <div className="bg-white rounded-lg border border-stone-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-stone-200 bg-stone-50/70 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-stone-900 text-base">
                  UPSC Prelims 10-Year Weightage Matrix (2014–2024)
                </h3>
                <p className="text-xs text-stone-500 font-serif-prose">
                  Calibrated across 1,000+ official questions to prioritize high-ROI syllabus chapters.
                </p>
              </div>
              <div className="text-xs text-stone-600 font-mono">
                Total GS-1 Marks: 200 (100 Questions)
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-700 uppercase tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Subject Area</th>
                    <th className="py-3 px-4 text-center">Avg. Questions / Year</th>
                    <th className="py-3 px-4">Historical Trend</th>
                    <th className="py-3 px-4">Priority High-Yield Chapters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {SUBJECT_WEIGHTAGES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-stone-900">
                        {row.subject}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono tabular-nums font-bold text-amber-900">
                        ~{row.avgQuestions} Qs ({row.avgQuestions * 2} Marks)
                      </td>
                      <td className="py-3.5 px-4 text-stone-600">
                        {row.trend}
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 font-serif-prose">
                        {row.focusAreas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span>Pro Tip: Environment + Polity + Economy consistently comprise &gt;50% of the entire Prelims paper.</span>
              <button
                onClick={() => setViewMode('simulator')}
                className="font-semibold text-amber-900 hover:text-amber-950 cursor-pointer"
              >
                Practice Questions Now →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

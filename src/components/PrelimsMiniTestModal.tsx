import React, { useState, useEffect } from 'react';
import { PRELIMS_QUESTIONS } from '../data/mockData';
import { Clock, CheckCircle2, XCircle, AlertCircle, ArrowRight, ArrowLeft, RotateCcw, X, Award, ShieldCheck } from 'lucide-react';

interface PrelimsMiniTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrelimsMiniTestModal: React.FC<PrelimsMiniTestModalProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const currentQ = PRELIMS_QUESTIONS[currentIdx % PRELIMS_QUESTIONS.length];

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIdx]: optId
    }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIdx];
      return copy;
    });
  };

  const toggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIdx]: !prev[currentIdx]
    }));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Scoring
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  PRELIMS_QUESTIONS.forEach((q, idx) => {
    const userChoice = selectedAnswers[idx];
    if (!userChoice) {
      unattemptedCount++;
    } else if (userChoice === q.correctOptionId) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalScore = (correctCount * 2.0 - incorrectCount * 0.66).toFixed(2);
  const maxPossible = PRELIMS_QUESTIONS.length * 2.0;

  const handleRestart = () => {
    setSelectedAnswers({});
    setMarkedForReview({});
    setTimeLeft(300);
    setIsSubmitted(false);
    setCurrentIdx(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-lg border border-stone-200 shadow-2xl max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden">
        
        {/* Test Header */}
        <div className="px-6 py-3.5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-amber-400 text-xs sm:text-sm">UPSC CSE GS-1</span>
            <span className="text-stone-500">|</span>
            <span className="text-xs text-stone-300">Live Commission Mock Simulator</span>
          </div>

          <div className="flex items-center gap-4">
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-stone-800 rounded font-mono text-xs text-amber-300 font-bold border border-stone-700">
                <Clock className="w-3.5 h-3.5" />
                <span>{timeFormatted}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1 rounded cursor-pointer"
              aria-label="Close test"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isSubmitted ? (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            
            {/* Left Question Pane (8 cols) */}
            <div className="md:col-span-8 p-6 flex flex-col justify-between overflow-y-auto border-r border-stone-200">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-800">Question {currentIdx + 1} of {PRELIMS_QUESTIONS.length}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-700">+2.00 Marks</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-red-600">-0.66 Negative</span>
                  </div>
                </div>

                <p className="font-display font-medium text-stone-900 text-sm sm:text-base leading-snug">
                  {currentQ.questionText}
                </p>

                <div className="space-y-2 pt-1">
                  {currentQ.statements.map((stmt, sIdx) => (
                    <div key={sIdx} className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5">
                      <span className="font-bold text-stone-600 shrink-0">{sIdx + 1}.</span>
                      <span className="font-serif-prose">{stmt}</span>
                    </div>
                  ))}
                </div>

                {/* Options */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-stone-700 uppercase">Choose code:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`p-3 rounded border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          selectedAnswers[currentIdx] === opt.id
                            ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold ring-1 ring-amber-800'
                            : 'border-stone-200 hover:border-stone-400 bg-white text-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded bg-stone-100 flex items-center justify-center font-bold text-[11px]">
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Test Controls */}
              <div className="pt-6 mt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={toggleReview}
                    className={`px-3 py-1.5 rounded text-xs font-medium border cursor-pointer ${
                      markedForReview[currentIdx]
                        ? 'bg-purple-50 text-purple-900 border-purple-300'
                        : 'text-stone-600 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {markedForReview[currentIdx] ? '✓ Marked for Review' : 'Mark for Review'}
                  </button>
                  <button
                    onClick={handleClearResponse}
                    disabled={!selectedAnswers[currentIdx]}
                    className="px-3 py-1.5 rounded text-xs text-stone-500 hover:text-stone-800 disabled:opacity-30 cursor-pointer"
                  >
                    Clear Choice
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                    disabled={currentIdx === 0}
                    className="px-3 py-1.5 rounded border border-stone-200 text-xs text-stone-700 hover:bg-stone-50 disabled:opacity-30 cursor-pointer flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Prev</span>
                  </button>
                  {currentIdx < PRELIMS_QUESTIONS.length - 1 ? (
                    <button
                      onClick={() => setCurrentIdx(prev => prev + 1)}
                      className="px-4 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold cursor-pointer flex items-center gap-1"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="px-4 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold cursor-pointer"
                    >
                      Submit Mock Test
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Right Question Palette (4 cols) */}
            <div className="md:col-span-4 p-5 bg-stone-50 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Question Palette
                </h4>

                <div className="grid grid-cols-5 gap-2">
                  {PRELIMS_QUESTIONS.map((_, pIdx) => {
                    const isAnswered = !!selectedAnswers[pIdx];
                    const isMarked = !!markedForReview[pIdx];
                    const isCurrent = currentIdx === pIdx;

                    let btnClass = "bg-stone-200 text-stone-700 border-stone-300";
                    if (isMarked) {
                      btnClass = "bg-purple-100 text-purple-900 border-purple-400 font-bold";
                    } else if (isAnswered) {
                      btnClass = "bg-emerald-100 text-emerald-950 border-emerald-400 font-bold";
                    }

                    return (
                      <button
                        key={pIdx}
                        onClick={() => setCurrentIdx(pIdx)}
                        className={`w-10 h-10 rounded border text-xs font-mono flex items-center justify-center cursor-pointer transition-transform ${btnClass} ${
                          isCurrent ? 'ring-2 ring-stone-900 scale-105' : ''
                        }`}
                      >
                        {pIdx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="pt-4 border-t border-stone-200 space-y-2 text-[11px] text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-emerald-200 border border-emerald-400" />
                    <span>Answered ({Object.keys(selectedAnswers).length})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-purple-200 border border-purple-400" />
                    <span>Marked for Review ({Object.values(markedForReview).filter(Boolean).length})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-stone-200 border border-stone-300" />
                    <span>Unattempted ({PRELIMS_QUESTIONS.length - Object.keys(selectedAnswers).length})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(true)}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded transition-colors cursor-pointer mt-4"
              >
                Submit & View Scorecard
              </button>
            </div>

          </div>
        ) : (
          /* Scorecard View */
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Header Score Banner */}
            <div className="p-6 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-lg flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="text-xs text-amber-300 uppercase tracking-wider font-semibold">
                  Official Scorecard
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display text-4xl font-bold text-white tabular-nums">
                    {totalScore}
                  </span>
                  <span className="text-stone-400 text-sm">/ {maxPossible.toFixed(2)} Marks</span>
                  <span className="ml-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                    Qualifying Cut-off Cleared (Projected Rank: Top 4%)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-stone-300">
                <div>
                  <div className="font-bold text-emerald-400 text-base">{correctCount}</div>
                  <div className="text-stone-400">Correct (+{correctCount * 2} Marks)</div>
                </div>
                <div>
                  <div className="font-bold text-red-400 text-base">{incorrectCount}</div>
                  <div className="text-stone-400">Incorrect (-{(incorrectCount * 0.66).toFixed(2)})</div>
                </div>
                <div>
                  <div className="font-bold text-stone-400 text-base">{unattemptedCount}</div>
                  <div className="text-stone-400">Skipped</div>
                </div>
              </div>
            </div>

            {/* Answer Key & Elimination Audit */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base text-stone-900">
                Detailed Commission Answer Review & Elimination Audit
              </h3>

              <div className="space-y-4">
                {PRELIMS_QUESTIONS.map((q, qIdx) => {
                  const userChoice = selectedAnswers[qIdx];
                  const isQCorrect = userChoice === q.correctOptionId;
                  const isSkipped = !userChoice;

                  return (
                    <div key={q.id} className="p-4 rounded-lg border border-stone-200 bg-white space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-900">Q{qIdx + 1}: {q.subject} ({q.year})</span>
                        {isSkipped ? (
                          <span className="text-stone-500 font-medium bg-stone-100 px-2 py-0.5 rounded">Not Attempted</span>
                        ) : isQCorrect ? (
                          <span className="text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+2.00)
                          </span>
                        ) : (
                          <span className="text-red-700 font-semibold bg-red-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Incorrect (-0.66)
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-stone-800 font-medium">
                        {q.questionText}
                      </p>

                      <div className="p-2.5 bg-stone-50 rounded text-xs space-y-1">
                        <div className="text-stone-700">
                          <span className="font-semibold text-stone-900">Correct Option: </span>
                          <span className="font-bold text-emerald-800">({q.correctOptionId})</span>
                          {userChoice && !isQCorrect && (
                            <span className="text-red-700 ml-2">(You marked: {userChoice})</span>
                          )}
                        </div>
                        <div className="text-stone-600 font-serif-prose">
                          <span className="font-semibold text-amber-900">Elimination Logic: </span>
                          {q.eliminationTechnique}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake This Mock</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Return to Dashboard
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

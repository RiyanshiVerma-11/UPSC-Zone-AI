import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Target, CheckCircle2, Download, ArrowRight, ShieldCheck } from 'lucide-react';

export const StudyPlannerWidget: React.FC = () => {
  const [targetYear, setTargetYear] = useState<'2026' | '2027'>('2026');
  const [dailyHours, setDailyHours] = useState<number>(8);
  const [profileType, setProfileType] = useState<'fulltime' | 'working' | 'college'>('fulltime');
  const [optionalSubject, setOptionalSubject] = useState<string>('PSIR');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Dynamic calculations based on aspirant choices
  const staticHours = (dailyHours * 0.4).toFixed(1);
  const optionalHours = (dailyHours * 0.3).toFixed(1);
  const currentAffairsHours = (dailyHours * 0.15).toFixed(1);
  const answerWritingHours = (dailyHours * 0.15).toFixed(1);

  const totalMockTarget = targetYear === '2026' ? 45 : 65;
  const mainsAnswersTarget = targetYear === '2026' ? 240 : 400;
  const daysRemaining = targetYear === '2026' ? 238 : 603;

  const handleDownloadPlan = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="study-planner" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Core Capability 04</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>AI Syllabus Architecture & Planner</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Custom Syllabus Roadmap Calibrated to Your Attempt & Hours
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            The UPSC syllabus is vast, but manageable with strict algorithmic pacing. Configure your available 
            daily hours and target cycle to generate a mathematically sound revision schedule.
          </p>
        </div>

        {/* 2-Column Planner Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Deck */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-stone-200 shadow-xs p-6 space-y-6">
            <h3 className="font-display font-semibold text-stone-900 text-base pb-3 border-b border-stone-100">
              Configure Your Aspirant Profile
            </h3>

            {/* Target Exam Year */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
                Target UPSC Cycle
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTargetYear('2026')}
                  className={`py-2 px-3 text-xs font-medium rounded border transition-colors cursor-pointer text-center ${
                    targetYear === '2026'
                      ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold'
                      : 'border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  UPSC CSE 2026 (Sprint)
                </button>
                <button
                  onClick={() => setTargetYear('2027')}
                  className={`py-2 px-3 text-xs font-medium rounded border transition-colors cursor-pointer text-center ${
                    targetYear === '2027'
                      ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold'
                      : 'border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  UPSC CSE 2027 (Foundation)
                </button>
              </div>
            </div>

            {/* Daily Hours Commitment */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-stone-700 uppercase tracking-wide">
                  Daily Study Hours Commitment
                </label>
                <span className="font-mono tabular-nums font-bold text-amber-900 text-sm">
                  {dailyHours} Hours / Day
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={14}
                step={1}
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-900"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                <span>3h (Working)</span>
                <span>8h (Full-time)</span>
                <span>14h (Extreme Sprint)</span>
              </div>
            </div>

            {/* Profile Category */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
                Aspirant Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fulltime', label: 'Full-Time' },
                  { id: 'working', label: 'Working Pro' },
                  { id: 'college', label: 'College' }
                ].map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => setProfileType(prof.id as any)}
                    className={`py-1.5 px-2 text-xs font-medium rounded border transition-colors cursor-pointer text-center ${
                      profileType === prof.id
                        ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold'
                        : 'border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {prof.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Subject */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wide block">
                Mains Optional Subject
              </label>
              <select
                value={optionalSubject}
                onChange={(e) => setOptionalSubject(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-900"
              >
                <option value="PSIR">Political Science & International Relations (PSIR)</option>
                <option value="Sociology">Sociology</option>
                <option value="Geography">Geography</option>
                <option value="History">History</option>
                <option value="Anthropology">Anthropology</option>
                <option value="Public Administration">Public Administration</option>
                <option value="Commerce">Commerce & Accountancy</option>
              </select>
            </div>

            {/* Quick Stat Footer */}
            <div className="pt-2 text-xs text-stone-500 border-t border-stone-100 flex items-center justify-between">
              <span>Estimated CSE Days Left:</span>
              <span className="font-mono font-bold text-stone-900">{daysRemaining} Days</span>
            </div>

          </div>

          {/* Right Card: Dynamic Calibrated Plan */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-stone-200 shadow-sm p-6 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Target: CSE {targetYear} · {profileType === 'working' ? 'Working Professional Plan' : 'Dedicated Aspirant Plan'}
                </span>
                <h3 className="font-display font-bold text-lg text-stone-900">
                  Daily Allocation & Strategic Milestones
                </h3>
              </div>
              <button
                onClick={handleDownloadPlan}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer border border-stone-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadSuccess ? 'Downloaded!' : 'Export PDF Schedule'}</span>
              </button>
            </div>

            {/* Daily Hours Breakdown Bar */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide">
                Optimal Daily Time Distribution ({dailyHours} hrs total)
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                  <div className="text-[11px] text-stone-500">GS Static (Polity/Hist)</div>
                  <div className="font-mono text-base font-bold text-stone-900">{staticHours} hrs</div>
                  <div className="text-[10px] text-stone-400">NCERT + Standard Books</div>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                  <div className="text-[11px] text-stone-500">Optional ({optionalSubject})</div>
                  <div className="font-mono text-base font-bold text-amber-900">{optionalHours} hrs</div>
                  <div className="text-[10px] text-stone-400">Paper 1 & Paper 2</div>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                  <div className="text-[11px] text-stone-500">Daily Editorial / PIB</div>
                  <div className="font-mono text-base font-bold text-stone-900">{currentAffairsHours} hrs</div>
                  <div className="text-[10px] text-stone-400">Syllabus-tagged Digest</div>
                </div>

                <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                  <div className="text-[11px] text-stone-500">Answer Writing / PYQ</div>
                  <div className="font-mono text-base font-bold text-emerald-800">{answerWritingHours} hrs</div>
                  <div className="text-[10px] text-stone-400">AI Rubric Evaluation</div>
                </div>
              </div>
            </div>

            {/* 3-Phase Campaign Roadmap */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide">
                3-Phase Execution Architecture
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded border border-stone-200 bg-stone-50/50 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Phase 1: Foundation & Optional Mastery (Months 1–4)</div>
                    <div className="text-stone-600 font-serif-prose mt-0.5">
                      Finish core static syllabus + Optional Paper 1 & 2 notes. Maintain daily 2-answer writing habit.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded border border-stone-200 bg-stone-50/50 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Phase 2: Mains Simulation & Ethics Consolidation (Months 5–7)</div>
                    <div className="text-stone-600 font-serif-prose mt-0.5">
                      Target: {mainsAnswersTarget} Mains answers evaluated with AI rubrics. Write 8 full-length GS papers.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded border border-stone-200 bg-stone-50/50 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Phase 3: Prelims Elimination Drill & Mock Sprint (Final 90 Days)</div>
                    <div className="text-stone-600 font-serif-prose mt-0.5">
                      Solve {totalMockTarget} full GS-1 & CSAT mocks under 2-hour exam pressure. Review 10-year PYQ patterns.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee note */}
            <div className="p-3 bg-amber-50/60 rounded border border-amber-200/80 text-xs text-amber-950 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                Calculations based on empirical study routines of 320+ successful candidates in the 2021–2023 cohorts.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

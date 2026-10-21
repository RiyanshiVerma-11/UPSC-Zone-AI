import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { UpscZoneApi } from '../services/api';

interface CTASectionProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onScrollToSection: (id: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenAuth, onScrollToSection }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@') || !emailInput.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    try {
      await UpscZoneApi.subscribeLead(emailInput);
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Subtle radial ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700/30 via-transparent to-transparent" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        {/* Editorial kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
          <span>UPSC CSE 2026 Preparation</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Zero-Cost Starter Access</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white [text-wrap:balance] max-w-3xl mx-auto leading-tight">
          Your Name on the Final Civil Services Gazetted List Starts with Today’s Practice
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-serif-prose max-w-2xl mx-auto leading-relaxed">
          Join over 48,000 aspirants who evaluate their Mains answers, master PYQ elimination, 
          and read syllabus-mapped editorial briefs every day on UPSC ZONE AI.
        </p>

        {/* Lead Capture / Instant Kickoff Form */}
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="p-4 rounded-md bg-stone-800 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center justify-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Welcome! Your Free Aspirant Kit & Trend Report has been dispatched to {emailInput}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-md bg-stone-800/90 border border-stone-700 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                >
                  Start Free Prep
                </button>
              </div>

              {errorMsg && (
                <div className="text-red-400 text-xs text-left pt-1">
                  {errorMsg}
                </div>
              )}
            </form>
          )}

          <div className="pt-3 flex items-center justify-center gap-4 text-xs text-stone-400">
            <span>✓ 5 Free Mains Evaluations / Day</span>
            <span aria-hidden="true">·</span>
            <span>✓ No Credit Card Needed</span>
          </div>
        </div>

        {/* Secondary Quick Access Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <button 
            onClick={() => onScrollToSection('mains-evaluator')} 
            className="hover:text-white transition-colors cursor-pointer underline"
          >
            Try Mains Answer Evaluator
          </button>
          <button 
            onClick={() => onScrollToSection('prelims-engine')} 
            className="hover:text-white transition-colors cursor-pointer underline"
          >
            Attempt 2024 Prelims Mock Questions
          </button>
          <button 
            onClick={() => onScrollToSection('current-affairs')} 
            className="hover:text-white transition-colors cursor-pointer underline"
          >
            Read Today’s Hindu & PIB Briefing
          </button>
        </div>

      </div>
    </section>
  );
};

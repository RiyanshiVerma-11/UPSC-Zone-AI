import React from 'react';
import { ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenAuth }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Academic Statement (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-stone-800 text-amber-200 flex items-center justify-center font-serif font-bold text-sm border border-stone-700">
                UZ
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                UPSC ZONE AI
              </span>
            </div>

            <p className="text-stone-400 font-serif-prose leading-relaxed text-xs sm:text-sm max-w-sm">
              Democratizing civil services preparation across Bharat. Delivering examiner-calibrated 
              Mains evaluation, 12-year Prelims elimination intelligence, and daily editorial synthesis 
              to every aspirant, regardless of geography or economic background.
            </p>

            <div className="pt-2 flex items-center gap-2 text-stone-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-500/70" />
              <span>Grounded in official UPSC notifications, NCERTs & constitutional texts.</span>
            </div>
          </div>

          {/* Column 2: Platform Capabilities */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs">
              AI Tools
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onScrollToSection('mains-evaluator')} className="hover:text-white transition-colors cursor-pointer">
                  Mains Answer Evaluator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('prelims-engine')} className="hover:text-white transition-colors cursor-pointer">
                  Prelims PYQ Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('current-affairs')} className="hover:text-white transition-colors cursor-pointer">
                  The Hindu & PIB Digest
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('study-planner')} className="hover:text-white transition-colors cursor-pointer">
                  AI Study Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('rankers')} className="hover:text-white transition-colors cursor-pointer">
                  Topper Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Syllabus & Curated Resources */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs">
              Syllabus Repositories
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#mains-evaluator" onClick={(e) => { e.preventDefault(); onScrollToSection('mains-evaluator'); }} className="hover:text-white transition-colors cursor-pointer">
                  GS-1: Heritage, Society, Geography
                </a>
              </li>
              <li>
                <a href="#mains-evaluator" onClick={(e) => { e.preventDefault(); onScrollToSection('mains-evaluator'); }} className="hover:text-white transition-colors cursor-pointer">
                  GS-2: Polity, Governance, IR
                </a>
              </li>
              <li>
                <a href="#mains-evaluator" onClick={(e) => { e.preventDefault(); onScrollToSection('mains-evaluator'); }} className="hover:text-white transition-colors cursor-pointer">
                  GS-3: Economy, Environment, Security
                </a>
              </li>
              <li>
                <a href="#mains-evaluator" onClick={(e) => { e.preventDefault(); onScrollToSection('mains-evaluator'); }} className="hover:text-white transition-colors cursor-pointer">
                  GS-4: Ethics & Case Studies
                </a>
              </li>
              <li>
                <a href="#prelims-engine" onClick={(e) => { e.preventDefault(); onScrollToSection('prelims-engine'); }} className="hover:text-white transition-colors cursor-pointer">
                  CSAT Aptitude & Comprehension
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Academic Integrity */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs">
              Integrity & Trust
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onOpenAuth('signup')} className="hover:text-white transition-colors cursor-pointer">
                  Aspirant Honor Code
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('signin')} className="hover:text-white transition-colors cursor-pointer">
                  Topper Verification Policy
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy & Data Governance
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-amber-300 font-mono text-[11px]">
                  support@upsczone.ai
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Notice & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} UPSC ZONE AI. All rights reserved.
          </div>

          <div className="text-stone-400 text-center md:text-right font-serif-prose max-w-xl">
            Disclaimer: UPSC ZONE AI is an independent academic preparation platform and is not 
            affiliated, associated, or endorsed by the Union Public Service Commission (UPSC) or the Government of India.
          </div>
        </div>

      </div>
    </footer>
  );
};

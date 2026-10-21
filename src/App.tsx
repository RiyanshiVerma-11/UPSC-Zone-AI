/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainsEvaluatorDemo } from './components/MainsEvaluatorDemo';
import { PrelimsMockEngine } from './components/PrelimsMockEngine';
import { CurrentAffairsFeed } from './components/CurrentAffairsFeed';
import { StudyPlannerWidget } from './components/StudyPlannerWidget';
import { FeatureBento } from './components/FeatureBento';
import { Testimonials } from './components/Testimonials';
import { ComparisonTable } from './components/ComparisonTable';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { PrelimsMiniTestModal } from './components/PrelimsMiniTestModal';
import { LiveAspirantTicker } from './components/LiveAspirantTicker';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (name: string) => {
    setActiveUser(name);
    setToastMessage(`Welcome back, ${name}! Your UPSC 2026 dashboard is active.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Editorial Bar: Cycle Alert & Countdown */}
      {!announcementDismissed && (
        <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-ping" />
              <span className="font-semibold text-white">CSE 2026 Cycle:</span>
              <span className="hidden sm:inline font-serif-prose text-stone-300">
                UPSC Prelims is in 238 days. Today's Hindu & PIB Editorial Digest is ready.
              </span>
              <span className="sm:hidden text-stone-300">
                Daily Editorial ready
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-4">
              <button
                onClick={() => setTestModalOpen(true)}
                className="text-amber-300 hover:text-white font-medium underline text-[11px] cursor-pointer"
              >
                Quick Mock (5m)
              </button>
              <button
                onClick={() => setAnnouncementDismissed(true)}
                className="text-stone-500 hover:text-stone-300 p-0.5 rounded cursor-pointer"
                aria-label="Dismiss cycle alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Aspirant Community Activity Ticker */}
      <LiveAspirantTicker />

      {/* Main Top Navigation */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onScrollToSection={handleScrollToSection}
        activeSection={activeSection}
      />

      {/* Active User Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-lg shadow-xl border border-stone-700 flex items-center gap-3 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)} 
            className="text-stone-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onOpenAuth={handleOpenAuth}
        />

        {/* Quick Mock Banner Strip */}
        <div className="bg-amber-900 text-amber-50 py-3 px-4 text-center text-xs flex flex-wrap items-center justify-center gap-3 border-b border-amber-950">
          <span className="font-semibold">⚡ Challenge Yourself:</span>
          <span>Attempt Today's 5-Question UPSC Prelims Elimination Mini-Mock</span>
          <button
            onClick={() => setTestModalOpen(true)}
            className="px-3 py-1 bg-white text-stone-900 rounded font-bold hover:bg-stone-100 transition-colors cursor-pointer text-[11px]"
          >
            Launch Live Simulator (05:00) →
          </button>
        </div>

        {/* 2. Interactive Mains Answer Evaluator Sandbox */}
        <MainsEvaluatorDemo />

        {/* 3. Prelims Mock & PYQ Elimination Engine */}
        <PrelimsMockEngine />

        {/* 4. Daily Editorial & PIB Synthesis */}
        <CurrentAffairsFeed />

        {/* 5. Custom Study Planner & Readiness Calculator */}
        <StudyPlannerWidget />

        {/* 6. Feature Bento Grid (Smart Notes, CSAT, DAF, Essay) */}
        <FeatureBento
          onScrollToSection={handleScrollToSection}
          onOpenAuth={handleOpenAuth}
        />

        {/* 7. Topper Testimonials & Verified Proof */}
        <Testimonials />

        {/* 8. Comparison with Traditional Coaching */}
        <ComparisonTable />

        {/* 9. High-Conversion CTA Section */}
        <CTASection
          onOpenAuth={handleOpenAuth}
          onScrollToSection={handleScrollToSection}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenAuth={handleOpenAuth}
      />

      {/* Authentication & Onboarding Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Live Prelims Mini Mock Test Simulator */}
      <PrelimsMiniTestModal
        isOpen={testModalOpen}
        onClose={() => setTestModalOpen(false)}
      />

    </div>
  );
}

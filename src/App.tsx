/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesOverview, WorkspaceTab } from './components/FeaturesOverview';
import { Testimonials } from './components/Testimonials';
import { ComparisonTable } from './components/ComparisonTable';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { WorkspaceApp } from './components/WorkspaceApp';
import { PrelimsMiniTestModal } from './components/PrelimsMiniTestModal';
import { LiveAspirantTicker } from './components/LiveAspirantTicker';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { CheckCircle2, X } from 'lucide-react';

type AppView = 'landing' | 'login' | 'workspace';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [pendingWorkspaceTab, setPendingWorkspaceTab] = useState<WorkspaceTab>('mains');
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<WorkspaceTab>('mains');
  const [testModalOpen, setTestModalOpen] = useState(false);

  const [activeUser, setActiveUser] = useState<{
    name: string;
    targetYear: string;
    optionalSubject: string;
  } | null>(null);

  const [activeSection, setActiveSection] = useState<string>('top');
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenAuthPage = (mode: 'signin' | 'signup', targetTab: WorkspaceTab = 'mains') => {
    setAuthMode(mode);
    setPendingWorkspaceTab(targetTab);
    setCurrentView('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchWorkspaceTool = (tab: WorkspaceTab = 'mains') => {
    setActiveWorkspaceTab(tab);
    if (activeUser) {
      setCurrentView('workspace');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleOpenAuthPage('signin', tab);
    }
  };

  const handleAuthSuccess = (user: {
    name: string;
    targetYear: string;
    optionalSubject: string;
  }) => {
    setActiveUser(user);
    setActiveWorkspaceTab(pendingWorkspaceTab);
    setCurrentView('workspace');
    setToastMessage(`Welcome, ${user.name}! CSE ${user.targetYear} workspace is active.`);
    setTimeout(() => setToastMessage(null), 4000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    setActiveUser(null);
    setCurrentView('landing');
    setToastMessage('Signed out of workspace.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleScrollToSection = (id: string) => {
    // Map legacy tool IDs if clicked from footer/CTA to either #features or launching the app
    const toolMap: Record<string, WorkspaceTab> = {
      'mains-evaluator': 'mains',
      'prelims-engine': 'prelims',
      'current-affairs': 'editorial',
      'study-planner': 'planner',
    };

    if (toolMap[id]) {
      handleLaunchWorkspaceTool(toolMap[id]);
      return;
    }

    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Dedicated Login / Onboarding Page View
  if (currentView === 'login') {
    return (
      <LoginPage
        initialMode={authMode}
        onBackToLanding={() => setCurrentView('landing')}
        onAuthSuccess={handleAuthSuccess}
      />
    );
  }

  // 2. Authenticated Full Workspace Application View
  if (currentView === 'workspace') {
    return (
      <>
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

        <WorkspaceApp
          user={
            activeUser || {
              name: 'Aarav Mishra',
              targetYear: '2026',
              optionalSubject: 'PSIR',
            }
          }
          activeTab={activeWorkspaceTab}
          onTabChange={setActiveWorkspaceTab}
          onStartLiveMock={() => setTestModalOpen(true)}
          onBackToLanding={() => setCurrentView('landing')}
          onSignOut={handleSignOut}
        />

        <PrelimsMiniTestModal
          isOpen={testModalOpen}
          onClose={() => setTestModalOpen(false)}
        />
      </>
    );
  }

  // 3. Clean Public Home Page (Landing Page) View
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
                UPSC Prelims is in 238 days. Today's Hindu & PIB Editorial Digest is live in the app.
              </span>
              <span className="sm:hidden text-stone-300">
                CSE 2026 Workspace Live
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-4">
              <button
                onClick={() => handleLaunchWorkspaceTool('mains')}
                className="text-amber-300 hover:text-white font-medium underline text-[11px] cursor-pointer"
              >
                Launch App →
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
        onOpenAuth={(mode) => handleOpenAuthPage(mode)}
        onLaunchApp={() => handleLaunchWorkspaceTool('mains')}
        onScrollToSection={handleScrollToSection}
        activeSection={activeSection}
        isAuthenticated={Boolean(activeUser)}
      />

      {/* Toast Notification */}
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

      {/* Clean Marketing Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Tagline, CTA & Cockpit Teaser */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onOpenAuth={(mode) => handleOpenAuthPage(mode)}
          onLaunchWorkspaceTool={handleLaunchWorkspaceTool}
        />

        {/* 2. Key Features Showcase (AI Mock Tests, Mains AI, Current Affairs, Notes, PYQs) & How It Works */}
        <FeaturesOverview
          onLaunchWorkspaceTool={handleLaunchWorkspaceTool}
          onStartLiveMock={() => setTestModalOpen(true)}
        />

        {/* 3. Live Interactive AI Demonstration (Top 0.1% Hackathon Showcase) */}
        <InteractiveShowcase
          onLaunchWorkspaceTool={handleLaunchWorkspaceTool}
        />

        {/* 4. Testimonials & Verified Topper Social Proof */}
        <Testimonials />

        {/* 4. Comparison with Traditional Coaching */}
        <ComparisonTable />

        {/* 5. High-Conversion CTA Section */}
        <CTASection
          onOpenAuth={(mode) => handleOpenAuthPage(mode)}
          onScrollToSection={handleScrollToSection}
        />
      </main>

      {/* 6. Quiet Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenAuth={(mode) => handleOpenAuthPage(mode)}
      />

      {/* Quick 5-Min Prelims Mock Modal (Accessible from Features Banner) */}
      <PrelimsMiniTestModal
        isOpen={testModalOpen}
        onClose={() => setTestModalOpen(false)}
      />

    </div>
  );
}

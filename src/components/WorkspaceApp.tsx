import React from 'react';
import {
  FileText,
  CheckCircle2,
  Newspaper,
  Calendar,
  Network,
  LogOut,
  ArrowLeft,
  Clock,
  Sparkles,
  User,
} from 'lucide-react';
import { WorkspaceTab } from './FeaturesOverview';
import { MainsEvaluatorDemo } from './MainsEvaluatorDemo';
import { PrelimsMockEngine } from './PrelimsMockEngine';
import { CurrentAffairsFeed } from './CurrentAffairsFeed';
import { StudyPlannerWidget } from './StudyPlannerWidget';
import { FeatureBento } from './FeatureBento';

interface WorkspaceAppProps {
  user: {
    name: string;
    targetYear: string;
    optionalSubject: string;
  };
  activeTab: WorkspaceTab;
  onTabChange: (tab: WorkspaceTab) => void;
  onStartLiveMock: () => void;
  onBackToLanding: () => void;
  onSignOut: () => void;
}

export const WorkspaceApp: React.FC<WorkspaceAppProps> = ({
  user,
  activeTab,
  onTabChange,
  onStartLiveMock,
  onBackToLanding,
  onSignOut,
}) => {
  const navItems: { id: WorkspaceTab; label: string; sub: string; icon: React.ReactNode }[] = [
    {
      id: 'mains',
      label: 'Mains AI Evaluator',
      sub: '5-Point Rubric & Ruled Sheet',
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: 'prelims',
      label: 'Prelims PYQ Engine',
      sub: 'Elimination & 10-Yr Weightage',
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      id: 'editorial',
      label: 'Daily Editorial & PIB',
      sub: 'GS 1–4 Digest & Audio Brief',
      icon: <Newspaper className="w-4 h-4" />,
    },
    {
      id: 'planner',
      label: 'AI Study Planner',
      sub: 'CSE 2026–2027 Pacing',
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      id: 'ecosystem',
      label: 'Notes, CSAT & DAF',
      sub: 'Knowledge Graph & Interview',
      icon: <Network className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      {/* Top Workspace Header */}
      <header className="sticky top-0 z-40 h-16 bg-stone-900 text-stone-100 border-b border-stone-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToLanding}
            className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white px-2.5 py-1.5 rounded bg-stone-800 hover:bg-stone-700 border border-stone-700 transition-colors cursor-pointer"
            title="Return to Public Home Page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home Page</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-amber-600 text-stone-950 flex items-center justify-center font-serif font-bold text-xs">
              UZ
            </div>
            <div>
              <span className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                UPSC ZONE AI
              </span>
              <span className="hidden md:inline-block ml-2 text-[11px] font-mono text-amber-300">
                · Aspirant Workspace
              </span>
            </div>
          </div>
        </div>

        {/* Right Actions: Quick Mock + Aspirant Profile + Sign Out */}
        <div className="flex items-center gap-3">
          <button
            onClick={onStartLiveMock}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded transition-colors cursor-pointer whitespace-nowrap"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>5-Min Live Mock</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded bg-stone-800 border border-stone-700 text-xs">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">{user.name}</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300 font-mono text-[11px]">
              CSE {user.targetYear} ({user.optionalSubject})
            </span>
          </div>

          <button
            onClick={onSignOut}
            className="p-2 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
            title="Sign Out"
            aria-label="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Secondary Module Switcher Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-2.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-md text-left transition-colors shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:text-stone-950'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-amber-900'}>
                  {item.icon}
                </span>
                <div>
                  <div className="text-xs font-semibold leading-tight">{item.label}</div>
                  <div
                    className={`text-[10px] leading-tight mt-0.5 ${
                      isActive ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {item.sub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Workspace Module */}
      <main className="flex-1">
        {activeTab === 'mains' && <MainsEvaluatorDemo />}
        {activeTab === 'prelims' && <PrelimsMockEngine />}
        {activeTab === 'editorial' && <CurrentAffairsFeed />}
        {activeTab === 'planner' && <StudyPlannerWidget />}
        {activeTab === 'ecosystem' && (
          <FeatureBento
            onScrollToSection={() => onTabChange('prelims')}
            onOpenAuth={() => onTabChange('mains')}
          />
        )}
      </main>
    </div>
  );
};

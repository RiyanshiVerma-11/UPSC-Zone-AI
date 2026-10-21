import React from 'react';
import {
  FileText,
  CheckCircle2,
  Newspaper,
  BookOpen,
  Calendar,
  UserCheck,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Layers,
} from 'lucide-react';

export type WorkspaceTab = 'mains' | 'prelims' | 'editorial' | 'planner' | 'ecosystem';

interface FeaturesOverviewProps {
  onLaunchWorkspaceTool: (tab: WorkspaceTab) => void;
  onStartLiveMock: () => void;
}

export const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({
  onLaunchWorkspaceTool,
  onStartLiveMock,
}) => {
  const coreFeatures: {
    id: WorkspaceTab;
    index: string;
    category: string;
    title: string;
    description: string;
    metrics: string;
    highlights: string[];
    ctaLabel: string;
    badgeText: string;
  }[] = [
    {
      id: 'mains',
      index: '01',
      category: 'AI Mains Answer Evaluator',
      title: 'Examiner-Calibrated Evaluation in Under 60 Seconds',
      description:
        'Draft or upload your GS 1–4 and Essay answers. Our rubric engine scores your introduction, body dimensions, constitutional articles, and way forward against 10 years of commission benchmarks.',
      metrics: '5-Factor Official UPSC Rubric · Ruled Booklet View · AIR 1 Comparison',
      highlights: [
        'Detects Constitutional Articles, Supreme Court cases & committee reports',
        'Pinpoints missing multi-sectoral dimensions for +1.5 to +2.5 extra marks',
        'Simulates Official UPSC Ruled Answer Booklet with margin feedback',
      ],
      ctaLabel: 'Open Mains Evaluator in App',
      badgeText: 'GS 1–4 & Essay',
    },
    {
      id: 'prelims',
      index: '02',
      category: 'AI Mock Tests & PYQ Engine',
      title: '12-Year PYQ Elimination Logic & Timed Mock Simulator',
      description:
        'Master the art of eliminating distractor statements in UPSC Prelims. Practice subject-wise PYQs (2013–2024) and full-length timed mock tests with official negative marking.',
      metrics: '+2.00 / -0.66 Commission Marking · 10-Year Subject Weightage Matrix',
      highlights: [
        'Trains you on "Only One / Only Two / All Three" statement patterns',
        'Step-by-step elimination strategy cited to Laxmikanth, NCERTs & Gazettes',
        'Live TCS iON-style question palette with accuracy & percentile analytics',
      ],
      ctaLabel: 'Open Prelims Engine in App',
      badgeText: 'Prelims GS-1 & CSAT',
    },
    {
      id: 'editorial',
      index: '03',
      category: 'Daily Current Affairs & PIB Synthesis',
      title: 'The Hindu, Indian Express & PIB Mapped to GS Syllabus',
      description:
        'Save 3 hours of manual newspaper note-making every morning. Read 6:00 AM syllabus-tagged briefs distilled into quote-ready Mains arguments, Prelims facts, and audio digests.',
      metrics: 'Daily 5-Min Audio Brief · Concept Mind Maps · One-Click Revision Notes',
      highlights: [
        'Every editorial tagged directly to GS-1, GS-2, GS-3, or GS-4 sub-topics',
        '3 high-yield Mains points + 2 Prelims objective pointers per article',
        'Built-in 5-minute commuter audio player with 1x / 1.25x / 1.5x speed control',
      ],
      ctaLabel: 'Open Daily Digest in App',
      badgeText: 'Updated Daily 06:00 AM',
    },
    {
      id: 'ecosystem',
      index: '04',
      category: 'Smart Notes & NCERT Knowledge Graph',
      title: 'Cross-Referenced Static Notes Linked to Current Events',
      description:
        'Study static concepts and dynamic news as one connected graph. Link 38 NCERTs and standard reference books directly to landmark judgments and recent parliamentary bills.',
      metrics: '38 NCERTs Synthesized · CSAT Trap Detector · DAF Interview Generator',
      highlights: [
        'Connects static chapters (e.g. Article 163 Governor powers) to live SC rulings',
        'CSAT Paper 2 reading comprehension inference & extreme-word trap drills',
        'Personalized DAF-I & DAF-II interview board question generator',
      ],
      ctaLabel: 'Explore Smart Notes & DAF',
      badgeText: 'NCERTs to Interview',
    },
  ];

  const workflowSteps = [
    {
      step: 'Step 01',
      title: 'Select Your Target Cycle & Syllabus Topic',
      desc: 'Log into your CSE 2026 or 2027 workspace and choose a daily editorial, Prelims PYQ set, or Mains GS question.',
    },
    {
      step: 'Step 02',
      title: 'Practice Under Real Commission Constraints',
      desc: 'Attempt multi-statement Prelims mocks with a live clock or draft Mains answers within strict 150/250-word limits.',
    },
    {
      step: 'Step 03',
      title: 'Receive Instant AI Rubric & Elimination Feedback',
      desc: 'Review missing constitutional articles, topper flowcharts, and elimination logic to compound your marks daily.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              <span>Platform Capabilities</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Built for Prelims, Mains & Interview</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Everything You Need to Clear UPSC CSE—Inside One Unified Workspace
            </h2>
            <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
              Instead of juggling fragmented PDFs, delayed coaching test series, and 4 newspapers, 
              launch the UPSC ZONE AI app to access four purpose-built preparation engines.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onLaunchWorkspaceTool('mains')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Launch Full Web App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2x2 Clean Marketing Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-lg border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Unboxed metadata row */}
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-amber-900">{feat.index}.</span>
                    <span className="font-semibold text-amber-900 uppercase tracking-wider">
                      {feat.category}
                    </span>
                  </div>
                  <span className="text-stone-500 font-mono text-[11px]">{feat.badgeText}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-sm text-stone-600 font-serif-prose leading-relaxed">
                  {feat.description}
                </p>

                {/* Bullet capabilities */}
                <ul className="space-y-2 pt-2 border-t border-stone-100 text-xs sm:text-sm text-stone-700">
                  {feat.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with App Launch Trigger */}
              <div className="pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-stone-500">{feat.metrics}</span>
                <button
                  onClick={() => onLaunchWorkspaceTool(feat.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 group cursor-pointer whitespace-nowrap"
                >
                  <span>{feat.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Secondary Banner: Study Planner + Live Mock */}
        <div className="bg-stone-900 text-stone-100 rounded-lg p-6 sm:p-8 border border-stone-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>Algorithmic Pacing & Readiness</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>CSE 2026 & 2027 Roadmaps</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Custom AI Study Planner & 5-Minute Prelims Elimination Benchmark
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-serif-prose leading-relaxed">
              Whether you are a working professional with 4 hours a day or a full-time aspirant dedicating 10 hours, 
              generate a personalized 3-phase syllabus schedule or test your readiness right now.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onLaunchWorkspaceTool('planner')}
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Build Study Roadmap →
            </button>
            <button
              onClick={onStartLiveMock}
              className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-xs rounded-md border border-stone-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Take 5-Min Quick Mock
            </button>
          </div>
        </div>

        {/* How It Works (3-Step Process) */}
        <div id="how-it-works" className="pt-6 border-t border-stone-200">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-1.5">
              How UPSC ZONE AI Works
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              From Daily Reading to Merit-List Execution in 3 Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-stone-200 space-y-3"
              >
                <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
                  {item.step}
                </div>
                <h4 className="font-display font-bold text-base text-stone-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-serif-prose leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

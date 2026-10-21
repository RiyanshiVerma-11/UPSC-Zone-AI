import React, { useState } from 'react';
import { BookOpen, Network, Compass, FileSpreadsheet, Sparkles, Brain, CheckCircle2, UserCheck, MessageSquare, ArrowRight, RefreshCw } from 'lucide-react';

interface FeatureBentoProps {
  onScrollToSection: (id: string) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

export const FeatureBento: React.FC<FeatureBentoProps> = ({ onScrollToSection, onOpenAuth }) => {
  const [dafState, setDafState] = useState('Uttar Pradesh');
  const [dafDiscipline, setDafDiscipline] = useState('Engineering');
  const [isGeneratingDaf, setIsGeneratingDaf] = useState(false);

  const getDafQuestions = () => {
    if (dafState === 'Uttar Pradesh') {
      return [
        'How would you deploy your technical background to solve groundwater depletion in Western UP sugar belts?',
        'Evaluate the administrative efficacy of the One District One Product (ODOP) scheme in Bundelkhand.',
        'Why choose administrative service after an engineering degree?'
      ];
    } else if (dafState === 'Kerala') {
      return [
        'How can Kerala balance high HDI social spending with fiscal debt limits under FRBM?',
        'What policy innovations would you propose for coastal erosion along the Malabar coast?',
        'How will your technical education prevent bureaucratic inertia in local panchayats?'
      ];
    } else {
      return [
        'Critically analyze regional development disparities in your home state.',
        'What ethical dilemma would you face if instructed by political executives to bypass technical feasibility?',
        'How does your educational background prepare you for district disaster management?'
      ];
    }
  };

  const handleRegenerateDaf = () => {
    setIsGeneratingDaf(true);
    setTimeout(() => setIsGeneratingDaf(false), 500);
  };
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>Holistic Ecosystem</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Prelims to Interview</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Every Phase of the Civil Services Journey, Re-engineered with AI
          </h2>
          <p className="mt-3 text-base text-stone-600 font-serif-prose leading-relaxed">
            From condensing 38 NCERT textbooks into cross-linked concept maps to generating DAF cross-examination questions 
            for the UPSC Personality Test, our ecosystem replaces guesswork with structured clarity.
          </p>
        </div>

        {/* Asymmetric Bento Grid (Section 2.C & Section 1.C compliance) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: NCERT & Smart Notes Knowledge Graph (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-lg border border-stone-200 shadow-xs p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Network className="w-4 h-4 text-amber-800" />
                  <span>Smart Revision & Notes</span>
                </div>
                <span className="text-xs text-stone-400 font-mono">38 NCERTs + 12 Standard Texts</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                Connected Knowledge Graph: Link NCERT Concepts to Contemporary News
              </h3>

              <p className="text-sm text-stone-600 font-serif-prose leading-relaxed">
                Never study static subjects in silos again. When you read about the Governor's discretionary powers under 
                Article 163, UPSC ZONE AI automatically links the relevant Sarkaria Commission recommendations, 
                recent Supreme Court judgments, and 5 related Prelims PYQs from 2017 to 2023.
              </p>

              {/* Visual mockup of the knowledge link */}
              <div className="p-4 bg-stone-50 rounded border border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 bg-white rounded border border-stone-200 shadow-2xs">
                  <div className="text-[10px] text-stone-500 uppercase font-bold">Base Textbook</div>
                  <div className="font-semibold text-stone-900 mt-1">Laxmikanth Ch. 30</div>
                  <div className="text-stone-600 text-[11px] mt-0.5">Governor Discretion (Art. 163)</div>
                </div>
                <div className="p-2.5 bg-white rounded border border-stone-200 shadow-2xs">
                  <div className="text-[10px] text-stone-500 uppercase font-bold">Judicial Precedent</div>
                  <div className="font-semibold text-stone-900 mt-1">Shamsher Singh Case</div>
                  <div className="text-stone-600 text-[11px] mt-0.5">Council of Ministers Advice</div>
                </div>
                <div className="p-2.5 bg-white rounded border border-stone-200 shadow-2xs">
                  <div className="text-[10px] text-stone-500 uppercase font-bold">Current Linkage</div>
                  <div className="font-semibold text-stone-900 mt-1">2024 SC Ruling on Bills</div>
                  <div className="text-stone-600 text-[11px] mt-0.5">Article 200 Timelines</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">Cross-referenced across all 4 GS Papers</span>
              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explore Notes Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: CSAT Aptitude & Logical Reasoning (Span 1) */}
          <div className="md:col-span-1 bg-white rounded-lg border border-stone-200 shadow-xs p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <Brain className="w-4 h-4 text-amber-800" />
                <span>CSAT Paper 2</span>
              </div>

              <h3 className="font-display text-xl font-bold text-stone-900">
                CSAT Passage Inferences & Traps
              </h3>

              <p className="text-sm text-stone-600 font-serif-prose leading-relaxed">
                CSAT has become the graveyard for hundreds of qualified aspirants. Learn to differentiate 
                between "Logical Corollary", "Assumption", and "Extreme Generalization" with interactive comprehension drills.
              </p>

              <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-1.5">
                <div className="font-semibold text-stone-800">Passage Trap Detector:</div>
                <div className="text-stone-600 text-[11px]">
                  Detects absolute words like "solely", "never", and "inevitably" to avoid wrong inference marks.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <button 
                onClick={() => onScrollToSection('prelims-engine')}
                className="text-xs font-semibold text-stone-800 hover:text-stone-950 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Practice CSAT Drills →</span>
              </button>
            </div>
          </div>

          {/* Card 3: Personality Test & DAF Simulator (Span 1) */}
          <div className="md:col-span-1 bg-white rounded-lg border border-stone-200 shadow-xs p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <UserCheck className="w-4 h-4 text-amber-800" />
                  <span>Personality Test</span>
                </div>
                <button
                  onClick={handleRegenerateDaf}
                  className="text-stone-400 hover:text-stone-900 p-1 rounded cursor-pointer"
                  title="Generate new DAF questions"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingDaf ? 'animate-spin' : ''}`} />
                </button>
              </div>

              <h3 className="font-display text-xl font-bold text-stone-900">
                DAF Interview Board Simulation
              </h3>

              {/* Interactive Inputs */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Home State</label>
                  <select
                    value={dafState}
                    onChange={(e) => setDafState(e.target.value)}
                    className="w-full p-1.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800"
                  >
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Bihar">Bihar</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Graduation</label>
                  <select
                    value={dafDiscipline}
                    onChange={(e) => setDafDiscipline(e.target.value)}
                    className="w-full p-1.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Medicine">Medicine</option>
                  </select>
                </div>
              </div>

              {/* Generated Board Question */}
              <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-2">
                <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                  <span>Sample UPSC Board Question:</span>
                </div>
                <p className="text-stone-700 font-serif-prose italic text-[11px] leading-relaxed">
                  "{getDafQuestions()[0]}"
                </p>
                <div className="text-[10px] text-stone-500 border-t border-stone-200/60 pt-1 flex justify-between">
                  <span>Target: Balance of Judgement</span>
                  <span className="text-amber-900 font-semibold">150+ Questions Ready</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-semibold text-stone-800 hover:text-stone-950 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Upload DAF for Full Mock →</span>
              </button>
            </div>
          </div>

          {/* Card 4: Essay 360 Multi-Dimensional Framework Generator (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-lg border border-stone-200 shadow-xs p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <FileSpreadsheet className="w-4 h-4 text-amber-800" />
                  <span>UPSC Essay Paper</span>
                </div>
                <span className="text-xs text-stone-400 font-mono">250 Marks Total</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                Essay Multi-Dimensionality Matrix: PESTEL + Philosophical Expansions
              </h3>

              <p className="text-sm text-stone-600 font-serif-prose leading-relaxed">
                Abstract philosophical essay topics require multi-layered exploration. UPSC ZONE AI transforms 
                complex aphorisms (e.g. <em>"Ships do not sink because of water around them; ships sink because of water that gets into them"</em>) 
                into structured, non-repetitive paragraphs across individual, societal, administrative, national, and civilizational dimensions.
              </p>

              {/* 5-layer dimension chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 bg-stone-50 rounded border border-stone-200 text-center">
                  <div className="font-bold text-stone-900">Individual</div>
                  <div className="text-[10px] text-stone-500">Character & Moral fiber</div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-200 text-center">
                  <div className="font-bold text-stone-900">Administrative</div>
                  <div className="text-[10px] text-stone-500">Institutional integrity</div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-200 text-center">
                  <div className="font-bold text-stone-900">Economic</div>
                  <div className="text-[10px] text-stone-500">Resource governance</div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-200 text-center">
                  <div className="font-bold text-stone-900">Geopolitical</div>
                  <div className="text-[10px] text-stone-500">Sovereign autonomy</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">120+ Exemplar UPSC Topper Essay Outlines</span>
              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View Essay Brainstormer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

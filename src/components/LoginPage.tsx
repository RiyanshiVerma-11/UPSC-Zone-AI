import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  Mail,
  User,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { UpscZoneApi } from '../services/api';

interface LoginPageProps {
  initialMode: 'signin' | 'signup';
  onBackToLanding: () => void;
  onAuthSuccess: (user: { name: string; targetYear: string; optionalSubject: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  initialMode,
  onBackToLanding,
  onAuthSuccess,
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetYear, setTargetYear] = useState('2026');
  const [optionalSubject, setOptionalSubject] = useState('PSIR');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const { displayName } = await UpscZoneApi.authenticate(mode, {
        fullName,
        email,
        password,
        targetYear,
        optionalSubject,
      });
      onAuthSuccess({
        name: displayName,
        targetYear,
        optionalSubject,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInstantDemoAccess = () => {
    onAuthSuccess({
      name: 'Aarav Mishra',
      targetYear: '2026',
      optionalSubject: 'PSIR',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      {/* Top Bar */}
      <header className="h-16 px-4 sm:px-8 border-b border-stone-200 bg-white flex items-center justify-between">
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Page</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-xs">
            UZ
          </div>
          <span className="font-display font-bold text-base text-stone-900">
            UPSC ZONE AI
          </span>
        </div>

        <div className="text-xs text-stone-500 hidden sm:block">
          CSE 2026–2027 Aspirant Portal
        </div>
      </header>

      {/* Main Split Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Editorial / Trust Panel */}
        <div className="hidden lg:flex lg:col-span-5 bg-stone-900 text-stone-100 p-12 flex-col justify-between border-r border-stone-800">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              UPSC Civil Services Command Center
            </div>
            <h1 className="font-display text-3xl font-bold text-white leading-snug">
                Enter Your Personal Civil Services Preparation Workspace
            </h1>
            <p className="text-sm text-stone-300 font-serif-prose leading-relaxed">
              Access instant 5-factor Mains answer grading, 12-year Prelims PYQ elimination simulators, 
              and daily 6:00 AM syllabus-mapped editorials from The Hindu and PIB.
            </p>

            <div className="space-y-3 pt-4 border-t border-stone-800 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>5 Free Mains Evaluations & Official Ruled Booklet View daily</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2013–2024 Prelims PYQ Elimination & Timed Mock Simulator</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Personalized CSE 2026 / 2027 Syllabus Roadmap & DAF Generator</span>
              </div>
            </div>
          </div>

          {/* Topper Quote */}
          <div className="p-5 rounded-lg bg-stone-800/80 border border-stone-700 space-y-3">
            <p className="text-xs text-stone-200 font-serif-prose italic leading-relaxed">
              "UPSC ZONE AI evaluated my daily GS-2 and GS-4 answers in 40 seconds, pinpointing missing constitutional articles and landmark judgments. My Mains score jumped by 54 marks."
            </p>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white">Aditi Sharma</span>
                <span className="text-stone-400"> · AIR 24, UPSC CSE (IAS)</span>
              </div>
              <span className="text-amber-300 font-mono text-[11px]">+54 Marks in GS</span>
            </div>
          </div>
        </div>

        {/* Right Authentication Form Panel */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12">
          <div className="max-w-md w-full space-y-6">
            
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                {mode === 'signin' ? 'Sign In to Your Workspace' : 'Create Your Aspirant Profile'}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-serif-prose">
                {mode === 'signin'
                  ? 'Resume your daily Mains answer practice, PYQ mocks, and editorial revision.'
                  : 'Configure your target CSE attempt year and optional subject to begin.'}
              </p>
            </div>

            {/* Instant 1-Click Demo Access for Fast Exploration */}
            <div className="p-4 rounded-lg bg-amber-50/90 border border-amber-200 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                  <span>Instant Preview Access</span>
                </span>
                <span className="text-[11px] text-amber-800 font-mono">No password needed</span>
              </div>
              <button
                type="button"
                onClick={handleInstantDemoAccess}
                className="w-full py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Launch App with Demo Aspirant Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="relative flex py-1 items-center">
              <div className="grow border-t border-stone-200" />
              <span className="shrink mx-3 text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Or continue with email
              </span>
              <div className="grow border-t border-stone-200" />
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex p-1 bg-stone-200/70 rounded-md text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setMode('signin');
                  setError('');
                }}
                className={`flex-1 py-2 rounded transition-colors cursor-pointer ${
                  mode === 'signin' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setError('');
                }}
                className={`flex-1 py-2 rounded transition-colors cursor-pointer ${
                  mode === 'signup' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                New Aspirant Registration
              </button>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ananya Sen"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-900"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aspirant@upsczone.ai"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
              </div>

              {mode === 'signup' && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Target CSE Cycle
                    </label>
                    <select
                      value={targetYear}
                      onChange={(e) => setTargetYear(e.target.value)}
                      className="w-full p-2 text-xs border border-stone-300 rounded-md bg-stone-50"
                    >
                      <option value="2026">UPSC CSE 2026</option>
                      <option value="2027">UPSC CSE 2027</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Optional Subject
                    </label>
                    <select
                      value={optionalSubject}
                      onChange={(e) => setOptionalSubject(e.target.value)}
                      className="w-full p-2 text-xs border border-stone-300 rounded-md bg-stone-50"
                    >
                      <option value="PSIR">PSIR</option>
                      <option value="Sociology">Sociology</option>
                      <option value="Geography">Geography</option>
                      <option value="History">History</option>
                      <option value="Anthropology">Anthropology</option>
                      <option value="Public Administration">Public Admin</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-50"
              >
                {isSubmitting
                  ? 'Authenticating...'
                  : mode === 'signin'
                  ? 'Sign In & Launch Workspace'
                  : 'Create Profile & Launch Workspace'}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="w-4 h-4 text-stone-400" />
              <span>256-bit encrypted session · Grounded in official UPSC syllabi</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

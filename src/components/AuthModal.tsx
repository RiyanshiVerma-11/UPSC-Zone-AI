import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Lock, Mail, User, BookOpen } from 'lucide-react';
import { UpscZoneApi } from '../services/api';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'signin' | 'signup';
  onLoginSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode,
  onLoginSuccess
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [optionalSubject, setOptionalSubject] = useState('PSIR');
  const [targetYear, setTargetYear] = useState('2026');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide your email and password.');
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
      onLoginSuccess(displayName);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-lg border border-stone-200 shadow-xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-amber-600 text-stone-950 font-bold text-xs flex items-center justify-center font-serif">
              UZ
            </div>
            <span className="font-display font-semibold text-sm">
              {mode === 'signin' ? 'Sign In to UPSC ZONE AI' : 'Create Aspirant Account'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          
          {/* Mode Switcher Tabs */}
          <div className="flex p-1 bg-stone-100 rounded-md text-xs font-semibold">
            <button
              onClick={() => { setMode('signin'); setError(''); }}
              className={`flex-1 py-1.5 rounded transition-colors cursor-pointer ${
                mode === 'signin' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode('signup'); setError(''); }}
              className={`flex-1 py-1.5 rounded transition-colors cursor-pointer ${
                mode === 'signup' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
              }`}
            >
              New Aspirant Registration
            </button>
          </div>

          {error && (
            <div className="p-2.5 bg-red-50 border border-red-200 text-red-800 text-xs rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
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
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aspirant@gmail.com"
                  className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
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
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">
                    Target CSE
                  </label>
                  <select
                    value={targetYear}
                    onChange={(e) => setTargetYear(e.target.value)}
                    className="w-full p-2 text-xs border border-stone-300 rounded-md bg-stone-50"
                  >
                    <option value="2026">CSE 2026</option>
                    <option value="2027">CSE 2027</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">
                    Optional
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
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? 'Verifying Credentials...' : mode === 'signin' ? 'Sign In' : 'Create Free Account'}
            </button>
          </form>

          <div className="pt-2 text-center text-[11px] text-stone-500">
            {mode === 'signin' ? (
              <span>
                Don't have an account yet?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-amber-900 font-semibold hover:underline cursor-pointer"
                >
                  Register here
                </button>
              </span>
            ) : (
              <span>
                Already preparing with us?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-amber-900 font-semibold hover:underline cursor-pointer"
                >
                  Sign in here
                </button>
              </span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onLaunchApp: () => void;
  onScrollToSection: (id: string) => void;
  activeSection: string;
  isAuthenticated?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onLaunchApp,
  onScrollToSection,
  activeSection,
  isAuthenticated,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'features', label: 'Key Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'rankers', label: 'Topper Proof' },
    { id: 'comparison', label: 'Why UPSC ZONE AI' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Strict Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with clean insignia */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); handleNavClick('top'); }}
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 rounded"
        >
          <div className="w-8 h-8 rounded bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-sm tracking-wider border border-amber-900/30 shadow-xs">
            UZ
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
            UPSC ZONE AI
          </span>
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`hover:text-stone-950 transition-colors py-1 relative cursor-pointer ${
                activeSection === link.id ? 'text-amber-900 font-semibold' : ''
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-800 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Sign In + Launch App */}
        <div className="flex items-center gap-3">
          {!isAuthenticated && (
            <button
              onClick={() => onOpenAuth('signin')}
              className="hidden sm:inline-flex text-xs font-semibold text-stone-700 hover:text-stone-950 px-3 py-2 rounded transition-colors cursor-pointer"
            >
              Sign In
            </button>
          )}
          <button
            onClick={onLaunchApp}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-800"
          >
            <span>{isAuthenticated ? 'Enter Workspace' : 'Launch App'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-1 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 rounded-md hover:bg-stone-100 hover:text-stone-950 transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('signin'); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer"
            >
              Sign In to Your Account
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onLaunchApp(); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md cursor-pointer"
            >
              Launch UPSC ZONE AI App →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

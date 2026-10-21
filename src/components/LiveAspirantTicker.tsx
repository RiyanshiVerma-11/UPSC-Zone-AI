import React, { useState, useEffect } from 'react';
import { Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const LiveAspirantTicker: React.FC = () => {
  const activities = [
    { city: 'Old Rajinder Nagar, Delhi', action: 'Evaluated GS-2 Fiscal Federalism answer (Score: 10.5/15)', time: '12s ago' },
    { city: 'Prayagraj, UP', action: 'Mastered Article 368 Prelims elimination trap', time: '34s ago' },
    { city: 'Bengaluru, Karnataka', action: 'Generated 4-Hour Working Professional Study Roadmap', time: '1m ago' },
    { city: 'Pune, Maharashtra', action: 'Saved The Hindu Editorial Mind Map to Personal Notes', time: '2m ago' },
    { city: 'Hyderabad, Telangana', action: 'Completed 5-Question GS-1 Live Mock Simulator', time: '3m ago' },
    { city: 'Jaipur, Rajasthan', action: 'Evaluated Ethics Case Study on Administrative Discretion', time: '4m ago' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % activities.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activities.length]);

  const current = activities[currentIndex];

  return (
    <div className="bg-stone-100 border-y border-stone-200 py-2.5 px-4 text-xs text-stone-600 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 shrink-0 text-amber-900 font-semibold text-[11px] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Aspirant Activity:</span>
        </div>

        <div className="flex-1 truncate transition-opacity duration-300">
          <span className="font-semibold text-stone-900">{current.city}</span>
          <span className="text-stone-400 mx-1.5">·</span>
          <span className="text-stone-700 font-serif-prose">{current.action}</span>
          <span className="text-stone-400 ml-2 font-mono text-[10px]">({current.time})</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-stone-500 text-[11px] shrink-0 font-medium">
          <Users className="w-3.5 h-3.5 text-stone-400" />
          <span>842 Aspirants Active Now</span>
        </div>

      </div>
    </div>
  );
};

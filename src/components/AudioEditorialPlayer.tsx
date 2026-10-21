import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, FastForward, RotateCcw, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export const AudioEditorialPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38); // initial percent
  const [speed, setSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [activeSegment, setActiveSegment] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1 * speed;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const cycleSpeed = () => {
    if (speed === 1) setSpeed(1.25);
    else if (speed === 1.25) setSpeed(1.5);
    else setSpeed(1);
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-lg p-5 border border-stone-800 shadow-md space-y-4">
      
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
            Daily 5-Min UPSC Audio Brief
          </span>
        </div>
        <div className="flex items-center gap-2 text-stone-400">
          <Volume2 className="w-3.5 h-3.5" />
          <span className="font-mono text-[11px]">AI Synthesis Audio</span>
        </div>
      </div>

      {/* Episode Title */}
      <div>
        <h4 className="font-display font-semibold text-white text-sm">
          Today's Core Brief: Inter-State River Water Disputes & EU CBAM Tariffs
        </h4>
        <p className="text-xs text-stone-400 mt-1 font-serif-prose">
          Synthesized from The Hindu and Indian Express editorial columns for GS-2 & GS-3.
        </p>
      </div>

      {/* Animated Waveform Visualization */}
      <div className="h-8 flex items-center justify-between gap-1 px-1">
        {[20, 45, 75, 30, 90, 60, 40, 80, 55, 35, 95, 70, 40, 65, 85, 30, 50, 75, 90, 40, 60, 80, 45, 25, 70, 95, 60, 40, 75, 50].map((h, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-200 ${
              (i / 30) * 100 <= progress
                ? 'bg-amber-400'
                : 'bg-stone-700'
            }`}
            style={{
              height: isPlaying ? `${Math.max(15, (h * (0.8 + Math.random() * 0.4)))}%` : `${h * 0.6}%`
            }}
          />
        ))}
      </div>

      {/* Progress Slider */}
      <div className="space-y-1">
        <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          setProgress((clickX / rect.width) * 100);
        }}>
          <div 
            className="bg-amber-500 h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-stone-400 font-mono">
          <span>02:14</span>
          <span>05:30 Total</span>
        </div>
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setProgress(Math.max(0, progress - 10))}
            className="p-1.5 rounded text-stone-400 hover:text-white transition-colors cursor-pointer"
            title="Rewind 10s"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center font-bold transition-transform active:scale-95 cursor-pointer shadow-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-stone-950" /> : <Play className="w-4 h-4 fill-stone-950 ml-0.5" />}
          </button>
        </div>

        {/* Speed toggle */}
        <button
          onClick={cycleSpeed}
          className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs cursor-pointer border border-stone-700"
        >
          {speed}x Speed
        </button>

        <span className="text-[11px] text-stone-400">
          Listen while commuting or walking
        </span>
      </div>

    </div>
  );
};

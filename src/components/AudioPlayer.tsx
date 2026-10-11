import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { dhakAudio } from '../utils/audioService';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.65);

  useEffect(() => {
    const unsubscribe = dhakAudio.subscribe((playing, vol) => {
      setIsPlaying(playing);
      setVolume(vol);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    dhakAudio.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    dhakAudio.setVolume(val);
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border backdrop-blur-md transition-all shrink-0 ${
        isPlaying
          ? 'bg-[#b3261e]/25 border-[#ffd98a]'
          : 'bg-[#11152e]/70 border-[#c9a24b]/20 hover:border-[#c9a24b]/50'
      }`}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center gap-1.5 bg-transparent border-0 cursor-pointer font-ui text-xs sm:text-sm font-medium p-0"
        title={isPlaying ? 'ঢাকের আওয়াজ বন্ধ করুন (Mute Dhak)' : 'ঢাকের আওয়াজ বাজান (Play Dhak)'}
        aria-label={isPlaying ? 'ঢাকের আওয়াজ বন্ধ করুন (Mute Dhak)' : 'ঢাকের আওয়াজ বাজান (Play Dhak)'}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="text-[#ffd98a] animate-pulse" />
            <span className="hidden sm:inline font-bn text-[#ffd98a] tracking-wide">ঢাক বাজছে...</span>
          </>
        ) : (
          <>
            <VolumeX size={16} className="text-[#efe3cc]/70" />
            <span className="hidden sm:inline font-bn text-[#efe3cc] tracking-wide">ঢাকের আওয়াজ</span>
          </>
        )}
      </button>

      {/* Animated Visual Equalizer Bars */}
      {isPlaying && (
        <div className="flex items-center gap-[2px] h-3.5">
          <span className="w-[3px] h-full bg-[#ffd98a] rounded-sm animate-pulse" />
          <span className="w-[3px] h-2/3 bg-[#ff9d5c] rounded-sm animate-pulse delay-75" />
          <span className="w-[3px] h-5/6 bg-[#ffd98a] rounded-sm animate-pulse delay-150" />
        </div>
      )}

      {/* Volume slider (Hidden on mobile) */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={handleVolumeChange}
        className="hidden md:inline-block w-12 h-1 accent-[#c9a24b] cursor-pointer opacity-70 hover:opacity-100"
        title="Volume"
        aria-label="Dhak Volume"
      />
    </div>
  );
};

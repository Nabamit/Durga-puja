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
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.35rem 0.85rem',
        background: isPlaying ? 'rgba(179, 38, 30, 0.28)' : 'rgba(17, 21, 46, 0.7)',
        border: `1px solid ${isPlaying ? 'var(--gold-light)' : 'var(--ink-border)'}`,
        borderRadius: '9999px',
        backdropFilter: 'blur(8px)',
        transition: 'var(--transition-smooth)',
      }}
    >
      <button
        type="button"
        onClick={handleToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: 'none',
          border: 'none',
          color: isPlaying ? 'var(--gold-light)' : 'var(--paper)',
          cursor: 'pointer',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.82rem',
          fontWeight: 500,
        }}
        title={isPlaying ? 'ঢাকের আওয়াজ বন্ধ করুন (Mute Dhak)' : 'ঢাকের আওয়াজ বাজান (Play Dhak)'}
        aria-label={isPlaying ? 'ঢাকের আওয়াজ বন্ধ করুন (Mute Dhak)' : 'ঢাকের আওয়াজ বাজান (Play Dhak)'}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="flicker" color="#ffd98a" />
            <span className="font-bn" style={{ letterSpacing: '0.02em', color: '#ffd98a' }}>ঢাক বাজছে...</span>
          </>
        ) : (
          <>
            <VolumeX size={16} opacity={0.65} />
            <span className="font-bn" style={{ letterSpacing: '0.02em' }}>ঢাকের আওয়াজ</span>
          </>
        )}
      </button>

      {/* Animated Visual Equalizer Bars */}
      {isPlaying && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px' }}>
          <span style={{ width: '3px', height: '100%', background: '#ffd98a', borderRadius: '1px', animation: 'flicker 0.4s infinite alternate' }} />
          <span style={{ width: '3px', height: '65%', background: '#ff9d5c', borderRadius: '1px', animation: 'flicker 0.7s infinite alternate' }} />
          <span style={{ width: '3px', height: '85%', background: '#ffd98a', borderRadius: '1px', animation: 'flicker 0.5s infinite alternate' }} />
        </div>
      )}

      {/* Volume slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={handleVolumeChange}
        style={{
          width: '54px',
          height: '4px',
          accentColor: '#c9a24b',
          cursor: 'pointer',
          opacity: isPlaying ? 0.9 : 0.4,
        }}
        title="Volume"
        aria-label="Dhak Volume"
      />
    </div>
  );
};

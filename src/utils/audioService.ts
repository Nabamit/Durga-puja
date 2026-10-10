// Global Audio Manager for Authentic Duyerpally Dhak Sound

type AudioListener = (isPlaying: boolean, volume: number) => void;

class DhakAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlayingState: boolean = false;
  private volumeState: number = 0.65;
  private listeners: Set<AudioListener> = new Set();
  private fadeInterval: number | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio('/audio/dhak.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = this.volumeState;

      // Handle audio errors gracefully
      this.audio.addEventListener('error', (e) => {
        console.warn('Audio playback notice:', e);
      });
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlayingState, this.volumeState);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlayingState, this.volumeState));
  }

  public async play(): Promise<boolean> {
    this.initAudio();
    if (!this.audio) return false;

    try {
      if (this.fadeInterval) clearInterval(this.fadeInterval);
      this.audio.volume = 0;
      await this.audio.play();
      this.isPlayingState = true;
      this.notify();

      // Smooth volume fade-in
      const targetVol = this.volumeState;
      const startTime = performance.now();
      const fadeDuration = 1200;

      this.fadeInterval = window.setInterval(() => {
        if (!this.audio) return;
        const progress = Math.min(1, (performance.now() - startTime) / fadeDuration);
        this.audio.volume = progress * targetVol;
        if (progress >= 1) {
          if (this.fadeInterval) clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
      }, 50);

      return true;
    } catch {
      this.isPlayingState = false;
      this.notify();
      return false;
    }
  }

  public pause(): void {
    if (!this.audio) return;

    if (this.fadeInterval) clearInterval(this.fadeInterval);
    const startVol = this.audio.volume;
    const startTime = performance.now();
    const fadeDuration = 500;

    this.fadeInterval = window.setInterval(() => {
      if (!this.audio) return;
      const progress = Math.min(1, (performance.now() - startTime) / fadeDuration);
      this.audio.volume = Math.max(0, startVol * (1 - progress));
      if (progress >= 1) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        this.audio.pause();
        this.isPlayingState = false;
        this.notify();
      }
    }, 40);
  }

  public toggle(): void {
    if (this.isPlayingState) {
      this.pause();
    } else {
      this.play();
    }
  }

  public setVolume(vol: number): void {
    this.volumeState = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volumeState;
    }
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlayingState;
  }

  public getVolume(): number {
    return this.volumeState;
  }
}

export const dhakAudio = new DhakAudioManager();

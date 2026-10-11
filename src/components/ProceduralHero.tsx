import React, { useMemo } from 'react';
import { COMMITTEE_METADATA } from '../data/committeeMembers';

interface ProceduralHeroProps {
  onNavigate: (sectionId: string) => void;
}

// Howrah Bridge Parabolic Truss Matrix from Pujo Smriti
const Wd = [
  [0, 640], [180, 550], [360, 420], [450, 372], [540, 376],
  [680, 450], [800, 470], [920, 450], [1060, 376], [1150, 372],
  [1240, 420], [1420, 550], [1600, 640]
];
const Gd = 640;

const Kd = (e: number) => {
  for (let t = 0; t < Wd.length - 1; t++) {
    const [n, r] = Wd[t];
    const [i, a] = Wd[t + 1];
    if (e >= n && e <= i) return r + ((a - r) * (e - n)) / (i - n);
  }
  return Gd;
};

// Deterministic PRNG matching Pujo Smriti
const qd = (seed: number) => {
  let s = seed;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

// Quadratic Bezier Interpolation for Festoon Strings
function Jd(p0: [number, number], p1: [number, number], p2: [number, number], t: number): [number, number] {
  const i = (1 - t) * (1 - t);
  const a = 2 * (1 - t) * t;
  const o = t * t;
  return [i * p0[0] + a * p1[0] + o * p2[0], i * p0[1] + a * p1[1] + o * p2[1]];
}

export const ProceduralHero: React.FC<ProceduralHeroProps> = ({ onNavigate }) => {
  const vectorScene = useMemo(() => {
    const rng = qd(42);

    // 70 Twinkling Stars
    const stars = Array.from({ length: 70 }, () => ({
      x: rng() * 1600,
      y: rng() * 380,
      r: 0.5 + rng() * 1.3,
      d: rng() * 4,
    }));

    // Skyline Rooftops & Tanks
    const roofs: Array<{ x: number; w: number; h: number; tank: boolean }> = [];
    for (let t = -20; t < 1620; ) {
      const w = 46 + rng() * 70;
      roofs.push({
        x: t,
        w,
        h: 26 + rng() * 62,
        tank: rng() > 0.72,
      });
      t += w + 2;
    }

    // Bridge Truss Lattice
    const truss: string[] = [];
    for (let e = 0; e < 1600; e += 40) {
      truss.push(`M${e} ${Gd}V${Kd(e)}`, `M${e} ${Gd}L${e + 40} ${Kd(e + 40)}`, `M${e + 40} ${Gd}L${e} ${Kd(e)}`);
    }

    // Bridge Deck Road Lights
    const deckLights = Array.from({ length: 40 }, (_, i) => 20 + i * 40);

    // Hanging Festive Bulb Strings across Bamboo Poles
    const strings: Array<{ p0: [number, number]; p1: [number, number]; p2: [number, number] }> = [
      { p0: [-20, 46], p1: [400, 200], p2: [800, 58] },
      { p0: [800, 58], p1: [1200, 200], p2: [1620, 46] },
    ];

    const bulbs = strings.flatMap((t, n) =>
      Array.from({ length: 15 }, (_, i) => {
        const [x, y] = Jd(t.p0, t.p1, t.p2, (i + 0.5) / 15);
        return {
          x,
          y,
          c: ['#ffd98a', '#ff9d5c', '#faf3e3', '#ff6a4d'][(i + n) % 4],
          d: rng() * 3,
        };
      })
    );

    // Shimmering Hooghly River Water Reflections
    const ripples = Array.from({ length: 26 }, () => ({
      x: 560 + rng() * 480,
      y: 664 + rng() * 200,
      w: 20 + rng() * 90,
      d: rng() * 4,
    }));

    // Floating Diyas on Sacred River
    const diyas = Array.from({ length: 9 }, () => ({
      x: 120 + rng() * 1360,
      y: 720 + rng() * 150,
      d: rng() * 3,
    }));

    return { stars, roofs, truss, deckLights, bulbs, ripples, diyas, strings };
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        height: '100dvh',
        overflow: 'hidden',
        backgroundColor: '#05060f',
      }}
      aria-label="Duyerpally Hero Scene"
    >
      {/* 100% Mathematical SVG Artwork (Exact Pujo-Smriti Geometry) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMin slice"
          style={{ width: '100%', height: '100%', display: 'block' }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            {/* Sky Twilight Gradient */}
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#05060f" />
              <stop offset="0.45" stopColor="#141335" />
              <stop offset="0.72" stopColor="#4a1d33" />
              <stop offset="1" stopColor="#a5471f" />
            </linearGradient>

            {/* Hooghly River Gradient */}
            <linearGradient id="river" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a1418" />
              <stop offset="1" stopColor="#07080f" />
            </linearGradient>

            {/* Central Halo Aura Glow */}
            <radialGradient id="glow" cx="50%" cy="46%" r="42%">
              <stop offset="0" stopColor="#ff9a3c" stopOpacity="0.6" />
              <stop offset="0.55" stopColor="#c8481f" stopOpacity="0.18" />
              <stop offset="1" stopColor="#c8481f" stopOpacity="0" />
            </radialGradient>

            {/* Sanctum Terracotta Arch Gradient */}
            <linearGradient id="arch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3a0f16" />
              <stop offset="0.6" stopColor="#7a1a17" />
              <stop offset="1" stopColor="#20090c" />
            </linearGradient>

            {/* Natural Bamboo Gradient */}
            <linearGradient id="bamboo" x1="0" x2="1">
              <stop offset="0" stopColor="#2a1c0f" />
              <stop offset="0.5" stopColor="#7a5a2c" />
              <stop offset="1" stopColor="#2a1c0f" />
            </linearGradient>

            <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="blur2">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>

            {/* Sacred Divine Aura Gradient */}
            <radialGradient id="divineAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd98a" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#ff9a3c" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ff9a3c" stopOpacity="0" />
            </radialGradient>

            {/* Sacred Eye Vector Path */}
            <path id="eye" d="M-62 4C-30-26 34-30 66-6 34 14-26 24-62 4Z" />
          </defs>

          {/* 1. Sky Canvas */}
          <rect width="1600" height="900" fill="url(#sky)" />

          {/* 2. Twinkling Stars */}
          {vectorScene.stars.map((s, idx) => (
            <circle
              key={idx}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#fff6dc"
              className="twinkle"
              style={{ animationDelay: `${s.d}s` }}
              opacity="0.8"
            />
          ))}

          {/* 3. Central Divine Glow Aura */}
          <rect width="1600" height="900" fill="url(#glow)" />

          {/* 4. Kolkata Skyline Buildings & Rooftops */}
          <g fill="#0b0a18" opacity="0.95">
            {vectorScene.roofs.map((r, idx) => (
              <g key={idx}>
                <rect x={r.x} y={Gd - r.h - 20} width={r.w} height={r.h + 20} />
                <rect x={r.x - 2} y={Gd - r.h - 24} width={r.w + 4} height="5" />
                {r.tank && <rect x={r.x + r.w * 0.3} y={Gd - r.h - 44} width={r.w * 0.3} height="20" rx="3" />}
              </g>
            ))}
          </g>

          {/* 5. Illuminated City Windows */}
          <g fill="#ffcf7a" opacity="0.55">
            {vectorScene.roofs.map((r, idx) =>
              idx % 2 === 1 ? (
                <rect
                  key={idx}
                  x={r.x + r.w * 0.25}
                  y={Gd - r.h - 6}
                  width="6"
                  height="9"
                  className="twinkle"
                  style={{ animationDelay: `${(idx % 5) * 0.7}s` }}
                />
              ) : null
            )}
          </g>

          {/* 6. Howrah Bridge Truss Lattice & Road Deck */}
          <g stroke="#090913" strokeWidth="3" fill="none" opacity="0.97">
            <path d={vectorScene.truss.join('')} strokeWidth="2.2" />
            <path d={`M${Wd.map((p) => p.join(' ')).join('L')}`} strokeWidth="6" />
            <path d={`M0 ${Gd}H1600`} strokeWidth="9" />
          </g>

          {/* 7. Bridge Deck Lamps */}
          <g fill="#ffd47a">
            {vectorScene.deckLights.map((x) => (
              <circle key={x} cx={x} cy={634} r="2.6" opacity="0.9" />
            ))}
          </g>

          {/* 8. Hooghly River Layer */}
          <rect y={644} width="1600" height="260" fill="url(#river)" />

          {/* 9. Shimmering River Water Reflections */}
          <g fill="#ffb457">
            {vectorScene.ripples.map((rp, idx) => (
              <rect
                key={idx}
                x={rp.x}
                y={rp.y}
                width={rp.w}
                height="2.4"
                rx="1.2"
                className="shimmer"
                style={{ animationDelay: `${rp.d}s` }}
              />
            ))}
          </g>

          {/* 10. Central Sanctum Arch with Maa Durga's Sacred Eyes */}
          <g>
            {/* Ground Arch Shadow */}
            <ellipse cx="800" cy="640" rx="260" ry="18" fill="#000" opacity="0.5" filter="url(#blur6)" />
            {/* Outer Decorative Circle Halo */}
            <circle cx="800" cy="350" r="215" fill="none" stroke="#e0c076" strokeOpacity="0.25" strokeWidth="2" />
            {/* Main Arch Wall */}
            <path d="M596 648V340Q596 190 800 84Q1004 190 1004 340V648Z" fill="#1a0a0d" stroke="#c9a24b" strokeWidth="5" />
            {/* Outer Dotted Gold Arch */}
            <path
              d="M596 648V340Q596 190 800 84Q1004 190 1004 340V648Z"
              fill="none"
              stroke="#e0c076"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="0 16"
            />
            {/* Deep Terracotta Inner Arch */}
            <path d="M624 640V342Q624 208 800 116Q976 208 976 342V640Z" fill="url(#arch)" />
            {/* Inner Gold Pinstripe */}
            <path d="M646 640V346Q646 226 800 144Q954 226 954 346V640Z" fill="none" stroke="#c9a24b" strokeOpacity="0.55" strokeWidth="2" />

            {/* Soft Stationary Divine Halo behind Eyes */}
            <ellipse cx="800" cy="360" rx="170" ry="85" fill="url(#divineAura)" />

            {/* Sacred Eyes Group — Completely Stationary & Divine */}
            <g>
              {/* Left Eye */}
              <g transform="translate(722 372)">
                <use href="#eye" fill="#f8f1e0" />
                <use href="#eye" fill="none" stroke="#100708" strokeWidth="5" strokeLinejoin="round" />
                {/* Bold Upper Eyelid Kohl Stroke (Kumartuli style) */}
                <path d="M-62 4C-30 -26 34 -30 66 -6" fill="none" stroke="#100708" strokeWidth="6.5" strokeLinecap="round" />
                {/* Perfectly Centered Iris & Pupil */}
                <circle cx="2" cy="-4.5" r="14" fill="#180e0c" stroke="#3d1e14" strokeWidth="1" />
                <circle cx="2" cy="-4.5" r="8.5" fill="#080303" />
                {/* Divine Light Catch Reflections */}
                <circle cx="6" cy="-8.5" r="3.2" fill="#fff" opacity="0.95" />
                <circle cx="-1" cy="-1.5" r="1.4" fill="#fff" opacity="0.5" />
                {/* Graceful Winged Eyeliner (Patal-chera) */}
                <path d="M-62 4Q-82 2 -98 -2" stroke="#100708" strokeWidth="5" strokeLinecap="round" fill="none" />
              </g>

              {/* Right Eye (Mirrored) */}
              <g transform="translate(878 372) scale(-1 1)">
                <use href="#eye" fill="#f8f1e0" />
                <use href="#eye" fill="none" stroke="#100708" strokeWidth="5" strokeLinejoin="round" />
                {/* Bold Upper Eyelid Kohl Stroke (Kumartuli style) */}
                <path d="M-62 4C-30 -26 34 -30 66 -6" fill="none" stroke="#100708" strokeWidth="6.5" strokeLinecap="round" />
                {/* Perfectly Centered Iris & Pupil */}
                <circle cx="2" cy="-4.5" r="14" fill="#180e0c" stroke="#3d1e14" strokeWidth="1" />
                <circle cx="2" cy="-4.5" r="8.5" fill="#080303" />
                {/* Divine Light Catch Reflections */}
                <circle cx="6" cy="-8.5" r="3.2" fill="#fff" opacity="0.95" />
                <circle cx="-1" cy="-1.5" r="1.4" fill="#fff" opacity="0.5" />
                {/* Graceful Winged Eyeliner (Patal-chera) */}
                <path d="M-62 4Q-82 2 -98 -2" stroke="#100708" strokeWidth="5" strokeLinecap="round" fill="none" />
              </g>
            </g>

            {/* Sacred Eyebrows Arch */}
            <path d="M710 334Q730 314 800 312Q870 314 890 334" stroke="#100708" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.8" />

            {/* Sacred Third Eye (Trinayana) & Vermilion Bindu */}
            <ellipse cx="800" cy="298" rx="8" ry="18" fill="none" stroke="#e0c076" strokeWidth="1.6" />
            <circle cx="800" cy="298" r="11" fill="#b3261e" />
            <circle cx="800" cy="298" r="16" fill="none" stroke="#e0c076" strokeWidth="1.4" opacity="0.75" />
            <circle cx="800" cy="298" r="3" fill="#ffd98a" />

            {/* Flickering Diya Row at Arch Base */}
            <g fill="#ffd47a" className="flicker">
              {Array.from({ length: 9 }, (_, t) => (
                <path key={t} d={`M${652 + t * 37.5} 628q5-10 0-18q-5 8 0 18Z`} />
              ))}
            </g>

            {/* Wooden Base Threshold */}
            <rect x="590" y="646" width="420" height="14" fill="#2a1408" stroke="#c9a24b" strokeOpacity="0.5" />
          </g>

          {/* 11. Floating River Diyas */}
          {vectorScene.diyas.map((d, idx) => (
            <g key={idx} transform={`translate(${d.x} ${d.y})`} className="floaty" style={{ animationDelay: `${d.d}s` }}>
              <ellipse cx="0" cy="0" rx="34" ry="10" fill="#ff9a3c" opacity="0.25" filter="url(#blur6)" />
              <path d="M-8 0Q0 6 8 0Q6 6 0 7Q-6 6 -8 0Z" fill="#7a3a17" />
              <path d="M0-12Q4-5 0-1Q-4-5 0-12Z" fill="#ffd98a" className="flicker" />
            </g>
          ))}

          {/* 12. Traditional Bamboo Pillars on Screen Edges */}
          {[46, 1554].map((e) => (
            <g key={e}>
              <rect x={e - 11} y="0" width="22" height="900" fill="url(#bamboo)" />
              {Array.from({ length: 9 }, (_, n) => (
                <rect key={n} x={e - 13} y={70 + n * 100} width="26" height="7" rx="2" fill="#2a1c0f" />
              ))}
            </g>
          ))}
          {/* Diagonal Bamboo Roof Struts */}
          <path d="M46 0L250 120M1554 0L1350 120" stroke="url(#bamboo)" strokeWidth="14" strokeLinecap="round" />

          {/* 13. Hanging Festoon Wires */}
          {vectorScene.strings.map((str, idx) => (
            <path
              key={idx}
              d={`M${str.p0[0]} ${str.p0[1]}Q${str.p1[0]} ${str.p1[1]} ${str.p2[0]} ${str.p2[1]}`}
              stroke="#120a08"
              strokeWidth="2.4"
              fill="none"
            />
          ))}

          {/* 14. Festoon Bulbs Glowing along the Curves */}
          {vectorScene.bulbs.map((b, idx) => (
            <g key={idx} className="bulb-glow" style={{ animationDelay: `${b.d}s` }}>
              <circle cx={b.x} cy={b.y + 8} r="16" fill={b.c} opacity="0.5" filter="url(#blur6)" />
              <circle cx={b.x} cy={b.y + 8} r="5" fill={b.c} />
            </g>
          ))}

          {/* 15. Kash Phul Reeds Swaying on Both Riverbanks */}
          {[[90, 900], [150, 900], [1450, 900], [1510, 900]].map(([e, t], n) => (
            <g key={n} className="sway" style={{ animationDelay: `${n * 0.8}s` }}>
              {Array.from({ length: 6 }, (_, r) => (
                <g key={r}>
                  <path
                    d={`M${e + r * 8} ${t}Q${e + (r - 3) * 22} ${t - 120} ${e + (r - 3) * 30} ${t - 190 - (r % 3) * 22}`}
                    stroke="#d9d0b8"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.75"
                  />
                  <ellipse
                    cx={e + (r - 3) * 30}
                    cy={t - 200 - (r % 3) * 22}
                    rx="9"
                    ry="40"
                    transform={`rotate(${(r - 3) * 8} ${e + (r - 3) * 30} ${t - 200 - (r % 3) * 22})`}
                    fill="#f4efe0"
                    opacity="0.82"
                    filter="url(#blur2)"
                  />
                </g>
              ))}
            </g>
          ))}
        </svg>
      </div>

      {/* Atmospheric Vignette Gradient Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(5,6,14,0.92) 0%, rgba(5,6,14,0.45) 30%, transparent 60%), radial-gradient(ellipse at center, transparent 45%, rgba(5,6,14,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Foreground Content — Exact Pujo Smriti Cinematic Composition */}
      <div className="hero-content-container relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-start md:justify-end pt-[calc(42vh+6px)] md:pt-20 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Top Region & Season Tagline */}
        <p
          lang="bn"
          className="hero-tagline font-bn text-xs sm:text-sm md:text-base text-[#ffd98a] tracking-wide mb-1 sm:mb-2"
        >
          কলকাতা · আশ্বিন · ৭০তম বর্ষপূর্তি উৎসব (১৯৫৬ - ২০২৬)
        </p>

        {/* Grand Literary Title */}
        <h1
          id="hero-title"
          className="hero-title-main font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-wide text-[#faf5ea] leading-[0.92] drop-shadow-2xl my-1 sm:my-2"
        >
          DUYERPALLY
        </h1>

        {/* Authentic Bengali Subtitle */}
        <p className="hero-subtitle font-display text-base sm:text-xl md:text-2xl italic text-[#efe3cc] mt-1.5 sm:mt-2.5 max-w-2xl">
          {COMMITTEE_METADATA.committeeNameBn}
        </p>

        {/* Narrative Description Line */}
        <p className="hero-desc font-ui text-xs sm:text-sm md:text-base text-[#efe3cc]/85 max-w-lg mt-2 sm:mt-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
          কাশীপুর অঞ্চলের অন্যতম ঐতিহ্যবাহী সার্বজনীন দুর্গোৎসব। ১৯৫৬ সালে প্রতিষ্ঠিত এই শারদ মহাযজ্ঞে আপনাকে ও আপনার পরিবারকে সাদর আমন্ত্রণ।
        </p>

        {/* Action Buttons with Proper Margin and Elevated Spacing */}
        <div className="hero-buttons-container flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-5 mt-5 sm:mt-7 md:mt-8 mb-2 sm:mb-4 md:mb-6 w-full sm:w-auto">
          <button
            type="button"
            className="btn btn-primary flex-1 sm:flex-none justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#b3261e] to-[#841812] text-xs sm:text-sm md:text-base font-medium text-[#faf5ea] shadow-xl shadow-[#b3261e]/45 border border-[#ffd98a]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
            onClick={() => onNavigate('page-schedule')}
          >
            <span className="font-bn hidden sm:inline">পূজোর নির্ঘণ্ট দেখুন (মহালয়া থেকে দশমী)</span>
            <span className="font-bn sm:hidden">পূজোর নির্ঘণ্ট</span>
          </button>

          <button
            type="button"
            className="btn btn-ghost flex-1 sm:flex-none justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#efe3cc]/35 bg-[#070915]/65 backdrop-blur-md text-xs sm:text-sm md:text-base font-medium text-[#efe3cc] hover:border-[#ffd98a]/70 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
            onClick={() => onNavigate('page-intro')}
          >
            <span className="font-bn hidden sm:inline">আমাদের ৭০ বছরের ইতিহাস ও বার্তা</span>
            <span className="font-bn sm:hidden">৭০ বছরের ইতিহাস</span>
          </button>
        </div>
      </div>
    </section>
  );
};

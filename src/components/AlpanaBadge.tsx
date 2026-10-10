import React from 'react';

interface AlpanaBadgeProps {
  petals?: number;
  rings?: number;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const AlpanaBadge: React.FC<AlpanaBadgeProps> = ({
  petals = 12,
  rings = 3,
  className = '',
  size = 140,
  color = 'currentColor',
  strokeWidth = 1,
}) => {
  const step = 60 / rings;

  // Petal curve formula
  const getPetalPath = (innerR: number, outerR: number, width: number) => {
    const diff = outerR - innerR;
    return `M0 ${-innerR} C${width} ${-innerR - diff * 0.25} ${width * 0.7} ${-outerR + diff * 0.2} 0 ${-outerR} C${-width * 0.7} ${-outerR + diff * 0.2} ${-width} ${-innerR - diff * 0.25} 0 ${-innerR} Z`;
  };

  return (
    <svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Central Bindu */}
      <circle r="4" fill={color} />
      <circle r="8" stroke={color} strokeWidth={strokeWidth * 1.2} />

      {/* Inner Petal Ring */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`inner-${i}`}
          d={getPetalPath(10, 26, 7)}
          transform={`rotate(${i * 45})`}
          stroke={color}
        />
      ))}

      {/* Concentric Layered Petal Rings */}
      {Array.from({ length: rings }).map((_, rIdx) => {
        const radius = 28 + rIdx * step;
        const count = petals + rIdx * 2;
        const width = (Math.PI * radius) / count * 0.8;
        const offsetAngle = (rIdx % 2) * (180 / count);

        return (
          <g key={`ring-${rIdx}`}>
            <circle r={radius} stroke={color} strokeDasharray="3 3" opacity={0.6} />
            {Array.from({ length: count }).map((_, pIdx) => (
              <path
                key={`petal-${rIdx}-${pIdx}`}
                d={getPetalPath(radius, radius + step - 2, width)}
                transform={`rotate(${offsetAngle + (pIdx * 360) / count})`}
                stroke={color}
              />
            ))}
          </g>
        );
      })}

      {/* Outer Sacred Border Rings */}
      <circle r="92" stroke={color} strokeWidth={strokeWidth} />
      <circle r="95" stroke={color} strokeWidth={strokeWidth * 0.7} strokeDasharray="2 3" />

      {/* Decorative Outer Grain Dots */}
      {Array.from({ length: petals * 4 }).map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx="0"
          cy="-98"
          r="1"
          fill={color}
          stroke="none"
          transform={`rotate(${(i * 360) / (petals * 4)})`}
        />
      ))}
    </svg>
  );
};

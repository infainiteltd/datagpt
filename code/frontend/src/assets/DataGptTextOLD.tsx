import React from 'react';

const DataGptText: React.FC = () => {
  return (
    <svg viewBox="0 0 200 40" width="100%" height="100%">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }}>
            <animate
              attributeName="offset"
              values="-1;0;-1"
              dur="8s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" style={{ stopColor: '#00b8ff', stopOpacity: 1 }}>
            <animate
              attributeName="offset"
              values="0;1;0"
              dur="8s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#textGradient)"
        filter="url(#glow)"
        style={{
          fontSize: '28px',
          fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
          fontWeight: 'bold'
        }}
      >
        DataGPT
      </text>
    </svg>
  );
};

export default DataGptText;

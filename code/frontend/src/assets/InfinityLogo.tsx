import React from 'react';

interface InfinityLogoProps {
  size?: number; // Size in pixels
}

const InfinityLogo: React.FC<InfinityLogoProps> = ({ size = 120 }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size / 2 }}
    >
      <svg
        viewBox="-50 -20 100 40"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#000428', stopOpacity: 1 }}>
              <animate
                attributeName="offset"
                values="-1;0;-1"
                dur="2s"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" style={{ stopColor: '#004e92', stopOpacity: 1 }}>
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="2s"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Background path (always visible) */}
        <path
          d="M -20,0
             C -20,-12 -11,-12 -5,-6
             C -2,-3 -1,-1 0,0
             C 1,1 2,3 5,6
             C 11,12 20,12 20,0
             C 20,-12 11,-12 5,-6
             C 2,-3 1,-1 0,0
             C -1,1 -2,3 -5,6
             C -11,12 -20,12 -20,0"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.3"
        />

        {/* Animated path with trace and heartbeat */}
        <path
          d="M -20,0
             C -20,-12 -11,-12 -5,-6
             C -2,-3 -1,-1 0,0
             C 1,1 2,3 5,6
             C 11,12 20,12 20,0
             C 20,-12 11,-12 5,-6
             C 2,-3 1,-1 0,0
             C -1,1 -2,3 -5,6
             C -11,12 -20,12 -20,0"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Tracing effect */}
          <animate
            attributeName="stroke-dasharray"
            from="0 200"
            to="200 0"
            dur="2s"
            repeatCount="indefinite"
          />
          {/* Heartbeat effect using stroke-width */}
          <animate
            attributeName="stroke-width"
            values="2; 2.5; 2; 2.8; 2"
            dur="1s"
            calcMode="spline"
            keyTimes="0; 0.15; 0.3; 0.45; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            repeatCount="indefinite"
          />
          {/* Opacity pulse for added effect */}
          <animate
            attributeName="stroke-opacity"
            values="0.9; 1; 0.9; 1; 0.9"
            dur="1s"
            calcMode="spline"
            keyTimes="0; 0.15; 0.3; 0.45; 1"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default InfinityLogo;

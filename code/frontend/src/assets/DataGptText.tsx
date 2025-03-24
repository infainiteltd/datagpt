import React from 'react';

const DataGptText: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <svg
        viewBox="0 0 400 32"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="dataGptGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#021B79', stopOpacity: 1 }}>
              <animate
                attributeName="offset"
                values="-1;0;-1"
                dur="2s"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stop-color"
                values="#021B79;#004e92;#021B79"
                dur="4s"
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
              <animate
                attributeName="stop-color"
                values="#004e92;#021B79;#004e92"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#dataGptGradient)"
          fontSize="32px"
          fontFamily="Helvetica Neue, Arial, sans-serif"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          datagpt
          <animate
            attributeName="fill-opacity"
            values="0.9;1;0.9"
            dur="2s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
};

export default DataGptText;

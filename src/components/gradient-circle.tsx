import * as React from "react";

const GradientCircle = () => {
  return (
    <svg>
      <defs>
        <linearGradient id="linear-gradient" gradientTransform="rotate(90)">
          <stop
            offset="0%"
            stopColor="rgba(242, 153, 74, 0.5)"
            stopOpacity="50%"
          />
          <stop
            offset="100%"
            
            stopColor="rgba(28, 181, 224, 0.5)"
            stopOpacity="50%"
          />
        </linearGradient>
      </defs>
      <symbol id="gra2" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" fill="url(#linear-gradient)" />
      </symbol>
    </svg>
  );
};

export default GradientCircle;

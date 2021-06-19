import * as React from "react";

const GradientCircle = () => {
  return (
    <svg
      title="gradient circle"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <g>
        <linearGradient
          id="linear-gradient"
          gradientTransform="rotate(90)"
        >
          <stop offset="0%" stopColor="rgba(242, 201, 76, 0.5)" stopOpacity="50%" />
          <stop offset="100%" stopColor="rgba(242, 153, 74, 0.5)" stopOpacity="50%" />
        </linearGradient>

        <circle
          cx="100"
          cy="100"
          r="100"
          // className="gradient-circle"
          style={{ fill: "url(#linear-gradient)" }}
        />
      </g>
    </svg>
  );
};

export default GradientCircle;

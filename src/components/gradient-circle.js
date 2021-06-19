import * as React from "react";

const GradientCircle = () => {
  return (
    <svg
      title="gradient circle"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      

        <circle
          cx="100"
          cy="100"
          r="100"
          // className="gradient-circle"
          style={{ fill: "url(#linear-gradient)" }}
        />
    </svg>
  );
};

export default GradientCircle;

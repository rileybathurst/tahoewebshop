import * as React from "react";

const GradientCircle = () => {
  return (
    <>
      {/*     <svg
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
        style={{ fill: "xlinkHref(#linear-gradient)" }}
      />
    </svg> */}

      <svg>
        <defs>
          <linearGradient id="linear-gradient" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              stopColor="rgba(242, 201, 76, 0.5)"
              stopOpacity="50%"
            />
            <stop
              offset="100%"
              stopColor="rgba(242, 153, 74, 0.5)"
              stopOpacity="50%"
            />
          </linearGradient>
        </defs>
        <symbol id="gra2" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="100"
            fill="url(#linear-gradient)"
          />
        </symbol>
      </svg>
    </>
  );
};

export default GradientCircle;

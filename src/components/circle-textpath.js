import * as React from "react";

// I want to be able to easily throw more circle texts in

const CircleTextPath = () => {
  return (
    <>
      <svg
        height="300"
        width="300"
        viewBox="-25 -25 350 350"
        className="turn"
      >
        {/* text path */}
        <path
          id="profile"
          fill="none"
          d="
          M 150, 150
          m -150, 0
          a 100,100 0 1,0 300,0
          a 100,100 0 1,0 -300,0
        "
        />
      </svg>

      <svg height="500" width="500" viewBox="-25 -25 350 350" className="rotating" >
        <text>
          <textPath xlinkHref="#profile">Building and maintaining your web presence.</textPath>
        </text>
      </svg>
    </>
  );
};

export default CircleTextPath;

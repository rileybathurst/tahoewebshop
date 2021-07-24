import * as React from "react";

const BubblesSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path 
          id="bubbles"
          className="pop--google"
          fill="none"
          d="
          M7,10c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S9.2,10,7,10z
          M15,15 c-1.6,0-3,1.4-3,3s1.4,3,3,3s3-1.4,3-3S16.7,15,15,15z
          M16.5,3 c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S22,11.5,22,8.5S19.5,3,16.5,3z
          "
        />
      </defs>

      <mask id="bubbles-maskout">
        <rect width="24" height="24" fill="white" />
        <path
          fill="black"
          d="M7,10c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S9.2,10,7,10z M7,16c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,16,7,16z M15,15 c-1.6,0-3,1.4-3,3s1.4,3,3,3s3-1.4,3-3S16.7,15,15,15z M15,19c-0.6,0-1-0.5-1-1s0.4-1,1-1s1,0.5,1,1S15.6,19,15,19z M16.5,3 c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S22,11.5,22,8.5S19.5,3,16.5,3z M16.5,12c-1.9,0-3.5-1.6-3.5-3.5S14.6,5,16.5,5S20,6.6,20,8.5 S18.4,12,16.5,12z"
        />
      </mask>

      <use
        href="#bubbles"
        mask="url(#bubbles-maskout)"
      />
    </svg>
  );
};

export default BubblesSvg;

import React from "react";

function Pop(props) {
  return <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
    <defs>
      <path
        id={`svg-${props.icon}`}
        className={`pop--google${props.top}`}
        fill="none"
        d={`${props.d}`}
      />
    </defs>
    <mask id={`${props.icon}-maskout`}>
      <rect width="24" height="24" fill="white" />
      <path
        fill="black"
        d={`${props.d}`}
      />
    </mask>
    <use
      href={`#svg-${props.icon}`}
      mask={`url(#${props.icon}-maskout)`}
    />
  </svg>
  ;
}

export default Pop;

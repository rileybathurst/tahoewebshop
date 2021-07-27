import React from "react";

// this seems like it could be simplified, but I'm not sure how.

function Pop(props) {
  if (props.top) {
    return <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id={`svg-${props.icon}`}
          className={`pop--google_${props.top}`}
          // this doesnt actually need to be top="top" but incase I change it later
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
    </svg>;
  } else {
    return <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id={`svg-${props.icon}`}
          className={`pop--google`}
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
    </svg>;
  }
}

export default Pop;

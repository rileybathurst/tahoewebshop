import React, { useState, useEffect } from 'react';

// component
function Circle() {

  function vanilla() {
    let circleElement;
    circleElement = document.querySelector("#circle");
    createObserver();

    function createObserver() {
      let observer;

      observer = new IntersectionObserver(handleIntersect);
      observer.observe(circleElement);
    }

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIo("rotating");
        } else {
          setIo("stoping");
        }
      });
    }
  }

  const [io, setIo] = useState("stoping"); // I dont want to set a number here I want to query it

  useEffect(() => {
    vanilla();
  });

  return (
    <svg id="circle" height="500" width="500" viewBox="-25 -25 350 350" className={io} >
        <text>
          <textPath xlinkHref="#profile">Building and maintaining your web presence.</textPath>
        </text>
      </svg>
  );
}

const RotatingTitle = () => {
  return (
    <>
      <svg
      height="300"
      width="300"
      viewBox="-25 -25 350 350"
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
    <Circle />
      
    </>
  )
}

export default RotatingTitle;
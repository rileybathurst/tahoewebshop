import React, { useState } from 'react';
import PropTypes from "prop-types";

// styles
const gridStyles = {
  gridRow: 1,
  gridColumn: 1,
  height: '100vh',
  // zIndex: 1,
}

function MouseTracker({ children }) {
  const [mousex, setX] = useState(0);
  const [mousey, setY] = useState(0);

  function handleMouse(e) {
    console.log(e);
    setX(e.clientX);
    setY(e.clientY);
  }

  return (
    <div style={{ display: 'grid' }}>
      <div style={gridStyles} onMouseMove={handleMouse}>
        {children}
      </div>
      <div
        className="cursor"
        style={{
          left: `${mousex}px`,
          top: `${mousey}px`,
        }}
      >{/* stay gold */}</div>
    </div>
  );
}

MouseTracker.propTypes = {
  children: PropTypes.node.isRequired
};

export default MouseTracker;
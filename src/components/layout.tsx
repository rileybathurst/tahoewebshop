import React, { useState } from 'react';
import PropTypes from "prop-types";

import MouseTracker from './cursor';

function Layout({ children }) {

  return (
    <MouseTracker>
      <div className="y-scroll-snapping" dir="ltr">
        {children}
      </div>
    </MouseTracker>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
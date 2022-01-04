import * as React from "react";
import { Link } from "gatsby"

import MouseTracker from "../components/cursor";

// markup
const TestPage = () => {
  return (
    <MouseTracker>
      <h1>Cursor</h1>
      <hr />
      <Link to="404">404 test linking</Link>
    </MouseTracker>
  );
};

export default TestPage;

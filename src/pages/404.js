import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <div className="three screen-high" dir="ltr">
      <Seo title="404" />
      <header id="top">
        <Nav />
        </header>
        {/* full row */}

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
            <h1>404</h1>
            <p>We are lost.</p>
            <Link to="/">Go Home</Link>
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
    </div>
  );
};

export default NotFoundPage;

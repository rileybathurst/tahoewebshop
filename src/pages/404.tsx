import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Contact from "../components/contact";

// markup
const NotFoundPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <div className="three">
        <Seo
          title="404"
          description="Page not found"
        />
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
      <Contact />
    </div>
  );
};

export default NotFoundPage;

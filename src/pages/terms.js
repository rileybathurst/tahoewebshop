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
          title="Terms"
          description="Standard terms of use and conditions for Tahoe Web Shop."
        />
        <header id="top">
          <Nav />
        </header>
        {/* full row */}

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
            <h1>Terms and Conditions</h1>
            <p>Standard.</p>
            <p>
              Payments are made on the first of the month.
              with 28 days to pay.
            </p>
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

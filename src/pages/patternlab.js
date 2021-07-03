import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Nav from "../components/nav";

import "@fontsource/josefin-sans/variable.css";
import "../styles/index.scss";

// markup
const PatternLabPage = () => {
  return (
    <main className="three screen-high">
      <Seo title="Local" />
      <header id="top">
        <Nav />
      </header>

      <section>
        {/* row */}
        <h2 className="label">Pattern Lab</h2>
        <div className="single-area">
          <div>
            <h3>We are on the doorstep.</h3>
            <p>
              We are avaliable online but sometimes it's easier in person, come
              by the studio in Tahoe City to say hi. <i>(by appointment)</i>
            </p>
            <address>
              Suite B-204
              <br />
              925 North Lake Blvd
              <br />
              Tahoe City
              <br />
              CA, 96145
            </address>
          </div>
        </div>
        {/* /singlearea */}
      </section>
      {/* .row */}

      <div className="three__row--vert">
        {/* row */}
        <div>{/* stay gold */}</div>
        <div>{/* stay gold */}</div>
        <p className="return">
          <Link to="/">Tahoe Web Shop</Link>
        </p>
      </div>
    </main>
  );
};

export default PatternLabPage;

import * as React from "react";
// import { Link } from "gatsby";

import Seo from "../components/seo";
import Nav from "../components/nav";
import Contact from "../components/contact";
import Backup from "../components/back-up";

import "@fontsource/josefin-sans/variable.css";
import "../styles/index.scss";

// markup
const LocalPage = () => {
  return (
    <>
    <main className="three screen-high">
      <Seo title="Local" />
      <header id="top">
        <Nav />
      </header>

      <section className="three">
        {/* row */}
        <h2 className="label">Local</h2>
        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">We are on the doorstep.</h3>
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

      <Backup />
    </main>
    <Contact />
    </>
  );
};

export default LocalPage;

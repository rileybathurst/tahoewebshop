import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import Seo from "../components/seo";

import EbptIcon from "../images/ebpt-icon";

// markup
const IndexPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <Seo title="portfolio" />

      <header id="top" className="three">
        <Nav />

        <div>{/* stay gold */}</div>
        <div className="major">
          <GradientCircle />
          <h1>Portfolio</h1>
        </div>
        <div>{/* stay gold */}</div>

        <Pedestal />
      </header>

      {/* EBPT */}
      {/* CMSF */}
      {/* Snowledge */}

      <main id="ebpt" className="three">
        <div className="three__row--vert">
          <div>{/* Id like something here I'm just note sure what yet */}</div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div className="">
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="">Emerald Bay Physical Therapy</h3>
            <p>Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.</p>
            <p>
              Full branding, static generated website and print designs.
            </p>
            <Link to="/portfolio/emeraldbay">Explore the Designs</Link>
          </div>
          <div className="full-width"><EbptIcon /></div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <div>
            <p className="return">
              <Link to="/">Tahoe Web Shop</Link>
            </p>
          </div>
        </div>
      </main>

      <section id="cmsf" className="light three">
        <div className="three__row--vert">
          <div>{/* Id like something here I'm just note sure what yet */}</div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div className="">
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="">Cordell Marine Sanctuary Foundation</h3>
            <p>Health coach Amanda Rolfe</p>
            <p>A wordpress theme built on an overlapping grid</p>
          </div>
        </div>

        <div className="port">
          <div className="snap-scroll-container-coordinates">
            <div className="child"></div>

            <div className="child"></div>

            <div className="child"></div>
            {/* child */}
          </div>
          {/* snap-scroll-container-coordinates */}
        </div>
        {/* port */}

        <p className="return">
          <a href="#top">Tahoe Web Shop</a>
        </p>
      </section>

      <section id="snowledge" className="lake three">
        <h2 className="label">Snowledge //</h2>

        <div className="raised">
          <h3 className="out">Snowledge</h3>
          <p>Snowledge is powder.</p>
          <p>Working with the team on the resort partners portal.</p>
        </div>

        <div className="port">
          <div className="snap-scroll-container-coordinates">
            <div className="child"></div>

            <div className="child"></div>

            <div className="child"></div>
            {/* child */}
          </div>
          {/* .snap-scroll-container-coordinates */}
        </div>
        {/* port */}

        <p className="return">
          <a href="#top">Tahoe Web Shop</a>
        </p>
      </section>
    </div>
  );
};

export default IndexPage;

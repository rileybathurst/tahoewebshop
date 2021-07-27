import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import TahoeSvg from "../components/tahoe";
import Seo from "../components/seo";

import CircleTextPath from "../components/circle-textpath";

import "@fontsource/josefin-sans/variable.css";
import "../styles/index.scss";
import Backup from "../components/back-up";
import Contact from "../components/contact";
import Label from "../components/label";

function EbptGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/emeraldbay-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

function SnowledgeGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/snowledge-netlify-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

function CmsfGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/cmsf-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

// markup
const IndexPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <Seo title="Home" />
      <header id="top" className="three">
        {/* <title>Home Page</title> */}
        
        {/* Im not running the nav here as its a page link */}
        <nav className="three__row--vert">
          <ul>
            <li>
              <Link to="#about">Home</Link>
            </li>
            {/* li style="--animation-order: 1;" */}
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            {/* li style="--animation-order: 2;" */}
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            {/* li style="--animation-order: 3;" */}
          </ul>
        </nav>

        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area">

            <div className="tahoe-pop">
              <TahoeSvg />
            </div>
            {/* set a circle once */}
            <CircleTextPath />

            {/* set the text */}
            {/* can I simplify this more but thatll come soon */}
            <svg height="500" width="500" viewBox="-25 -25 350 350" className="rotating">
              <text>
                <textPath xlinkHref="#profile">Building and maintaining your web presence.</textPath>
              </text>
            </svg>

              <h1>
                <span>Tahoe</span>
                <span>Web</span>
                <span>Shop</span>
              </h1>

          </div>
          <div>{/* stay gold */}</div>
        </div>
        <Pedestal />
      </header>

      <main id="about" className="three extra-long">
      <Label docket="About" />

        <section>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div className="single-area">
            <div>
              <h3 className="clamped-3">The web should only be as complex as you need.</h3>
              <p>Work with us at your level, we can take care of the rest.<br />
              If you know the basics, the code or the whole deal we </p>
              <p><Link to="/features">Learn more about how and what we do</Link></p>
              <p><Link to="/tools">Learn more about what we use</Link></p>
              <p><Link to="/team">Meet the team</Link></p>

              
            </div>
          </div>
          {/* /singlearea */}
        </section>
        {/* .row */}

        <Backup />
      </main>

      <section id="#portfolio" className="three">
        <Label docket="Portfolio" />
          
        <article className="three__row--constant portfolio__cards"> {/* three__row--vert-when-needed */}
          {/* row */}

          <section className="portfolio__card">
            <h3 className="project__title clamped-3">
              <Link to="/portfolio#ebpt">Emeraldbay.physio</Link>
            </h3>
            <Link to="/portfolio#ebpt">
              <div className="project__thumbnail">
                <EbptGrab />
              </div>
            </Link>
            <a href="https://emeraldbay.physio/" target="_blank" rel='noreferrer'>
              View the site
            </a>
          </section>

          <section className="portfolio__card">
            <h3 className="project__title clamped-3">
              <Link to="/portfolio#cmsf">
                Cordell Marine Sanctuary Foundation
              </Link>
            </h3>
            <Link to="/portfolio#cmsf" className="project__thumbnail">
            <CmsfGrab />
            </Link>
            <a href="https://cordellfoundation.org/" target="_blank" rel='noreferrer'>
              View the site
            </a>

            {/* <CircleGradient /> */}
          </section>

          <section className="portfolio__card">
            <h3 className="project__title clamped-3">
              <Link to="/portfolio">Snowledge.co</Link>
            </h3>
            <Link to="/portfolio#snowledge" className="project__thumbnail">
              <SnowledgeGrab />
            </Link>
            <a href="https://snowledge.netlify.app/" target="_blank" rel='noreferrer'>
              View the site
            </a>
          </section>
        </article>

        <Backup />
      </section>

      <Contact />
    </div>
  );
};

export default IndexPage;

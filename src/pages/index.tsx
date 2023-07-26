// TODO as soon as this is working on google structure data it needs a CMS

import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import TahoeSvg from "../components/tahoe";
import SEO from "../components/seo";

import RotatingTitle from "../components/rotating-title";

// import "@fontsource/josefin-sans/variable.css";
// import "../styles/index.scss";
import Backup from "../components/back-up";
import Contact from "../components/contact";
import Label from "../components/label";

import Layout from "../components/layout";

function EbptGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/emeraldbay-screengrab.png"
      alt="emerald bay physical therapy website"
      breakpoints={[330, 660, 990]}
      width={330}
    />
  );
}

function JSWCGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/Jarrod_Semmens_Window_Cleaning.png"
      alt="jarrod semmens window cleaning website"
      breakpoints={[330, 660, 990]}
      width={330}
    />
  );
}

function CmsfGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/cmsf-screengrab.png"
      alt="cordell bay marine sanctuary foundation"
      breakpoints={[330, 660, 990]}
      width={330}
    />
  );
}


const IndexPage = () => {
  return (
    <Layout>
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


            <TahoeSvg />

            <RotatingTitle />

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
          <svg title="about book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="paths" >
            <path fill="white" d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z" />
          </svg>
        </section>

        <Backup />
      </main>

      <section id="#portfolio" className="three extra-long">
        <Label docket="Portfolio" />

        <article className="three__row--constant portfolio__cards"> {/* three__row--vert-when-needed */}
          {/* row */}

          <section className="portfolio__card">
            <h3 className="project__title clamped-3">
              <Link to="/portfolio#ebpt">Emeraldbay.physio</Link>
            </h3>
            <Link to="/portfolio#ebpt" className="project__thumbnail">
              <EbptGrab />
            </Link>
            <a href="https://emeraldbay.physio/" target="_blank" rel='noreferrer noopener'>
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
            <a href="https://cordellfoundation.org/" target="_blank" rel='noreferrer noopener'>
              View the site
            </a>

            {/* <CircleGradient /> */}
          </section>

          <section className="portfolio__card">
            <h3 className="project__title clamped-3">
              <Link to="/portfolio">Jarrod Semmens</Link>
            </h3>
            <Link to="/portfolio#jswc" className="project__thumbnail">
              <JSWCGrab />
            </Link>
            <a href="https://jarrodsemmenswindowcleaning/" target="_blank" rel='noreferrer noopener'>
              View the site
            </a>
          </section>
        </article>

        <Backup />
      </section>

      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title="Tahoe Web Shop | Web Design and Development"
  />
)

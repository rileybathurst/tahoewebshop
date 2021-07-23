import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import Seo from "../components/seo";
import Backup from "../components/back-up";

import EbptIcon from "../images/ebpt-icon";
import Contact from "../components/contact";

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
        <div>
          {/* row */}
          <h2 className="label show-beyond-small">EBPT //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div className="">
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="">Emerald Bay Physical Therapy</h3>
            <div className="port">
              <EbptGrab />
            </div>
            <p>Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.</p>
            <p>
              Full branding, static generated website and print designs.
            </p>
            <Link to="/portfolio/emeraldbay">Explore the Designs</Link>
          </div>
          <div className="full-width"><EbptIcon /></div>
        </div>

        <Backup />
      </main>

      <section id="cmsf" className="three">
        <div>
          {/* row */}
          <h2 className="label show-beyond-small">CMSF //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Cordell Marine Sanctuary Foundation</h3>
            <div className="port">
              <CmsfGrab />
            </div>
            <p>A wordpress theme built on an overlapping grid</p>
          </div>
          <div className="full-width">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22,14L22,14L22,14z M5.3,13c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1 v-2c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1v2 C3.9,14,4.2,13,5.3,13z M18.7,15c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1s-1.4-1-3.3-1S3.2,16,2,16v2 c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1s2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1v-2 C20.8,16,20.6,15,18.7,15z M5.3,9c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1V8 c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1C10,7,9.9,8,8.7,8C7.5,8,7.2,7,5.3,7C3.4,7,3.2,8,2,8v2 C3.9,10,4.2,9,5.3,9z" />
            </svg>
          </div>
        </div>

        <Backup />
      </section>

      <section id="snowledge" className="three">
        <div>
          <h2 className="label show-beyond-small">Snowledge //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="clamped-3">Snowledge</h3>
            <div className="port">
              <SnowledgeGrab />
            </div>
            <p>
              Website development &amp; design. Gatsby and Strapi build to supplement the app.
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.1 77.8">
              <path d="M92.2,8c4.4,4.6,8.9,9.1,13.3,13.6c6.4,6.5,12.8,13,19.1,19.6c5.8,6,11.7,12,17.5,17.9c3.3,3.3,6.5,6.7,9.8,10 c0.1,0.2,0.3,0.3,0.3,0.7c-0.2-0.2-0.5-0.3-0.7-0.5c-9.2-8.1-18.4-16.1-27.6-24.2c-8.6-7.5-17.2-15-25.7-22.6 c-0.8-0.7-1.3-0.7-2.2,0C85.3,31.4,74.5,40.2,63.8,49c-3.1,2.5-6.2,5.1-9.3,7.6c-0.8,0.6-1.4,0.8-2.4,0.4c-4.5-1.5-9-2.9-13.5-4.4 c-0.8-0.3-1.4-0.2-2.2,0.3c-8.6,5.5-17.2,10.9-25.8,16.3c-0.3,0.2-0.6,0.3-0.8,0.6c1.1-1.2,2.2-2.5,3.4-3.7 C19.2,60.6,25.1,55,31,49.5c4.3-4,8.6-8,12.8-12c0.6-0.6,1-0.5,1.5,0.1c2.4,2.7,4.8,5.4,7.2,8.1c0.7,0.8,1.1,0.7,1.7,0 C66.5,33.3,78.8,21,91.1,8.7c0.2-0.2,0.4-0.5,0.6-0.7C91.9,8,92,8,92.2,8z" />
            </svg>
          </div>
        </div>


        <Backup />
      </section>

      <Contact />
    </div>
  );
};

export default IndexPage;

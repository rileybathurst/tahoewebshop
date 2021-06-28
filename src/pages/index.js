import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import CircleGradient from "../components/circle-gradient";
import TahoeSvg from "../components/tahoe";
import Seo from "../components/seo";

import CircleTextPath from "../components/circle-textpath";
import DroneSelfie from "../images/droneSelfie";

import "@fontsource/josefin-sans/variable.css";
import "../styles/index.scss";

function Pacrav() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/pacrav-com.png"
      alt="pacrav website"
    />
  );
}

function Aaw() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/authenticalignmentwellness-com_how-i-got-into-coaching.png"
      alt="authentic alignment wellness website"
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
        <Nav />
        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area">

            <TahoeSvg />
            {/* set a circle once */}
            <CircleTextPath />

            {/* set the text */}
            {/* can I simplify this more but thatll come soon */}
            <svg height="500" width="500" viewBox="-25 -25 350 350">
              <text>
                <textPath xlinkHref="#profile">Building &amp; Maintaining your web presence.</textPath>
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

      <main id="about" className="three">
        <div className="three__row--vert">
          <h2 className="label">About//</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <section>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div className="single-area">
            <div>
              <h3>The web should only be as complex as you need.</h3>
              {/* <p>
                From initial setup of a site to additional features as your
                company grows and your reach expands.
              </p> */}
              <p>Work with us at your level, we can take care of the rest.</p>
              <p><Link to="/features">Learn More</Link></p>
              <p><Link to="/team">Meet the team</Link></p>

              
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
            <Link to="#top">Tahoe Web Shop</Link>
          </p>
        </div>
      </main>

      <section id="portfolio" className="three extra-long">
        <div>
          {/* row */}
          <h2 className="label">Portfolio//</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <article className="three__row--constant three__row--vert-when-needed">
          {/* row */}

          <section className="portfolio__card">
            <h3 className="project__title">
              <Link to="/portfolio.html#pacrav">Pacrav.com</Link>
            </h3>
            <Link to="/portfolio#pacrav" className="project__thumbnail shadow">
              <Pacrav />
            </Link>
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.2,-58.1C49.1,-46.7,54.3,-33,62.1,-18.1C69.8,-3.1,80.1,13.1,77.1,26C74.2,38.8,58,48.2,43,59.6C27.9,71.1,14,84.5,-0.5,85.1C-14.9,85.7,-29.7,73.6,-45.4,62.4C-61.1,51.1,-77.6,40.9,-81.6,26.9C-85.6,13,-77,-4.6,-68,-19C-59,-33.3,-49.7,-44.4,-38.3,-55.2C-26.8,-66.1,-13.4,-76.7,0.6,-77.6C14.6,-78.4,29.3,-69.4,39.2,-58.1Z" transform="translate(100 100)" />
            </svg> */}

            <CircleGradient />
          </section>

          <section className="portfolio__card">
            <h3 className="project__title">
              <Link to="/portfolio.html#aaw">
                Authentic Alignment Wellness.com
              </Link>
            </h3>
            <Link to="/portfolio#aaw" className="project__thumbnail">
              <Aaw />
            </Link>

            {/* <CircleGradient /> */}
          </section>

          <section className="portfolio__card">
            <h3 className="project__title">
              <Link to="/portfolio">Snowledge.co</Link>
            </h3>
            {/* <Link to="/portfolio#snowledge" className="shadow">
              Needs a new snowledge image
            </Link> */}

            <CircleGradient />
          </section>
        </article>

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="#top">Tahoe Web Shop</Link>
          </p>
        </div>
        {/* row */}
      </section>

      <section id="contact" className="lake three module extra-long">
        {/* 
        dont have these so there isnt a gap for no content
        <div>
          row
          <div>stay gold</div>
          <div>stay gold</div>
          <div>stay gold</div>
        </div> */}

        <article>
          {/* row */}
          <h2 className="label">Contact//</h2>
          <div>
            <h3>
              <a href="https://goo.gl/maps/DhEsvHPR8mUSsnBM8">
                945 N Lake Blvd
                <br />
                Tahoe City
                <br />
                California 96145
                <br />
                United States
              </a>
            </h3>

            <h3>
              <a href="mailto:info@tahoewebshop.com">info@tahoewebshop.com</a>
            </h3>

            <form action="/contact.php" method="post">
              <label>
                Name:*
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                {/* <br /> */}
              </label>
              {/* <br /> */}
              <label>
                E-mail:*
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder="email"
                  required
                />
                {/* <br /> */}
              </label>
              {/* <br /> */}
              <label>
                What&#39;s your favourite website&#63;*
                <input
                  type="text"
                  id="favourite"
                  name="user_favourite"
                  placeholder="What&#39;s your favourite website&#63;"
                  required
                />
                {/* <br /> */}
              </label>
              <br />

              <input
                type="hidden"
                name="recaptcha_response"
                id="recaptchaResponse"
              />

              <button type="submit">Send</button>
            </form>
          </div>
          <p className="return">
            <Link to="#top">Tahoe Web Shop</Link>
          </p>
        </article>

        {/*         <div>
          row
          <div>stay gold</div>
          <div>stay gold</div>
          <div>stay gold</div>
        </div> */}
      </section>
    </div>
  );
};

export default IndexPage;

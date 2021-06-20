import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import CircleGradient from "../components/circle-gradient";
import TahoeSvg from "../components/tahoe";
import Seo from "../components/seo";

import DroneSelfie from "../images/droneSelfie";

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
            {/* <GradientCircle />
          <CircleGradient /> */}
            <TahoeSvg />
            <div>
              <h1>
                Tahoe
                <br />
                Web
                <br />
                Shop
              </h1>
              <p>
                Building &amp; Maintaining
                <br />
                your web presence.
              </p>
            </div>
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
              {/* holder */}
              <h3>The web should only be as complex as you need.</h3>
              <p>
                From initial setup of a site to additional features as your
                company grows and you&rsquo;re reach expands.
              </p>

              <div className="circles">
                <svg height="300" width="300" className="gr-1 gc-1-4 turn">
                  {" "}
                  {/* text path */}
                  <path
                    id="profile"
                    fill="none"
                    d="
                    M 150, 150
                    m -150, 0
                    a 100,100 0 1,0 300,0
                    a 100,100 0 1,0 -300,0
                  "
                  />
                  <text>
                    <textPath xlinkHref="#profile">
                      <a href="/team.html#riley">Riley Bathurst</a>
                    </textPath>
                  </text>
                </svg>

                <DroneSelfie />

                <p className="screen-reader">Riley Bathurst Profile Video</p>
              </div>
              {/* /circles */}
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
            <a href="#top">Tahoe Web Shop</a>
          </p>
        </div>
      </main>

      <section id="portfolio" className="three">
        <div>
          {/* row */}
          <h2 className="label">Portfolio//</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <article className="three__row--constant">
          {/* row */}

          <section>
            <h3>
              <a href="/portfolio.html#pacrav">Pacrav.com</a>
            </h3>
            <a href="/portfolio#pacrav" className="shadow">
              <Pacrav />
            </a>
            <CircleGradient />
          </section>

          <section>
            <h3>
              <a href="/portfolio.html#aaw">Authentic Alignment Wellness.com</a>
            </h3>
            <a href="/portfolio#aaw" className="shadow">
              <Aaw />
            </a>

            <CircleGradient />
          </section>

          <section>
            <h3>
              <Link to="/portfolio">Snowledge.co</Link>
            </h3>
            {/* <a href="/portfolio#snowledge" className="shadow">
              Needs a new snowledge image
            </a> */}

            <CircleGradient />
          </section>
        </article>

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <a href="#top">Tahoe Web Shop</a>
          </p>
        </div>
        {/* row */}
      </section>

      <section id="contact" className="lake three module any-height">
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
                <br />
              </label>
              <br />
              <label>
                E-mail:*
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder="email"
                  required
                />
                <br />
              </label>
              <br />
              <label>
                What&#39;s your favourite website&#63;*
                <input
                  type="text"
                  id="favourite"
                  name="user_favourite"
                  placeholder="What&#39;s your favourite website&#63;"
                  required
                />
                <br />
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
            <a href="#top">Tahoe Web Shop</a>
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

import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
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
      <header id="top" className="light module ninety-vh">
        <title>Home Page</title>
        <Nav />
        <div className="three--main">
          <GradientCircle />

          <svg preserveAspectRatio="xMinYMin meet">
            <use xlinkHref="#gra2"></use>
          </svg>

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

        <Pedestal />
      </header>

      <main id="about" className="lake module three ninety-vh">
        <h2 className="label">About//</h2>

        <div className="focal">
          <h3>The web should only be as complex as you need.</h3>
          <p>
            From initial setup of a site to additional features as your company
            grows and you&rsquo;re reach expands.
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
        </div>
        <p className="return">
          <a href="#top">Tahoe Web Shop</a>
        </p>
      </main>

      <section id="portfolio" className="light three module">
        <h2 className="label">Portfolio//</h2>

        <article>
          <h3>
            <a href="/portfolio.html#pacrav">Pacrav.com</a>
          </h3>
          <a href="/portfolio#pacrav" className="shadow">
            <Pacrav />
          </a>
          <svg preserveAspectRatio="xMinYMin meet">
            <use xlinkHref="#gra2"></use>
          </svg>
        </article>

        <article>
          <h3>
            <a href="/portfolio.html#aaw">Authentic Alignment Wellness.com</a>
          </h3>
          <a href="/portfolio#aaw" className="shadow">
            <Aaw />
          </a>

          <svg preserveAspectRatio="xMinYMin meet">
            <use xlinkHref="#gra2"></use>
          </svg>

        </article>

        <article>
          <h3>
            <Link to="/portfolio">Snowledge.co</Link>
          </h3>
          {/* <a href="/portfolio#snowledge" className="shadow">
              Needs a new snowledge image
            </a> */}

          <svg preserveAspectRatio="xMinYMin meet">
            <use xlinkHref="#gra2"></use>
          </svg>

        </article>

        <p className="return">
          <a href="#top">Tahoe Web Shop</a>
        </p>
      </section>

      <section id="contact" className="lake three module any-height">
        <h2 className="label">Contact//</h2>

        <article>
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
        </article>

        <p className="return">
          <a href="#top">Tahoe Web Shop</a>
        </p>
      </section>
    </div>
  );
};

export default IndexPage;

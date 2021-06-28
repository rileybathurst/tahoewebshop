import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
// import GradientCircle from "../components/gradient-circle";
import TahoeSvg from "../components/tahoe";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <Seo title="features" />
      <header id="top" className="three">
        <Nav />

        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area">
            <TahoeSvg />
            <h1>Features</h1>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Pedestal />
      </header>

      <main id="local" className="three">
        <div>
          <h2 className="label">Local //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="">We are on the doorstep.</h3>
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
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </main>

      <section id="performance" className="three">
        <div>
          <h2 className="label">Performance //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div className="">
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="">Speed is king.</h3>
            <p>
              Performance runs deeper than how fast does the website load in the
              best conditions. a few moments of work up front can save hours
              down the road leading to more sales during the life of your site.
            </p>
          </div>

          <svg
            className="rotating loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
          >
            <circle cx="170" cy="170" r="135" stroke="hsl(188, 100%, 8%)" />
            <circle cx="170" cy="170" r="110" stroke="hsl(188, 100%, 18%)" />
            <circle cx="170" cy="170" r="85" stroke="hsl(188, 100%, 28%)" />
          </svg>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </section>

      <section id="security" className="three">
        <div>
          <h2 className="label">Security //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="">Keep it strong.</h3>
            <p>
              The good and the bad part of having a 24/7 store is that you have
              a 24/7 store which is open to customers and those less diseriable,
              we start with the premise your site will be under attack and
              develop a stategy to keep it running through the good and the bad.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -2 24 28"
            className="paths"
          >
            <path
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
              fill="none"
              stroke="black"
            />
            <path
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

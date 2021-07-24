import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Contact from "../components/contact";
import Seo from "../components/seo";
import Backup from "../components/back-up";

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
            {/* waves */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <path
                  id="features-waves"
                  className="pop--google"
                  fill="none"
                  d="M22,14L22,14L22,14z M5.3,13c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1	v-2c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1v2	C3.9,14,4.2,13,5.3,13z
                  M18.7,15c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1s-1.4-1-3.3-1S3.2,16,2,16v2	c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1s2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1v-2	C20.8,16,20.6,15,18.7,15z
                  M5.3,9c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1V8 c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1C10,7,9.9,8,8.7,8C7.5,8,7.2,7,5.3,7C3.4,7,3.2,8,2,8v2 C3.9,10,4.2,9,5.3,9z"
                />
              </defs>
              <mask id="waves-maskout">
                <rect width="24" height="24" fill="white" />
                <path
                  d="M22,14L22,14L22,14z M5.3,13c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1	v-2c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1v2	C3.9,14,4.2,13,5.3,13z M18.7,15c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1s-1.4-1-3.3-1S3.2,16,2,16v2	c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1s2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1v-2	C20.8,16,20.6,15,18.7,15z M5.3,9c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1V8 c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1C10,7,9.9,8,8.7,8C7.5,8,7.2,7,5.3,7C3.4,7,3.2,8,2,8v2 C3.9,10,4.2,9,5.3,9z"
                  fill="black"
                />
              </mask>
              <use
                href="#features-waves"
                mask="url(#waves-maskout)"
              />
            </svg>
            <h1><span>Features</span></h1>
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
            <h3 className="clamped-3">We are on the doorstep.</h3>
            <p>
              We are avaliable online but sometimes it's easier in person, come
              by the studio in Tahoe City to say hi. <i>(by appointment)</i>
            </p>
            <p>Get help with your computer, your phone, wifi problems and so many other things.</p>
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

        <Backup />
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
            <h3 className="clamped-3">Speed is king.</h3>
            <p>
              Performance runs deeper than how fast does the website load in the
              best conditions. a few moments of work up front can save hours
              down the road leading to more sales during the life of your site.
            </p>
            <h4 className="clamped-4">Test your site with Google's tool</h4>
            <a href="https://web.dev/" target='_blank' rel='noreferrer'>Check it out on web.dev</a>

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

        <Backup />
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
            <h3 className="clamped-3">Keep it strong.</h3>
            <p>
              The good and the bad part of having a 24/7 store is that you have
              a 24/7 store which is open to customers and those less diseriable,
              we start with the premise your site will be under attack and
              develop a stategy to keep it running through the good and the bad.
            </p>
            <h4 className="clamped-4">Test your security with Mozilla's tool</h4>
            <a href="https://observatory.mozilla.org/" target='_blank' rel='noreferrer'>Observatory</a>
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

        <Backup />
      </section>

      <section id="a11y" className="three">
        <div>
          <h2 className="label">Accessibility //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="clamped-3">Everyone can use this.</h3>
            <p>
              A11y helps everyone, not only those with a dissability.
            </p>
            <h4 className="clamped-4">Test your security with Web AIM's tool</h4>
            <a href="https://wave.webaim.org/" target='_blank' rel='noreferrer'>wave</a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="paths"
          >
            <path d="M20.5,6c-2.6,0.7-5.7,1-8.5,1S6.1,6.7,3.5,6L3,8c1.9,0.5,4,0.8,6,1v13h2v-6h2v6h2V9c2-0.2,4.1-0.5,6-1L20.5,6z M12,6 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,6,12,6z"
              stroke="white"
              // strokeWidth="0.25"
              fill="white"
            />
          </svg>
        </div>

        <Backup />
      </section>

      <section id="dark" className="three">
        <div>
          <h2 className="label">Dark Mode //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="clamped-3">Not just party trick.</h3>
            <p>
              Dark mode is expected today, when a client is looking at your website with their device in dark mode they expect your website to respect that.
            </p>
            <p>Dark mode can also give a huge advantage to battery life as a nice additional use case.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="paths">
            <path d="M4.7,19.3h4.6L12,22l2.7-2.7h4.6v-4.6L22,12l-2.7-2.7V4.7h-4.6L12,2L9.3,4.7H4.7v4.6L2,12l2.7,2.7V19.3z M12,6.5 c3,0,5.5,2.4,5.5,5.5S15,17.5,12,17.5V6.5z"
              stroke="white"
              strokeWidth="1"
              fill="white"
            />
          </svg>
        </div>

        <div className="show-beyond-small">
          <p className="third return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </section>

      <section id="email" className="three">
        <div>
          <h2 className="label">Email //</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div className="">
            <h3 className="clamped-3">Use what you want.</h3>
            <p>
              We can set you up with Gmail, Office 365, the apps you want on your phone computer, tablet to be ready to go whenever you want.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="paths"
          >
            <path
              d="M22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5L4,6H20z M20,18H4V8l8,5l8-5"
              stroke="white"
              strokeWidth="1"
              fill="white"
            />
          </svg>

        </div>

        <Backup />
      </section>

      <Contact />
    </div>
  );
};

export default IndexPage;

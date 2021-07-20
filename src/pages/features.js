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
            <h3 className="clamped-3">Speed is king.</h3>
            <p>
              Performance runs deeper than how fast does the website load in the
              best conditions. a few moments of work up front can save hours
              down the road leading to more sales during the life of your site.
            </p>
            <h4 className="clamped-4">Test your site with Google's tool</h4>
            <a href="https://web.dev/" target='_blank' rel='noopener'>Check it out on web.dev</a>

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
            <h3 className="clamped-3">Keep it strong.</h3>
            <p>
              The good and the bad part of having a 24/7 store is that you have
              a 24/7 store which is open to customers and those less diseriable,
              we start with the premise your site will be under attack and
              develop a stategy to keep it running through the good and the bad.
            </p>
            <h4 className="clamped-4">Test your security with Mozilla's tool</h4>
            <a href="https://observatory.mozilla.org/" target='_blank' rel='noopener'>Observatory</a>
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
            <a href="https://wave.webaim.org/" target='_blank' rel='noopener'>wave</a>
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

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
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

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
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

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <p className="return">
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </section>

      <section id="contact" className="lake three module extra-long">
        <div>
          <h2 className="label">Contact//</h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <article>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">
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

            <h3 className="clamped-3">
              <a href="mailto:info@tahoewebshop.com" className="button">info@tahoewebshop.com</a>
            </h3>
            <p>No form? Nope, I'm not a huge fan of them, I would prefer just a mail link, you can send from you preferred mail app, or service. This way you know if it works or not and we can just start your mail. I can still make you a form, let's just talk about it first.</p>

          </div>
          <div>{/* stay gold */}</div>
        </article>

        <div>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
          <div>
            <p className="return">
              <Link to="#top">Tahoe Web Shop</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

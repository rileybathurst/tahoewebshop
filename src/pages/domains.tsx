import * as React from "react";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import SEO from "../components/seo";
import Contact from "../components/contact";
import Backup from "../components/back-up";
import Label from "../components/label";
import Pop from "../components/pop";


const BudgetPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <div id="top" className="three">

        <header >
          <Nav />
        </header>
        {/* full row */}

        <div >
          {/* row */}
          <div>{/* stay gold */}</div>
          <div className="single-area shadowdom">
            <h1><span>Domains</span></h1>

            <Pop icon="dots" top="top" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <path
                  id="svg-dollars"
                  className="pop--google"
                  fill="none"
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                />
            </defs>
            <mask id="dollars-maskout">
                <rect width="24" height="24" fill="white" />
                <path
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                  fill="black"
                />
              </mask>
              <use
                href="#svg-dollars"
                mask="url(#dollars-maskout)"
              />
            </svg> */}
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
      </div>

      <section id="hourly" className="three">
        <Label docket="Hourly" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Work on demand.</h3>
            <p>
              {/* // TODO this is a direct grab of the budget and features pages, could be a component or strapi request */}
              We pass on direct costs of domains,
              we use <a href="https://www.hover.com/domain-pricing" target="_blank">hover pricing is reflected here.</a>
              The reason for this is if we have control of the domain it makes our life a lot easier and doesn't cost you anything additional.
              Current .com domains are $15.99 per year.

              <p>
                Your domain is the end of your website name, the dot something, it's not just .com there are over 300 domains avaliable there are some really cool branding things that can be done with these.
              </p>
              <p>If you want to hold onto that, great, if we do it for you that's no problem it's yours at any time.</p>
              <p>Preferably let's get you off Go Daddy, or Crazy Domains if you are with them theres a good chance you are over paying or getting a terrible experience.</p>
              <p>Budget depends on which domain but these often cost twenty to thirty dollars per year.</p>
            </p>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>

      <Contact />
    </div>
  );
};

export default BudgetPage;

export const head = () => (
  <SEO
    title="Domains | Tahoe Web Shop"
    description="the dot com of a dot com"
  />
)

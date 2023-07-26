import * as React from "react";
import { Link } from "gatsby";

import SEO from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const PerformancePage = () => {
  return (
    <Layout>
      <main className="three screen-high">

        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Performance</h2>
          <div className="single-area">
            <div>
              <p>
                Performance runs deeper than how fast does the website load in the
                best conditions. a few moments of work up front can save hours
                down the road leading to more sales during the life of your site.
              </p>
              <h4 className="clamped-4">Test your site with Google's tool</h4>
              <a href="https://web.dev/" target='_blank' rel='noreferrer noopener'>Check it out on web.dev</a>
              <h5>Refences</h5>
              <p><a href='https://web.dev/why-speed-matters/' target='_blank' rel='norefferer noopener'>Google - Why does speed matter?</a></p>
              <p><a href='https://www.pingdom.com/blog/page-load-time-really-affect-bounce-rate/' target='_blank' rel='norefferer noopener'>Pingdom - Does Page Load Time Really Affect Bounce Rate?</a></p>
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
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default PerformancePage;

export const Head = () => (
  <SEO
    title="Performance | Tahoe Web Shop"
    description="Performance runs deeper than how fast does the website load in the
  best conditions."
  />
)

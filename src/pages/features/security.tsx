import * as React from "react";
import { Link } from "gatsby";

import SEO from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const SecurityPage = () => {
  return (
    <Layout>
      <main className="three screen-high">

        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Security</h2>
          <div className="single-area">
            <div>
              <p>
                The good and the bad part of having a 24/7 store is that you have
                a 24/7 store which is open to customers and those less diseriable,
                we start with the premise your site will be under attack and
                develop a stategy to keep it running through the good and the bad.
              </p>
              <h4 className="clamped-4">Test your security with Mozilla's tool</h4>
              <a href="https://observatory.mozilla.org/" target='_blank' rel='noreferrer noopener'>Observatory</a>
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

export default SecurityPage;

export const Head = () => (
  <SEO
    title="Security | Tahoe Web Shop"
    description="Keep it safe."
  />
)

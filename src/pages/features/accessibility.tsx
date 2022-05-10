import * as React from "react";
import { Link } from "gatsby";

import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const A11yPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="Accessibility"
          description="Accessibility helps everyone, not only those with a dissability."
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">A11y</h2>
          <div className="single-area">
            <div>
              <p>
                A11y helps everyone, not only those with a dissability.
              </p>
              <h4 className="clamped-4">Test your security with Web AIM's tool</h4>
              <a href="https://wave.webaim.org/" target='_blank' rel='noreferrer noopener'>wave</a>
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

export default A11yPage;

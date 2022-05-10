import * as React from "react";
import { Link } from "gatsby";

import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const AdaptPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="Adaptability"
          description="When a client is looking at your website with their device in dark mode they expect your website to respect that."
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Adaptability</h2>
          <div className="single-area">
            <div>
              <h3 className="clamped-3">Dark Mode</h3>
              <p>
                When a client is looking at your website with their device in dark mode they expect your website to respect that.
              </p>
              <p>Dark mode can also give a huge advantage to battery life as a nice additional use case.</p>
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

export default AdaptPage;

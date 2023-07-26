import * as React from "react";
import { Link } from "gatsby";

import SEO from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const HostingPage = () => {
  return (
    <Layout>
      <main className="three screen-high">

        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Hosting</h2>
          <div className="single-area">
            <div>
              <p>The files that are your website have to be somewhere, this might be refered to as the cloud but we can do some interesting things with more than a folder.</p>
              <p>If you are hosting your website with your own setup then it becomes far more time consuming to get setup and troubleshoot.</p>
              <p>Prices depend on size of storage needed and complexity of tools.</p>
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

export default HostingPage;

export const Head = () => (
  <SEO
    title="Hosting | Tahoe Web Shop"
    description="The files that are your website have to be somewhere."
  />
)

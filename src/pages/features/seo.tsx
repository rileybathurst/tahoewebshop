import * as React from "react";
import { Link } from "gatsby";

import SEO from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const SeoPage = () => {
  return (
    <Layout>
      <main className="three screen-high">

        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">SEO</h2>
          <div className="single-area">
            <div>
              <p>There is a lot to being on the first page, work with search engine's not against them.</p>
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
            {/* // TODO this hovers different than the top buttons / links */}
            <Link to="/">Tahoe Web Shop</Link>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default SeoPage;

export const Head = () => (
  <SEO
    title="SEO | Tahoe Web Shop"
    description="There is a lot to being on the first page, work with search engine's not against them."
  />
)
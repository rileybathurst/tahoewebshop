import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import SEO from "../components/seo";
import Contact from "../components/contact";

import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="three">

        <header id="top">
          <Nav />
        </header>
        {/* full row */}

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
            {/* // TODO: do the TCK variable here */}
            <h1>404</h1>
            <p>We are lost.</p>
            <Link to="/">Go Home</Link>
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
      </div>
      <Contact />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <SEO
    title="404 | Tahoe Web Shop"
  />
)

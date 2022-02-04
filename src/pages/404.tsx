import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Contact from "../components/contact";

import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="three">
        <Seo
          title="404"
          description="Page not found"
        />
        <header id="top">
          <Nav />
        </header>
        {/* full row */}

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
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

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
            <h1>Terms and Conditions</h1>
            <p>Standard.</p>
            <p>
              Payments are made on the first of the month.
              with 28 days to pay.
            </p>
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
    title="Terms | Tahoe Web Shop"
    description="Standard terms of use and conditions for Tahoe Web Shop."
  />
)

import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Label from "../components/label";
import Backup from "../components/back-up";
import Layout from "../components/layout";

// markup
const ChecklistPage = () => {
  return (
    <Layout>
      <div className="three">
        <Seo
          title="Checklist"
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
            <h1>Checklist</h1>
            <p>Are we ready.</p>
            <Link to="/">Go Home</Link>
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
      </div>

      <section id="seo" className="three">
        <Label docket="SEO" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">S.E.O.</h3>
            <p>
              Show up on search. This is not a complete list for your site but a good starting point.
            </p>
            <ul>
              <li>Title</li>
              <li>Description</li>
              <li>Slogan</li>
              <li>Slogan</li>
              <li>Opening Hours</li>
              <li>Telephone</li>
              <li>Logo</li>
              <li>OpenGraph Image</li>
              <li>Area Served</li>
              <li>Location</li>
              <li>Payment Accepted</li>
            </ul>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>

      <Contact />
    </Layout>
  );
};

export default ChecklistPage;

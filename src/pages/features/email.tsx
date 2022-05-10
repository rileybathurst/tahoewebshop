import * as React from "react";
import { Link } from "gatsby";

import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const EmailPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="email"
          description="We can set you up with Gmail, Office 365, the apps you want on your phone computer, tablet to be ready to go whenever you want."
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Email</h2>
          <div className="single-area">
            <div>
              <p>
                We can set you up with Gmail, Office 365, the apps you want on your phone computer, tablet to be ready to go whenever you want.
              </p>
              <p>We prefer to stay away from forward only emails as these have lead to problems over time.</p>
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

export default EmailPage;

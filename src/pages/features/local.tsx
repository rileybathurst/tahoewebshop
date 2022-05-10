import * as React from "react";
import { Link } from "gatsby";

import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const LocalPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="Local"
          description="We are on the doorstep."
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Local</h2>
          <div className="single-area">
            <div>
              <p>
                If you are looking for a web studio near me, we are avaliable online but sometimes it's easier in person, come
                by the studio in Tahoe City to say hi. <i>(by appointment)</i>
              </p>
              <p>Get help with your computer, your phone, wifi problems and so many other things.</p>
              <address>
                Suite B-204
                <br />
                925 North Lake Blvd
                <br />
                Tahoe City
                <br />
                CA, 96145
              </address>
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

export default LocalPage;

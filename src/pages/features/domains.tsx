import * as React from "react";
import { Link } from "gatsby";

import Seo from "../../components/seo";
import Nav from "../../components/nav";
import Layout from "../../components/layout";

const DomainsPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="Domains"
          description="Your domain is the end of your website name, the dot something, it's not just .com there are over 300 domains avaliable there are some really cool branding things that can be done with these." // TODO this is way too long
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Domains</h2>
          <div className="single-area">
            <div>
              <p>
                Your domain is the end of your website name, the dot something, it's not just .com there are over 300 domains avaliable there are some really cool branding things that can be done with these.
              </p>
              <p>If you want to hold onto that, great, if we do it for you that's no problem it's yours at any time.</p>
              <p>Preferably let's get you off Go Daddy or Crazy Domains if you are with them theres a good chance you are over paying or getting a terrible experience.</p>
              <p>Budget depends on which domain but these often cost twenty to thirty dollars per year.</p>
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

export default DomainsPage;

import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Nav from "../components/nav";
import Layout from "../components/layout";

// markup
const PatternLabPage = () => {
  return (
    <Layout>
      <main className="three screen-high">
        <Seo
          title="Wix"
          // description="Sometimes it's easier in person, come by the studio in Tahoe City to say hi."
          description="Thoughts on using the Wix website platform."
        />
        <header id="top">
          <Nav />
        </header>

        <section>
          {/* row */}
          <h2 className="label">Wix</h2>
          <div className="single-area">
            <div>
              <p>
                I have worked with Wix on a few sites, I find it very hard to be elegant.
                I understand if your site was built on this.
                It's not built responsive, things are built desktop first, it just is, this is more than ten years ago way of thinking about things and it shouldn't happen.
                There are a few options of how to work.
              </p>
              <p>Velo. This is Velo's how you can push the designs further but I find I am always running up against what's possible.</p>
              <p>Editor X. I don't think is good value, we can work together to do something that is less.</p>
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

export default PatternLabPage;

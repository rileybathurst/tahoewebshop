import * as React from "react";
// import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <div class="y-scroll-snapping" dir="ltr">
      <Seo title="404" />
      <header id="top" class="single-page">
        <Nav />
        <div class="major">
          <GradientCircle />
          <h1>404</h1>
          <p>We are lost.</p>
        </div>

        <Pedestal />
      </header>
    </div>
  );
};

export default NotFoundPage;

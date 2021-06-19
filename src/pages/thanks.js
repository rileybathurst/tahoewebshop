import * as React from "react";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";

// markup
const ThanksPage = () => {
  return (
    <div className="light three full-page">
      <Seo title="thanks" />
      <header id="top" >
        <Nav />
      </header>

      <main className="grid-place-center three--main">
        <h1>Thanks</h1>
        <p>Your message is on the way.</p>
      </main>

      {/* <footer className="three--footer"> */}
        <Pedestal />
      {/* </footer> */}
    </div>
  );
};

export default ThanksPage;

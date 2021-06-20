import * as React from "react"

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <>
    <Seo title="spam" />
    <div className="container y mandatory-scroll-snapping" dir="ltr">
    <header id="top" className="light three">
      <Nav />
      <div className="grid-place-center">
      {/* style="grid-row: 2; grid-column: 1/4" */}
        <h1>Sorry</h1>
        <p>Your message is caught up in our spam filters.</p>
      </div>

      <Pedestal />
    </header>
  </div>
  </>
  )
}

export default IndexPage

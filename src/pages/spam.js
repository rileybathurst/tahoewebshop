import * as React from "react"

import Nav from "../components/nav"
import Pedestal from "../components/pedestal"

// markup
const IndexPage = () => {
  return (
    <>
    <div class="container y mandatory-scroll-snapping" dir="ltr">
    <header id="top" class="light three">
      <Nav />
      <div class="grid-place-center">
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

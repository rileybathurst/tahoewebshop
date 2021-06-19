import * as React from "react";

import Nav from "../components/nav"
import Pedestal from "../components/pedestal"
import GradientCircle from "../components/gradient-circle"

// markup
const IndexPage = () => {
  return (
    <>
      <div class="y-scroll-snapping" dir="ltr">
        <header id="top">
          <Nav />
          <div class="major">
            <GradientCircle />
            <h1>Features</h1>
          </div>

          <Pedestal />
        </header>
        <main id="local">
          <h2 class="label">Local //</h2>

          <div class="focal">
            <h3 class="out">Drop by for a coffee.</h3>
            <p>
              We really mean it, we're working in Tahoe City, we understand the
              power of the internet but also those face to face times can move
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.9907161864467!2d-120.14005158464143!3d39.17493177952889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80997d749f4f898b%3A0x56bad090de6759f9!2s945+N+Lake+Blvd%2C+Tahoe+City%2C+CA+96145!5e0!3m2!1sen!2sus!4v1563751731491!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              style={{border:0}}
              allowfullscreen
              title="map"
            ></iframe>

            <h4>
              <a href="https://goo.gl/maps/DhEsvHPR8mUSsnBM8">
                945 N Lake Blvd
                <br />
                Tahoe City
                <br />
                California 96145
                <br />
                United States
              </a>
            </h4>

            <h4>
              <a href="mailto:info@tahoewebshop.com">info@tahoewebshop.com</a>
            </h4>
          </div>
          <p class="return">
            <a href="#top">Tahoe Web Shop</a>
          </p>
        </main>

        <section id="performance" class="light three">
          <h2 class="label">Performance //</h2>

          <div class="focal">
            <h3 class="out">Speed is king.</h3>
            <p>
              Performance runs deeper than how fast does the website load in the
              best conditions. a few moments of work up front can save hours
              down the road leading to more sales during the life of your site.
            </p>

            <svg
              class="rotating loader"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 340 340"
            >
              <circle cx="170" cy="170" r="135" stroke="#bb6a1b" />
              <circle cx="170" cy="170" r="110" stroke="#0A0A0A" />
              <circle cx="170" cy="170" r="85" stroke="#bb6a1b" />
            </svg>
          </div>
          <p class="return">
            <a href="#top">Tahoe Web Shop</a>
          </p>
        </section>

        <section id="security" class="lake three">
          <h2 class="label">Security //</h2>

          <div class="focal">
            {/* style="grid-row: 2; grid-column: 1/4;" */}
            <h3 class="out">Keep it strong.</h3>
            <p>
              The good and the bad part of having a 24/7 store is that you have
              a 24/7 store which is open to customers and those less diseriable,
              we start with the premise your site will be under attack and
              develop a stategy to keep it running through the good and the bad.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -2 24 28"
              class="paths"
            >
              <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                fill="none"
                stroke="black"
              />
              <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                stroke="white"
                stroke-width="0.5"
                fill="none"
              />
            </svg>
          </div>
          <p class="return">
            <a href="#top">Tahoe Web Shop</a>
          </p>
        </section>
      </div>
    </>
  );
};

export default IndexPage;

import * as React from "react"

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <>
    <Seo title="portfolio" />
    <div className="y-scroll-snapping" dir="ltr">
      <header id="top" className="module">
        <Nav />
        <div className="major">

          <GradientCircle />
          <h1>Port-<br />
          folio</h1>
        </div>

        <Pedestal />
      </header>
      <main id="pacrav" className="lake three">
        <h2 className="label">Pacrav //</h2>

          <div className="raised">
            <h3 className="out">Pacrav</h3>
            <p>Inspire Mobility, Empower Freedom. A physical therapy office in Reno, NV.</p>
            <p>A wordpress theme build with full width images and a virtual consultation form.</p>
          </div>

          <div className="port">
            <div className="snap-scroll-container-coordinates">
              <div className="child shadow" >
                {/* <picture className="child shadow">
                  <source srcset="/static/pacrav-iPhoneX-mockup-1080x2216.webp" media="(min-width: 1080px)" type="image/webp">
                  <source srcset="/static/pacrav-iPhoneX-mockup-1080x2216.png" media="(min-width: 1080px)">
                  <source srcset="/static/pacrav-iPhoneX-mockup-960x1969.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/pacrav-iPhoneX-mockup-960x1969.png" media="(min-width: 960px)">
                  <source srcset="/static/pacrav-iPhoneX-mockup-720x1477.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/pacrav-iPhoneX-mockup-720x1477.png" media="(min-width: 720px)">
                  <source srcset="/static/pacrav-iPhoneX-mockup-640x1313.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/pacrav-iPhoneX-mockup-640x1313.png" media="(min-width: 360px)">
                  <source srcset="/static/pacrav-iPhoneX-mockup-360x738.webp" type="image/webp">
                  <img src="/static/pacrav-iPhoneX-mockup-360x738.png" load="lazy" id="first">
                </picture> */}
              </div>

              <div className="child shadow">
                {/* <picture className="child shadow">
                  <source srcset="/static/pacrav-iPad-Mockup-1080x1411.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/pacrav-iPad-Mockup-1080x1411.png" media="(min-width: 960px)">
                  <source srcset="/static/pacrav-iPad-Mockup-960x1254.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/pacrav-iPad-Mockup-960x1254.png" media="(min-width: 720px)">
                  <source srcset="/static/pacrav-iPad-Mockup-720x941.webp" media="(min-width: 640px)" type="image/webp">
                  <source srcset="/static/pacrav-iPad-Mockup-720x941.png" media="(min-width: 640px)">
                  <source srcset="/static/pacrav-iPad-Mockup-640x836.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/pacrav-iPad-Mockup-640x836.png" media="(min-width: 360px)">
                  <source srcset="/static/pacrav-iPad-Mockup-360x470.webp" type="image/webp">
                  <img src="/static/pacrav-iPad-Mockup-360x470.png" load="lazy">
                </picture> */}
              </div>

              <div className="child shadow">
                {/* <picture className="child shadow">
                  <source srcset="/static/pacrav-com-1080x573.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/pacrav-com-1080x573.png" media="(min-width: 960px)">
                  <source srcset="/static/pacrav-com-960x509.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/pacrav-com-960x509.png" media="(min-width: 720px)">
                  <source srcset="/static/pacrav-com-720x382.webp" media="(min-width: 640px)" type="image/webp">
                  <source srcset="/static/pacrav-com-720x382.png" media="(min-width: 640px)">
                  <source srcset="/static/pacrav-com-640x339.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/pacrav-com-640x339.png" media="(min-width: 360px)">
                  <source srcset="/static/pacrav-com-360x191.webp" type="image/webp">
                  <img src="/static/pacrav-com-360x191.png" alt="website" load="lazy">
                </picture> */}
                </div>{/* child */}
            </div> {/* .snap-scroll-container-coordinates */}
          </div> {/* .port */}
        <p className="return"><a href="#top">Tahoe Web Shop</a></p>
      </main>

      <section id="aaw" className="light three">
        <h2 className="label">AAW //</h2>

        <div className="raised">
          <h3 className="out">Authentic Alignment Wellness</h3>
          <p>Health coach Amanda Rolfe</p>
          <p>A wordpress theme built on an overlapping grid</p>
        </div>

        <div className="port">
            <div className="snap-scroll-container-coordinates">
              <div className="child">
                    {/* <picture className="child shadow">
                      <source srcset="/static/aaw-iphone-1080x2187.webp" media="(min-width: 960px)" type="image/webp">
                      <source srcset="/static/aaw-iphone-1080x2187.png" media="(min-width: 960px)">
                      <source srcset="/static/aaw-iphone-960x1944.webp" media="(min-width: 720px)" type="image/webp">
                      <source srcset="/static/aaw-iphone-960x1944.png" media="(min-width: 720px)">
                      <source srcset="/static/aaw-iphone-720x1458.webp" media="(min-width: 640px)" type="image/webp">
                      <source srcset="/static/aaw-iphone-720x1458.png" media="(min-width: 640px)">
                      <source srcset="/static/aaw-iphone-640x1296.webp" media="(min-width: 360px)" type="image/webp">
                      <source srcset="/static/aaw-iphone-640x1296.png" media="(min-width: 360px)">
                      <source srcset="/static/aaw-iphone-360x729.webp" type="image/webp">
                      <img src="/static/aaw-iphone-360x729.png" alt="iPhone mockup" load="lazy">
                    </picture> */}
                    </div>

                    <div className="child">
                    {/* <picture className="child shadow ">
                      <source srcset="/static/AAW-ipad-1080x1528.webp" media="(min-width: 960px)" type="image/webp">
                      <source srcset="/static/AAW-ipad-1080x1528.png" media="(min-width: 960px)">
                      <source srcset="/static/AAW-ipad-960x1358.webp" media="(min-width: 882px)" type="image/webp">
                      <source srcset="/static/AAW-ipad-960x1358.png" media="(min-width: 882px)">
                      <source srcset="/static/AAW-ipad-882x1248.webp" media="(min-width: 720px)" type="image/webp">
                      <source srcset="/static/AAW-ipad-882x1248.png" media="(min-width: 720px)">
                      <source srcset="/static/AAW-ipad-720x1018.webp" media="(min-width: 640px)" type="image/webp">
                      <source srcset="/static/AAW-ipad-720x1018.png" media="(min-width: 640px)">
                      <source srcset="/static/AAW-ipad-640x905.webp" media="(min-width: 360px)" type="image/webp">
                      <source srcset="/static/AAW-ipad-640x905.png" media="(min-width: 360px)">
                      <source srcset="/static/AAW-ipad-360x509.webp" type="image/webp">
                      <img src="/static/AAW-ipad-360x509.png" alt="ipad mockup" load="lazy">
                    </picture> */}
                    </div>

                    <div className="child">
                    {/* <picture className="child shadow">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-1080x573.webp" media="(min-width: 960px)" type="image/webp">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-1080x573.png" media="(min-width: 960px)">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-960x509.webp" media="(min-width: 720px)" type="image/webp">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-960x509.png" media="(min-width: 720px)">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-720x382.webp" media="(min-width: 640px)" type="image/webp">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-720x382.png" media="(min-width: 640px)">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-640x339.webp" media="(min-width: 360px)" type="image/webp">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-640x339.png" media="(min-width: 360px)">
                      <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-360x191.webp" type="image/webp">
                      <img src="/static/authenticalignmentwellness-com_how-i-got-into-coaching-360x191.png" alt="website" load="lazy">
                    </picture> */}
                    </div>{/* child */}
              </div>{/* snap-scroll-container-coordinates */}
        </div>{/* port */}

        <p className="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>

      <section id="snowledge" className="lake three">
        <h2 className="label">Snowledge //</h2>

        <div className="raised">
          <h3 className="out">Snowledge</h3>
          <p>Snowledge is powder.</p>
          <p>Working with the team on the resort partners portal.</p>
        </div>

        <div className="port">
            <div className="snap-scroll-container-coordinates">
                <div className="child">
                {/* <picture className="child shadow">
                  <source srcset="/static/snowledge-iphone-1080x2187.webp" media="(min-width: 1080px)" type="image/webp">
                  <source srcset="/static/snowledge-iphone-1080x2187.png" media="(min-width: 1080px)">
                  <source srcset="/static/snowledge-iphone-960x1944.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/snowledge-iphone-960x1944.png" media="(min-width: 960px)">
                  <source srcset="/static/snowledge-iphone-720x1458.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/snowledge-iphone-720x1458.png" media="(min-width: 720px)">
                  <source srcset="/static/snowledge-iphone-640x1296.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/snowledge-iphone-640x1296.png" media="(min-width: 360px)">
                  <source srcset="/static/snowledge-iphone-360x729.webp" type="image/webp">
                  <img src="/static/snowledge-iphone-360x729.png" load="lazy" id="first">
                </picture> */}
              </div>

              <div className="child">
                {/* <picture className="child shadow">
                  <source srcset="/static/snowledge-ipad-1080x1528.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/snowledge-ipad-1080x1528.png" media="(min-width: 960px)">
                  <source srcset="/static/snowledge-ipad-960x1358.webp" media="(min-width: 882px)" type="image/webp">
                  <source srcset="/static/snowledge-ipad-960x1358.png" media="(min-width: 882px)">
                  <source srcset="/static/snowledge-ipad-882x1248.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/snowledge-ipad-882x1248.png" media="(min-width: 720px)">
                  <source srcset="/static/snowledge-ipad-720x1018.webp" media="(min-width: 640px)" type="image/webp">
                  <source srcset="/static/snowledge-ipad-720x1018.png" media="(min-width: 640px)">
                  <source srcset="/static/snowledge-ipad-640x905.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/snowledge-ipad-640x905.png" media="(min-width: 360px)">
                  <source srcset="/static/snowledge-ipad-360x509.webp" type="image/webp">
                  <img src="/static/snowledge-ipad-360x509.png" load="lazy">
                </picture> */}
              </div>

              <div className="child">
                {/* <picture className="child shadow">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-1080x573.webp" media="(min-width: 960px)" type="image/webp">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-1080x573.png" media="(min-width: 960px)">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-960x509.webp" media="(min-width: 720px)" type="image/webp">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-960x509.png" media="(min-width: 720px)">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-720x382.webp" media="(min-width: 640px)" type="image/webp">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-720x382.png" media="(min-width: 640px)">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-640x339.webp" media="(min-width: 360px)" type="image/webp">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-640x339.png" media="(min-width: 360px)">
                  <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-360x191.webp" type="image/webp">
                  <img src="/static/snowledgedevservice-herokuapp-com_partners_dashboard-360x191.png" alt="website" load="lazy">
                </picture> */}
              </div>{/* child */}
            </div>{/* .snap-scroll-container-coordinates */}
          </div>{/* port */}

        <p className="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>
    </div>
    </>
  )
}

export default IndexPage

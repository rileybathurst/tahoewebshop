import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <>
    <div class="y-scroll-snapping" dir="ltr">
      <header id="top" class="module">
        {/* nav  */}
        <div class="major">

          <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo"></object>
          <h1>Port-<br />
          folio</h1>
        </div>

        <div class="pedestal p1">
          <a href="/features.html#local" aria-label="local"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0a0a0a"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            Local</a>
        </div>

        <div class="pedestal p2">
          <a href="/features.html#performance" aria-label="performance"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="#0a0a0a"/></svg>
            Performance</a>
        </div>

        <div class="pedestal p3">
          <a href="/features.html#security" aria-label="security"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="#0a0a0a"/></svg>
            Security</a>
        </div>
      </header>
      <main id="pacrav" class="lake three">
        <h2 class="label">Pacrav //</h2>

          <div class="raised">
            <h3 class="out">Pacrav</h3>
            <p>Inspire Mobility, Empower Freedom. A physical therapy office in Reno, NV.</p>
            <p>A wordpress theme build with full width images and a virtual consultation form.</p>
          </div>

          <div class="port">
            <div class="snap-scroll-container-coordinates">
              <div class="child shadow" >
                {/* <picture class="child shadow">
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

              <div class="child shadow">
                {/* <picture class="child shadow">
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

              <div class="child shadow">
                {/* <picture class="child shadow">
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
        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </main>

      <section id="aaw" class="light three">
        <h2 class="label">AAW //</h2>

        <div class="raised">
          <h3 class="out">Authentic Alignment Wellness</h3>
          <p>Health coach Amanda Rolfe</p>
          <p>A wordpress theme built on an overlapping grid</p>
        </div>

        <div class="port">
            <div class="snap-scroll-container-coordinates">
              <div class="child">
                    {/* <picture class="child shadow">
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

                    <div class="child">
                    {/* <picture class="child shadow ">
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

                    <div class="child">
                    {/* <picture class="child shadow">
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

        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>

      <section id="snowledge" class="lake three">
        <h2 class="label">Snowledge //</h2>

        <div class="raised">
          <h3 class="out">Snowledge</h3>
          <p>Snowledge is powder.</p>
          <p>Working with the team on the resort partners portal.</p>
        </div>

        <div class="port">
            <div class="snap-scroll-container-coordinates">
                <div class="child">
                {/* <picture class="child shadow">
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

              <div class="child">
                {/* <picture class="child shadow">
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

              <div class="child">
                {/* <picture class="child shadow">
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

        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>
    </div>
    </>
  )
}

export default IndexPage

import * as React from "react"

import "../styles/index.scss";

// markup
const IndexPage = () => {
  return (
    <>
    <div class="y-scroll-snapping" dir="ltr">
      <header id="top" class="module">
        <title>Home Page</title>
        <nav>
          <ul>
            <li><a href="#about">About//</a></li>
            {/* li style="--animation-order: 1;" */}
            <li><a href="#portfolio">Portfolio//</a></li>{/* li style="--animation-order: 2;" */}
            <li><a href="#contact">Contact//</a></li>{/* li style="--animation-order: 3;" */}
          </ul>
        </nav>
        <div class="major">

          <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo">{/* no fallback due to decorative only element */}</object> {/* object as inline needs the inline style which is getting overwritten by the content security policy */}

          <h1>Tahoe<br />
            Web<br />
            Shop</h1>
          <p>Building &amp; Maintaining<br />
            your web presence.</p>
        </div>

        <div class="pedestal p1">
          <a href="/features.html#local"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class=""><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            Local</a>
        </div>

        <div class="pedestal p2">
          <a href="/features.html#performance"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class=""><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="#000"/></svg>
            Performance</a>
        </div>

        <div class="pedestal p3">
          <a href="/features.html#security"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class=""><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="#000"/></svg>
          Security</a>
        </div>
      </header>
      <main id="about" class="module">
        <h2 class="label">About//</h2>

        <div class="focal">
          <h3>The web should only be as complex as you need.</h3>
          <p>From initial setup of a site to additional features as your company grows and you&rsquo;re reach expands.</p>

          <div class="circles">
            <svg height="300" width="300" class="gr-1 gc-1-4 turn"> {/* text path */}
              <path id="profile"
                fill="none"
                d="
                  M 150, 150
                  m -150, 0
                  a 100,100 0 1,0 300,0
                  a 100,100 0 1,0 -300,0
                "
              />
              <text>
                {/* <textPath xlink:href="#profile">
                  <a href="/team.html#riley">Riley Bathurst</a>
                </textPath> */}
              </text>
            </svg>
            <video autoplay loop muted>
              <source src="/static/drone-selfie.webm"
                type="video/webm" />

              <source src="/static/drone-selfie.mp4"
                type="video/mp4" />

              <p>Sorry, Your browser doesn't support HTML5 video. Here is a <a href="/static/drone-selfie.mp4">link to the video</a> instead.</p>
            </video>
            <p class="screen-reader">Riley Bathurst Profile Video</p>
          </div>
        </div>
        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </main>

      <section id="portfolio" class="light module">
        <h2 class="label">Portfolio//</h2>

          <article>
            <h3><a href="/portfolio.html#pacrav">Pacrav.com</a></h3>
            <a href="/portfolio#pacrav">
              {/* <picture class="shadow">
                <source srcset="/static/pacrav-com-1080x573.webp" media="(min-width: 960px)" type="image/webp" />
                <source srcset="/static/pacrav-com-1080x573.png" media="(min-width: 960px)"/>
                <source srcset="/static/pacrav-com-960x509.webp" media="(min-width: 720px)" type="image/webp"/>
                <source srcset="/static/pacrav-com-960x509.png" media="(min-width: 720px)"/>
                <source srcset="/static/pacrav-com-720x382.webp" media="(min-width: 640px)" type="image/webp"/>
                <source srcset="/static/pacrav-com-720x382.png" media="(min-width: 640px)"/>
                <source srcset="/static/pacrav-com-640x339.webp" media="(min-width: 360px)" type="image/webp"/>
                <source srcset="/static/pacrav-com-640x339.png" media="(min-width: 360px)"/>
                <source srcset="/static/pacrav-com-360x191.webp" type="image/webp"/>
                <img src="/static/pacrav-com-360x191.png" alt="pacrav website" load="lazy"/>
              </picture> */}
            </a>
            <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo">{/* no fallback due to decromental only element */}</object> {/* object as inline needs the inline style which is getting overwritten by the content security policy */}
          </article>

          <article>
            <h3><a href="/portfolio.html#aaw">Authentic Alignment Wellness.com</a></h3>
            <a href="/portfolio#aaw">
              {/* <picture class="shadow">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-1080x573.webp" media="(min-width: 960px)" type="image/webp">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-1080x573.png" media="(min-width: 960px)">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-960x509.webp" media="(min-width: 720px)" type="image/webp">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-960x509.png" media="(min-width: 720px)">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-720x382.webp" media="(min-width: 640px)" type="image/webp">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-720x382.png" media="(min-width: 640px)">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-640x339.webp" media="(min-width: 360px)" type="image/webp">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-640x339.png" media="(min-width: 360px)">
                <source srcset="/static/authenticalignmentwellness-com_how-i-got-into-coaching-360x191.webp" type="image/webp">
                <img src="/static/authenticalignmentwellness-com_how-i-got-into-coaching-360x191.png" alt="authentic alignment wellness website" load="lazy">
              </picture> */}
            </a>
            <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo">{/* no fallback due to decromental only element */}</object> {/* object as inline needs the inline style which is getting overwritten by the content security policy */}
          </article>

          <article>
            <h3><a href="/portfolio.html#snowledge">Snowledge.co</a></h3>
            <a href="/portfolio#snowledge">
              {/* <picture class="shadow">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-1080x573.webp" media="(min-width: 960px)" type="image/webp">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-1080x573.png" media="(min-width: 960px)">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-960x509.webp" media="(min-width: 720px)" type="image/webp">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-960x509.png" media="(min-width: 720px)">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-720x382.webp" media="(min-width: 640px)" type="image/webp">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-720x382.png" media="(min-width: 640px)">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-640x339.webp" media="(min-width: 360px)" type="image/webp">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-640x339.png" media="(min-width: 360px)">
                <source srcset="/static/snowledgedevservice-herokuapp-com_partners_dashboard-360x191.webp" type="image/webp">
                <img src="/static/snowledgedevservice-herokuapp-com_partners_dashboard-360x191.png" alt="snowledge website" load="lazy">
              </picture> */}
            </a>
            <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo">{/* no fallback due to decromental only element */}</object> {/* object as inline needs the inline style which is getting overwritten by the content security policy */}
          </article>

        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>

      <section id="contact" class="lake module">
        <h2 class="label">Contact//</h2>

        <article>
          <h3><a href="https://goo.gl/maps/DhEsvHPR8mUSsnBM8">945 N Lake Blvd<br />
            Tahoe City<br />
            California 96145<br />
            United States</a></h3>

          <h3><a href="mailto:info@tahoewebshop.com">info@tahoewebshop.com</a></h3>

          <form action="/contact.php" method="post">
            <label for="name">Name:*
            <input type="text" id="name" name="user_name" placeholder="Name" required /><br />
            </label>
            <br />
            <label for="mail">E-mail:*
            <input type="email" id="mail" name="user_mail" placeholder="email" required /><br />
            </label><br />
            <label for="favourite">What&#39;s your favourite website&#63;*
            <input type="text" id="favourite" name="user_favourite" placeholder="What&#39;s your favourite website&#63;" required /><br />
            </label><br />

            <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />

            <button type="submit">Send</button>
          </form>
        </article>

        <p class="return"><a href="#top">Tahoe Web Shop</a></p>
      </section>
    </div>
    </>
  )
}

export default IndexPage

import * as React from "react";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Contact from "../components/contact";
import Seo from "../components/seo";
import Backup from "../components/back-up";
import TahoeSvg from "../components/tahoe";
import Label from "../components/label";
import Pop from "../components/pop";
import Layout from "../components/layout";

// markup
const FeaturesPage = () => {
  return (
    <Layout>
      <Seo
        title="Features"
        description="Some of the ways we work on Websites here at Tahoe Web Shop."
      />
      <header id="top" className="three">
        <Nav />

        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area shadowdom">
            {/* waves */}

            <Pop icon="waves" top="top" d="M22,14L22,14L22,14z M5.3,13c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1	v-2c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1v2	C3.9,14,4.2,13,5.3,13z M18.7,15c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1c-1.9,0-2.1,1-3.3,1s-1.4-1-3.3-1S3.2,16,2,16v2	c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1s2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1v-2	C20.8,16,20.6,15,18.7,15z M5.3,9c1.2,0,1.4,1,3.3,1c1.9,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1c2,0,2.1-1,3.3-1c1.2,0,1.4,1,3.3,1V8 c-1.2,0-1.4-1-3.3-1c-2,0-2.1,1-3.3,1c-1.2,0-1.4-1-3.3-1C10,7,9.9,8,8.7,8C7.5,8,7.2,7,5.3,7C3.4,7,3.2,8,2,8v2 C3.9,10,4.2,9,5.3,9z" />

            <h1><span>Features</span></h1>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Pedestal />
      </header>

      <main id="local" className="three">
        <Label docket="Local" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">We are on the doorstep.</h3>
            <p>
              We are avaliable online but sometimes it's easier in person, come
              by the studio in Tahoe City to say hi. <i>(by appointment)</i>
            </p>
            <p>Get help with your computer, your phone, wifi problems and so many other things.</p>
            <address>
              Suite B-204
              <br />
              925 North Lake Blvd
              <br />
              Tahoe City
              <br />
              CA, 96145
            </address>
          </div>
          {/* this is a little too subtle */}
          <TahoeSvg />
        </div>

        <Backup />
      </main>

      <section id="performance" className="three">
        <Label docket="Speed is king" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Performance</h3>
            <p>
              Performance runs deeper than how fast does the website load in the
              best conditions. a few moments of work up front can save hours
              down the road leading to more sales during the life of your site.
            </p>
            <h4 className="clamped-4">Test your site with Google's tool</h4>
            <a href="https://web.dev/" target='_blank' rel='noreferrer noopener'>Check it out on web.dev</a>

          </div>

          <svg
            className="rotating loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
          >
            <circle cx="170" cy="170" r="135" stroke="hsl(0, 0%, 85%)" />
            <circle cx="170" cy="170" r="110" stroke="hsl(0, 0%, 90%)" />
            <circle cx="170" cy="170" r="85" stroke="hsl(0, 0%, 95%)" />
          </svg>
        </div>

        <Backup />
      </section>

      <section id="security" className="three">
        <Label docket="Keep it strong" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Security</h3>
            <p>
              The good and the bad part of having a 24/7 store is that you have
              a 24/7 store which is open to customers and those less diseriable,
              we start with the premise your site will be under attack and
              develop a stategy to keep it running through the good and the bad.
            </p>
            <h4 className="clamped-4">Test your security with Mozilla's tool</h4>
            <a href="https://observatory.mozilla.org/" target='_blank' rel='noreferrer noopener'>Observatory</a>
          </div>

          <Pop icon="lock" stroke="white" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </div>

        <Backup />
      </section>

      <section id="seo" className="three">
        <Label docket="Rank on Google" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">S.E.O.</h3>
            <p>
              There is a lot to being on the first page, work with search engine's not against them.
            </p>
            <h4 className="clamped-4">Test your security with Google's tool</h4>
            <a href="https://search.google.com/test/rich-results" target='_blank' rel='noreferrer noopener'>Google Rich Test Results</a>
          </div>

          {/* I know its not white I'm happy with this not to be */}
          <svg enable-background="new 0 0 515.2 522.9" viewBox="0 0 515.2 522.9" xmlns="http://www.w3.org/2000/svg"><circle cx="257.6" cy="265.3" fill="#fefefe" r="257.6" /><path d="m105.7 188.6c25.1-49.6 64.7-81.4 118.8-93.2 54.7-12 104.4.8 148.1 35.8 1.4 1.1 2.7 2.4 3.8 3.4-17 17-33.7 33.7-50.8 50.8-10.5-8.3-22.4-14.9-35.9-18.7-52.3-14.6-106.2 13.3-124.5 64.5-.2.6-.5 1.2-.8 1.8-1-.6-2.1-1-3-1.7-18.6-14.3-37.2-28.5-55.7-42.7z" fill="#e94335" /><path d="m164.4 298.4c7.1 19.1 18 35.4 34.2 48.1 33.4 26.1 81.9 29.5 118.7 8.1.9-.5 1.8-.9 2.6-1.4 5.8 4.4 11.5 8.8 17.3 13.3 12.7 10 25.4 20 38.1 30-25.6 23.9-56.1 37.6-90.7 41.8-49.6 6.2-94.2-6.4-133.1-37.8-19.5-15.7-34.8-35.1-45.7-57.8 2-1.4 4.1-2.8 6-4.3 17.6-13.3 35.1-26.7 52.6-40z" fill="#35a853" /><path d="m375.3 396.5c-12.7-10-25.4-20-38.1-30-5.7-4.5-11.5-8.9-17.3-13.3 15.1-10.4 26.2-23.8 32.1-41.3 1-3 1.8-6 2.6-9.1.2-.6 0-1.3 0-2.4-30.7 0-61.4 0-92.4 0 0-22.3 0-44.2 0-66.5h163c7.5 61.8-3.4 117.5-49.9 162.6z" fill="#4285f3" /><path d="m164.4 298.4c-17.5 13.4-35 26.7-52.5 40.1-2 1.5-4 2.9-6 4.3-24.1-51.4-24.1-102.7-.1-154.1 18.6 14.2 37.1 28.4 55.7 42.6.9.7 2 1.2 3 1.7-6.9 21.7-6.8 43.6-.1 65.4z" fill="#fabb06" /></svg>
        </div>

        <Backup />
      </section>

      <section id="a11y" className="three">
        <Label docket="Everyone can use this" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Accessibility.</h3>
            <p>
              A11y helps everyone, not only those with a dissability.
            </p>
            <h4 className="clamped-4">Test your security with Web AIM's tool</h4>
            <a href="https://wave.webaim.org/" target='_blank' rel='noreferrer noopener'>wave</a>
          </div>

          <Pop icon="a11y" top="" d="M20.5,6c-2.6,0.7-5.7,1-8.5,1S6.1,6.7,3.5,6L3,8c1.9,0.5,4,0.8,6,1v13h2v-6h2v6h2V9c2-0.2,4.1-0.5,6-1L20.5,6z M12,6 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,6,12,6z" />

        </div>

        <Backup />
      </section>

      <section id="dark" className="three">
        <Label docket="Not just party trick." />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Dark Mode</h3>
            <p>
              When a client is looking at your website with their device in dark mode they expect your website to respect that.
            </p>
            <p>Dark mode can also give a huge advantage to battery life as a nice additional use case.</p>
          </div>

          <Pop icon="dark" top="" d="M4.7,19.3h4.6L12,22l2.7-2.7h4.6v-4.6L22,12l-2.7-2.7V4.7h-4.6L12,2L9.3,4.7H4.7v4.6L2,12l2.7,2.7V19.3z M12,6.5 c3,0,5.5,2.4,5.5,5.5S15,17.5,12,17.5V6.5z" />
        </div>

        <Backup />
      </section>

      <section id="email" className="three">
        <Label docket="The Messages." />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Email</h3>
            <p>
              We can set you up with Gmail, Office 365, the apps you want on your phone computer, tablet to be ready to go whenever you want.
            </p>
            <p>We prefer to stay away from forward only emails as these have lead to problems over time.</p>
          </div>

          <Pop icon="email" top="" d="M22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5L4,6H20z M20,18H4V8l8,5l8-5 V18z" />

        </div>

        <Backup />
      </section>

      <section id="domains" className="three">
        <Label docket="Dot Com." />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Domains.</h3>
            <p>
              Your domain is the end of your website name, the dot something, it's not just .com there are over 300 domains avaliable there are some really cool branding things that can be done with these.
            </p>
            <p>If you want to hold onto that, great, if we do it for you that's no problem it's yours at any time.</p>
            <p>Preferably let's get you off Go Daddy or Crazy Domains if you are with them theres a good chance you are over paying or getting a terrible experience.</p>
            <p>Budget depends on which domain but these often cost twenty to thirty dollars per year.</p>
          </div>

          <Pop icon="url" d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
        </div>

        <Backup />
      </section>

      <section id="hosting" className="three">
        <Label docket="The Files" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Hosting.</h3>
            <p>The files that are your website have to be somewhere, this might be refered to as the cloud but we can do some interesting things with more than a folder.</p>
            <p>If you are hosting your website with your own setup then it becomes far more time consuming to get setup and troubleshoot.</p>
            <p>Prices depend on size of storage needed and complexity of tools.</p>
          </div>

          <Pop icon="document" d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
        </div>

        <Backup />
      </section>

      <Contact />
    </Layout>
  );
};

export default FeaturesPage;

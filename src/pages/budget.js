import * as React from "react";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Backup from "../components/back-up";
import Label from "../components/label";

// markup
const NotFoundPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
      <div id="top" className="three">
        <Seo title="budget" />
        <header >
          <Nav />
        </header>
        {/* full row */}

        <div >
          {/* row */}
          <div>{/* stay gold */}</div>
          <div className="single-area">
            <h1><span>Budget</span></h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <path
                  id="svg-dollars"
                  className="pop--google"
                  fill="none"
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                />
            </defs>
            <mask id="dollars-maskout">
                <rect width="24" height="24" fill="white" />
                <path
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                  fill="black"
                />
              </mask>
              <use
                href="#svg-dollars"
                mask="url(#dollars-maskout)"
              />
            </svg>
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
      </div>

      <section id="hourly" className="three">
        <Label docket="Hourly" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Work on demand.</h3>
            <p>
              We can work hourly on demand, starting at $80 an hour, minimum 15 minutes per interaction.
            </p>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>
      
      
      <section id="maintenance" className="three">
        <Label docket="Keep Up" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Maintenance.</h3>
            <p>
              We suggest looking into your website for atleast an hour every month. Website standards change, technologies and design trends get updated, whatever we do each month will make your site the best it can be for your clients and your business.
            </p>
            <p>
              Starting at$600 per year if paid annualy.
              $80 per month for one hour.
            </p>

          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>
      
      <section id="payment" className="three">
        <Label docket="The Transaction" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Payment.</h3>
            <p>
              We can work with you to pay how you want and split it up to monthly payments as needed.
            </p>
            <ul>
              <li>Credit Card</li>
              <li>Check</li>
              <li>Bank Transfer</li>
              <li>PayPal</li>
              <li>Talk to us about other options</li>
            </ul>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>
      
      <section id="501" className="three">
        <Label docket="501" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Nonprofit.</h3>
            <p>
              We work with 501 nonprofit organizations for donation as partial payment.
            </p>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>
      
      <section id="updates" className="three">
        <Label docket="Updates" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Working with current sites.</h3>
            <p>
              Depending on how your site has been developed we may be able to take over, continuing on what has been built.
            </p>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>
      
      <section id="new" className="three">
        <Label docket="Fresh" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">New sites.</h3>
            <p>
              We start at $2k for a new site, depending on how much work is needed.
            </p>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>

      <Contact />
    </div>
  );
};

export default NotFoundPage;

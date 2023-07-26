// TODO this page isnt close to being ready yet
// TODO The bottom section of the top of the page are stupid huge

import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import SEO from "../components/seo";
import Contact from "../components/contact";
import Label from "../components/label";
import Backup from "../components/back-up";
import Layout from "../components/layout";


const ChecklistPage = () => {
  return (
    <Layout>
      <div className="three">

        <header id="top">
          <Nav />
        </header>
        {/* full row */}

        <div>
          {/* row */}
          <div>{/* stay gold */}</div>
          <div>
            <h1>Checklist</h1>
            <p>Are we ready.</p>
          </div>
          <div>{/* stay gold */}</div>
        </div>
        {/* row */}

        <Pedestal />
      </div>

      <section id="seo" className="three extra-long">
        <Label docket="SEO" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">S.E.O.</h3>
            <p>
              Show up on search. This is not a complete list for your site but a good starting point.
            </p>
            <form>
              // TODO make sure this is a proper way of doing a react form
              // TODO make sure these all shown up in google structured data
              <input type='checkbox' id='title' name='title' /><label for='title'>Title</label>
              <input type='checkbox' id='description' name='description' /><label for='description'>Description</label>
              <input type='checkbox' id='slogan' name='slogan' /><label for='slogan'>Slogan</label>
              <input type='checkbox' id='hours' name='hours' /><label for='hours'>Opening Hours</label>
              <input type='checkbox' id='phone' name='phone' /><label for='phone'>Telephone</label>
              <input type='checkbox' id='logo' name='logo' /><label for='logo'>Logo</label>
              <input type='checkbox' id='ogimage' name='ogimage' /><label for='ogimage'>OpenGraph Image</label>
              <input type='checkbox' id='area' name='area' /><label for='area'>Area Served</label>
              <input type='checkbox' id='location' name='location' /><label for='location'>Location</label>
              <input type='checkbox' id='payment' name='payment' /><label for='payment'>Payment Accepted</label>
            </form>


            <article>
              <h3>Social Media Profiles</h3>
              <p>Let's check through all profiles, make sure there is a findable list, preferably a bookmark set to open all.</p>
              <p>If any don't have any activity in the past year take a strong look to see if they are working for or against the company.</p>
              <form>
                <input type='checkbox' id='facebook' name='facebook' /><label for='facebook'>facebook</label>
              </form>

              {/* // TODO save this as a PDF or print or email or something with it */}
            </article>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>

      <Contact />
    </Layout>
  );
};

export default ChecklistPage;

export const Head = () => (
  <SEO
    title="Checklist | Tahoe Web Shop"
    description="Page not found"
  />
)

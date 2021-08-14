import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Backup from "../components/back-up";
import Contact from "../components/contact";
import Pop from "../components/pop";

// import EbptIcon from "../images/ebpt-icon";
import Label from "../components/label";
import Scorecard from "../components/scorecard";
import GithubSvg from "../components/github";

// this image should go dark mode in dark mode
function EbptGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/emeraldbay-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

function SnowledgeGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/snowledge-netlify-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

function CmsfGrab() {
  return (
    <StaticImage
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/cmsf-screengrab.png"
      alt="emerald bay physical therapy website"
    />
  );
}

// markup
const PortfolioPage = () => {
  return (
    <>
      <Seo title="portfolio" />

      <header id="top" className="three">
        <Nav />

        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area shadowdom">

            <Pop icon="dots" top="top" d="M6,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,13,6,13z M6,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S6.55,17,6,17z M6,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,9,6,9z M3,9.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5 s0.5-0.22,0.5-0.5S3.28,9.5,3,9.5z M6,5C5.45,5,5,5.45,5,6s0.45,1,1,1s1-0.45,1-1S6.55,5,6,5z M21,10.5c0.28,0,0.5-0.22,0.5-0.5 S21.28,9.5,21,9.5s-0.5,0.22-0.5,0.5S20.72,10.5,21,10.5z M14,7c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S13.45,7,14,7z M14,3.5 c0.28,0,0.5-0.22,0.5-0.5S14.28,2.5,14,2.5S13.5,2.72,13.5,3S13.72,3.5,14,3.5z M3,13.5c-0.28,0-0.5,0.22-0.5,0.5 s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S3.28,13.5,3,13.5z M10,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S10.28,20.5,10,20.5z M10,3.5c0.28,0,0.5-0.22,0.5-0.5S10.28,2.5,10,2.5S9.5,2.72,9.5,3S9.72,3.5,10,3.5z M10,7c0.55,0,1-0.45,1-1 s-0.45-1-1-1S9,5.45,9,6S9.45,7,10,7z M10,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,12.5,10,12.5z M18,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,13,18,13z M18,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,17,18,17z M18,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,9,18,9z M18,5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,5,18,5z M21,13.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S21.28,13.5,21,13.5z M14,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S14.55,17,14,17z M14,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S14.28,20.5,14,20.5z M10,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,8.5,10,8.5z M10,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S10.55,17,10,17z M14,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S14.83,12.5,14,12.5z M14,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S14.83,8.5,14,8.5z" />


            <h1><span>Portfolio</span></h1>
          </div>
        </div>
        <div>{/* stay gold */}</div>

        <Pedestal />
      </header>

      <main id="ebpt" className="three extra-long">
        <Label docket="EBPT" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3>Emerald Bay Physical Therapy</h3>
            <div className="port">
              <EbptGrab />
            </div>
            <p>Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.</p>
            <p>Full branding, static generated website and print designs.</p>

            {/* this would be really nice for a relational database */}
            <section className="portfolio__tools">
              <h4>Tools</h4>
              <ul>
                {/* each of these can be put in a component */}
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                    <title>
                      Gatsby
                    </title>
                    <path fill="" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z" />
                  </svg>
                  <h5>Gatsby</h5>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 255" className="">

                    {/* outline circle */}
                    <circle cx="134.2" cy="127.6" r="115.1" stroke="" fill="none" strokeWidth="5" className="tool__stroke" />

                    {/* floating circle */}
                    <path d="M253,56.3c0,15.6-12.6,28.2-28.2,28.2s-28.2-12.6-28.2-28.2s12.6-28.2,28.2-28.2 C240.3,28.1,253,40.7,253,56.3z" fill="" />

                    <circle cx="134.2" cy="127.6" r="70" fill="" />
                  </svg>
                  <h5>Pattern Lab</h5>
                </li>
                <li>
                  <svg version="1.1" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" >
                    <path d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z" />
                    <polygon fill="#61DAFB" points="320.8,78.4 320.8,78.4 320.8,78.4  " />
                    <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7" />
                    <polygon fill="#61DAFB" points="520.5,78.1 520.5,78.1 520.5,78.1  " />
                  </svg>
                  <h5>React</h5>
                </li>
                {/*                 <li>
                  <svg version="1.1" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" >
                      <path d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z" />
                      <polygon fill="#61DAFB" points="320.8,78.4 320.8,78.4 320.8,78.4  " />
                      <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7" />
                      <polygon fill="#61DAFB" points="520.5,78.1 520.5,78.1 520.5,78.1  " />
                  </svg>
                  <h5>Netlify Cloud Builds</h5>
                </li> */}
              </ul>
            </section>


            <Scorecard
              site="https://emeraldbay.physio/"
              date="7/27/2021"

              // Lighthouse
              Lp="94"
              La="100"
              Lbp="100"
              Ls="100"

              // Observatory
              Osu="B"
              Osc="75"

              // Wave
              We="0"
              Wc="0"

              // Dark Mode
              Dm="Yes"

              // Deadlink
              Dlc="1"
            />

            {/* <Link to="/portfolio/emeraldbay">Explore the Designs</Link> */}

            <a href="https://github.com/rileybathurst/EBPT" target='_blank' rel='noreferrer' className="button"><GithubSvg />View the code</a>

          </div>

          {/* This looks kinda awful */}
          {/* <Pop icon="ebpt" d="M6.6,7.3c0,0-0.1,0-0.1,0L2,13.8c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1v0c0,0.1,0,0.2,0.1,0.1l5.6-5.6c0,0,0-0.1,0-0.1l0,0 L6.6,7.3z
          M11.8,5.1l-9.6,9.6c0,0,0,0,0,0.1v0c0,0,0.1,0.1,0.1,0l13.8-5.7c0.1,0,0.1-0.1,0-0.2l-3.9-3.9C12.1,5,11.9,5,11.8,5.1z
          M22,13.8l-3.3-5.1c0,0-0.1-0.1-0.1,0l-1.3,0.5c-0.1,0-0.1,0.1,0,0.2l4.6,4.6C21.9,14,22,14,22,13.8L22,13.8 C22,13.9,22,13.9,22,13.8z
          M12,12.8c0.1,0,0.1,0,0.2,0.1l5.1,5.1c0.1,0.1,0.1,0.2,0,0.3c-0.6,0.4-1.6,0.7-2.7,0.7c-0.8,0-1.6-0.2-2.3-0.5 c-0.9-0.5-1.9-0.8-3-0.8c-0.7,0-1.5,0.2-2.3,0.5c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1-0.1,0-0.3l5-5C11.9,12.8,11.9,12.8,12,12.8
          M15.3,15.3L14.6,13c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0l-0.7,0.7L15.3,15.3z
          M21.8,14.7c-1.4-1.4-4.7-4.7-5.1-5.1c0,0-0.1,0-0.1,0L2.7,15.3c-0.3,0.1-0.3,0.6,0,0.8c1,0.3,2.9,0.6,5.6-0.3l3.2-3.2 c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.5,0.2l0.8,0.8l0.7-0.7c0.1-0.1,0.3-0.2,0.4-0.2c0.3,0,0.5,0.2,0.6,0.4l0.4,1.2 c2.5,0.1,5,0.7,6.2,0.9C21.8,15.1,21.9,14.8,21.8,14.7z"
          /> */}
        </div>

        <Backup />
      </main>

      <section id="cmsf" className="three">
        <Label docket="CMSF" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Cordell Marine Sanctuary Foundation</h3>
            <div className="port">
              <CmsfGrab />
            </div>
            <p>A wordpress theme built on an overlapping grid</p>

            <section className="portfolio__tools">
              <h4>Tools</h4>
              <ul>
                <li>
                  <svg
                    viewBox="0 0 122.52 122.523"
                    xmlns="http://www.w3.org/2000/svg"
                    className="paths"
                  >
                    <path
                      d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" />
                    <path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
                    <path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" />
                    <path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
                    <path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
                  </svg>
                  <h5>WordPress</h5>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 255" className="">

                    {/* outline circle */}
                    <circle cx="134.2" cy="127.6" r="115.1" stroke="" fill="none" strokeWidth="5" className="tool__stroke" />

                    {/* floating circle */}
                    <path d="M253,56.3c0,15.6-12.6,28.2-28.2,28.2s-28.2-12.6-28.2-28.2s12.6-28.2,28.2-28.2 C240.3,28.1,253,40.7,253,56.3z" fill="" />

                    <circle cx="134.2" cy="127.6" r="70" fill="" />
                  </svg>
                  <h5>Pattern Lab</h5>
                </li>
              </ul>
            </section>

            <Scorecard
              site="https://cordellfoundation.org/"
              date="7/27/2021"

              // Lighthouse
              Lp="45"
              La="100"
              Lbp="93"
              Ls="93"

              // Observatory
              Osu="A"
              Osc="90"

              // Wave
              We="0"
              Wc="0"

              // Dark Mode
              Dm="Yes"

              // Deadlink
              Dlc="23"
            />

            <a href="https://github.com/rileybathurst/cmsf" target='_blank' rel='noreferrer' className="button"><GithubSvg />View the code</a>


          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Backup />
      </section>

      <section id="snowledge" className="three">
        <Label docket="Snowledge" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Snowledge</h3>
            <div className="port">
              <SnowledgeGrab />
            </div>
            <p>
              Website development &amp; design. Gatsby and Strapi build to supplement the app.
            </p>

            <section className="portfolio__tools">
              <h4>Tools</h4>
              <ul>
                {/* each of these can be put in a component */}
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                    <title>
                      Gatsby
                    </title>
                    <path fill="" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z" />
                  </svg>
                  <h5>Gatsby</h5>
                </li>

                <li>
                  <svg viewBox=".24262095 .26549587 243.32256626 243.58072911" xmlns="http://www.w3.org/2000/svg"
                    className=""><path d="m161.893 165.833v-78.73a5.077 5.077 0 0 0 -5.077-5.076h-78.638v-81.267h159.815a5.077 5.077 0 0 1 5.078 5.077v159.996z" /><path d="m78.178.76v81.267h-75.054a2.539 2.539 0 0 1 -1.796-4.333zm83.715 240.206v-75.133h81.178l-76.844 76.927a2.539 2.539 0 0 1 -4.334-1.794zm-83.715-158.939h81.176a2.539 2.539 0 0 1 2.539 2.538v81.268h-78.638a5.077 5.077 0 0 1 -5.077-5.077z" opacity=".405" /></svg>

                  <h5>Strapi</h5>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 255" className="">

                    {/* outline circle */}
                    <circle cx="134.2" cy="127.6" r="115.1" stroke="" fill="none" strokeWidth="5" className="tool__stroke" />

                    {/* floating circle */}
                    <path d="M253,56.3c0,15.6-12.6,28.2-28.2,28.2s-28.2-12.6-28.2-28.2s12.6-28.2,28.2-28.2 C240.3,28.1,253,40.7,253,56.3z" fill="" />

                    <circle cx="134.2" cy="127.6" r="70" fill="" />
                  </svg>
                  <h5>Pattern Lab</h5>
                </li>

              </ul>
            </section>

            <Scorecard
              site="https://snowledge.netlify.app/"
              date="7/27/2021"

              // Lighthouse
              Lp="45"
              La="93"
              Lbp="100"
              Ls="92"

              // Observatory
              Osu="D+"
              Osc="40"

              // Wave
              We="-"
              Wc="-"

              // Dark Mode
              Dm="No"

              // Deadlink
              Dlc="35"
            />

            {/* <Link to="/portfolio/emeraldbay">Explore the Designs</Link> */}

            <a href="https://github.com/rileybathurst/snowledge" target='_blank' rel='noreferrer' className="button__long"><GithubSvg />View the code</a>

          </div>
          {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.1 77.8">
              <path d="M92.2,8c4.4,4.6,8.9,9.1,13.3,13.6c6.4,6.5,12.8,13,19.1,19.6c5.8,6,11.7,12,17.5,17.9c3.3,3.3,6.5,6.7,9.8,10 c0.1,0.2,0.3,0.3,0.3,0.7c-0.2-0.2-0.5-0.3-0.7-0.5c-9.2-8.1-18.4-16.1-27.6-24.2c-8.6-7.5-17.2-15-25.7-22.6 c-0.8-0.7-1.3-0.7-2.2,0C85.3,31.4,74.5,40.2,63.8,49c-3.1,2.5-6.2,5.1-9.3,7.6c-0.8,0.6-1.4,0.8-2.4,0.4c-4.5-1.5-9-2.9-13.5-4.4 c-0.8-0.3-1.4-0.2-2.2,0.3c-8.6,5.5-17.2,10.9-25.8,16.3c-0.3,0.2-0.6,0.3-0.8,0.6c1.1-1.2,2.2-2.5,3.4-3.7 C19.2,60.6,25.1,55,31,49.5c4.3-4,8.6-8,12.8-12c0.6-0.6,1-0.5,1.5,0.1c2.4,2.7,4.8,5.4,7.2,8.1c0.7,0.8,1.1,0.7,1.7,0 C66.5,33.3,78.8,21,91.1,8.7c0.2-0.2,0.4-0.5,0.6-0.7C91.9,8,92,8,92.2,8z" />
            </svg>
          </div> */}
        </div>


        <Backup />
      </section>

      <Contact />
    </>
  );
};

export default PortfolioPage;

import * as React from "react";
// import { Link } from "gatsby";

import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import Seo from "../components/seo";
import Backup from "../components/back-up";
import Contact from "../components/contact";
import Pop from "../components/pop";
import Label from "../components/label";
import Layout from "../components/layout";

// markup
const ToolsPage = () => {
  return (
    <Layout>
      <Seo
        title="Tools"
        description="What we use to build your website."
      />
      <header id="top" className="three">
        <Nav />

        <div>
          <div>{/* stay gold */}</div>
          <div className="single-area shadowdom">

            <Pop icon="bubbles" top="top" d="M7,10c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S9.2,10,7,10z
          M15,15 c-1.6,0-3,1.4-3,3s1.4,3,3,3s3-1.4,3-3S16.7,15,15,15z
          M16.5,3 c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S22,11.5,22,8.5S19.5,3,16.5,3z" />
            <h1><span>Tools</span></h1>
          </div>
          <div>{/* stay gold */}</div>
        </div>

        <Pedestal />
      </header>

      <section id="gatsby" className="three">
        <div>
          <h2 className="label">Gatsby </h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Our platform of choice.</h3>
            <p>
              By using <a href="https://www.gatsbyjs.com/" target='_blank' rel='noreferrer noopener'>Gatsby</a> static site generation we can push speed, security and development to create your website before your customers get near it.
            </p>
            <p>In fact you are seeing it right now with this site.</p>
          </div>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="paths">
            <title>
              Gatsby
            </title>
            <circle cx="14" cy="14" r="14" fill="none" />
            <path fill="white" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z" />
          </svg>

        </div>

        <Backup />
      </section>

      <section id="strapi" className="three">
        <Label docket="Strapi" />

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">A custom Content Management System.</h3>
            <p>
              Every site needs different content <a href="https://strapi.io/" target='_blank' rel='noreferrer noopener'>Strapi</a> if you build your CMS from scratch it can tailorr perfeectly to your needs including relational models to connect the dots.
            </p>
          </div>

          <svg viewBox=".24262095 .26549587 243.32256626 243.58072911" xmlns="http://www.w3.org/2000/svg"
            className="paths"><g fill="white" fill-rule="evenodd"><path d="m161.893 165.833v-78.73a5.077 5.077 0 0 0 -5.077-5.076h-78.638v-81.267h159.815a5.077 5.077 0 0 1 5.078 5.077v159.996z" /><path d="m78.178.76v81.267h-75.054a2.539 2.539 0 0 1 -1.796-4.333zm83.715 240.206v-75.133h81.178l-76.844 76.927a2.539 2.539 0 0 1 -4.334-1.794zm-83.715-158.939h81.176a2.539 2.539 0 0 1 2.539 2.538v81.268h-78.638a5.077 5.077 0 0 1 -5.077-5.077z" opacity=".405" /></g></svg>
        </div>

        <Backup />
      </section>

      <section id="wordpress" className="three">
        <div>
          <h2 className="label">WordPress </h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">The most used webplatform.</h3>
            <p>
              We have ten years of development in Wordpress but also keep up with the new parts of the platform and the major changes coming.
            </p>
          </div>


          <svg
            viewBox="0 0 122.52 122.523"
            xmlns="http://www.w3.org/2000/svg"
            className="paths"
          >
            <g
              fill="white"
            >
              <path
                d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" />
              <path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
              <path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" />
              <path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
              <path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
            </g>
          </svg>

        </div>

        <Backup />
      </section>

      <section id="guide" className="three">
        <div>
          <h2 className="label">Guides </h2>
          <div>{/* stay gold */}</div>
          <div>{/* stay gold */}</div>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Style Guides.</h3>
            <p>
              We value breaking websites down to building blocks. This way we can find and fix problems quickly and effeciently
            </p>
            <p>Our personal preference is to use <a href="https://patternlab.io/" target='_blank' rel='noreferrer noopener'>Pattern Lab</a></p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 255" className="paths">

            {/* outline circle */}
            <circle cx="134.2" cy="127.6" r="115.1" stroke="white" fill="none" strokeWidth="5" />

            {/* floating circle */}
            <path d="M253,56.3c0,15.6-12.6,28.2-28.2,28.2s-28.2-12.6-28.2-28.2s12.6-28.2,28.2-28.2 C240.3,28.1,253,40.7,253,56.3z" fill="white" />

            <circle cx="134.2" cy="127.6" r="70" fill="white" />
          </svg>

        </div>

        <Backup />
      </section>

      <Contact />
    </Layout>
  );
};

export default ToolsPage;

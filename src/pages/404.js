import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <div class="y-scroll-snapping" dir="ltr">
      <header id="top" class="single-page">
        <nav>
          <ul>
            <li style="--animation-order: 1;"><a href="/#about">About//</a></li>
            <li style="--animation-order: 2;"><a href="/#portfolio">Portfolio//</a></li>
            <li style="--animation-order: 3;"><a href="/#contact">Contact//</a></li>
          </ul>
        </nav>
        <div class="major">
          <object type="image/svg+xml" data="/static/gradient-circle.svg" class="logo"></object>
          <h1>404</h1>
          <p>We are lost.</p>
        </div>

        <div class="pedestal p1">
          <a href="/features.html#local" aria-label="local"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/><path d="M0 0h24v24H0z" fill="none"/></svg>Local</a>
        </div>

        <div class="pedestal p2">
          <a href="/features.html#performance" aria-label="performance"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="#000"/></svg>
            Performance</a>
        </div>

        <div class="pedestal p3">
          <a href="/features.html#security" aria-label="security"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="#000"/></svg>
            Security</a>
        </div>
      </header>
    </div>
  );
};

export default NotFoundPage;

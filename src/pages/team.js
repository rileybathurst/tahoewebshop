import * as React from "react";
import Nav from "../components/nav";
import Pedestal from "../components/pedestal";
import GradientCircle from "../components/gradient-circle";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <>
    <Seo title="team" />
    <div className="container y mandatory-scroll-snapping" dir="ltr">
      <header id="top" className="light three">
        <Nav />
        <div className="grid-place-center grid gr-2 gc-1-4"  > 
        {/* style={{gridAutoColumns: minContent,}} */}
          <GradientCircle />
          <h1 className="gr-1 gc-1">Team</h1>
          <p className="text-center">Tahoe Web Shop</p>
        </div>

          <Pedestal />
      </header>
      <main id="riley" className="lake three">
        <h2 className="vert" >Riley //</h2>
        {/* style="grid-row: 1; justify-self: start; margin: 0;" */}

        <div className="measure profile">
          <div className="info">
            <h3 className="out">Riley Bathurst.</h3>
            <h4>California Dreaming Kiwi</h4>
            <p>Riley has been working with clients from large to small, always up for a challenge and available to create something for you, your company or your project.</p>
            <div className="icons">
              <a href="https://twitter.com/rileybathurst" target="_blank" rel="nofollow noreferrer">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 98 400 400" width="76" height="76" className="tweet" style="display: inline;">
                  <path d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
                    c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
                    c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
                    c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
                    c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
                    C97.7,293.1,124.7,301.6,153.6,301.6" fill="white"/>
                </svg> */}
              </a>

              <a href="https://www.instagram.com/rileybathurst/" target="_blank" rel="nofollow noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 16 132.004 132" width="64" height="64"><path d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" fill="white"/></svg>
              </a>

              <a href="https://github.com/rileybathurst" target="_blank" rel="nofollow noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="48" height="48">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="white"/>
                  </svg>
              </a>
            </div> {/* .icons */}
          </div> {/* .info */}

          <div className="circles">
            <svg height="300" width="300" className="gr-1 gc-1-4 turn">
              <path id="profile"
                fill="none"
                d="
                  M 150, 150
                  m -150, 0
                  a 100,100 0 1,0 300,0
                  a 100,100 0 1,0 -300,0
                "
              />
              <text width="150">
                {/* <textPath xlink:href="#profile">
                  Developer
                </textPath> */}
              </text>
            </svg>
            <video autoPlay loop muted >
            {/* style="max-width: 200px; border-radius: 50%;" */}
              <source src="/static/drone-selfie.webm"
                type="video/webm" />

              <source src="/static/drone-selfie.mp4"
                type="video/mp4" />

              <p>Sorry, Your browser doesn't support HTML5 video. Here is a <a href="myVideo.mp4">link to the video</a> instead.</p>
            </video>
          </div>
        </div> {/* .measure */}
        <p className="vert" ><a href="#top">Tahoe Web Shop</a></p>
        {/* style="grid-row: 3; grid-column: 3; align-self: center;" */}
      </main>
    </div>
  </>
  )
}

export default IndexPage

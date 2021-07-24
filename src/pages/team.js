import * as React from "react";
import { Link } from "gatsby";

import Nav from "../components/nav";
// import Pedestal from "../components/pedestal";
// import GradientCircle from "../components/gradient-circle";

import CircleTextPath from "../components/circle-textpath";
import DroneSelfie from "../images/droneSelfie";

import Seo from "../components/seo";
import TwitterSvg from "../components/twitter";
import InstagramSvg from "../components/instagram";
import GithubSvg from "../components/github";
import Contact from "../components/contact";
import Backup from "../components/back-up";

// this page is gonna need some changes when I add team members but thats a latter problem

// markup
const TeamPage = () => {
  return (
    <div className="y-scroll-snapping" dir="ltr">
    <Seo title="team" />
    <div className="three">
      <header id="top">
        <Nav />
      </header>

      <main>
        <div>
          <h1 className="label">Team //</h1>
        </div>

        <div>
          <div>{/* stay gold */}</div>
          <div>
            <h3 className="clamped-3">Riley Bathurst.</h3>
            <h4 className="clamped-4">California Dreaming Kiwi</h4>
            <p>
              Riley has been working with clients from large to small, always up
              for a challenge and available to create something for you, your
              company or your project.
            </p>
            <div className="icons">
              <a href="https://twitter.com/rileybathurst"
                target="_blank"
                rel="nofollow noreferrer">
                <TwitterSvg />
                @rileybathurst
              </a>

              <a href="https://www.instagram.com/rileybathurst/"
                target="_blank"
                rel="nofollow noreferrer">
                <InstagramSvg />
                @rileybathurst
              </a>

              <a
                href="https://github.com/rileybathurst"
                target="_blank"
                rel="nofollow noreferrer">
                <GithubSvg />
                @rileybathurst
              </a>
            </div>
            {/* .icons */}
          </div>
          {/* .info */}
        </div>

        <div className="circles">
          {/* the negative viewbox means the text doesn't clip */}
          {/* theres a reference to the #profile so the circle is only set once */}
          <CircleTextPath />
          <svg
            height="300"
            width="300"
            viewBox="-25 -25 350 350"
            className="turn rotating"
          >
            <text>
              <textPath xlinkHref="#profile">
                <Link to="/team.html#riley">Riley Bathurst</Link>
              </textPath>
            </text>
          </svg>

          <DroneSelfie />
        </div>
        {/* /.circles */}
      </main>

      <Backup />
    </div>

    <Contact />
    </div>
  );
};

export default TeamPage;

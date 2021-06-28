import React from "react";

const DroneSelfie = ({ videoSrcURL, videoTitle, ...props }) => (
  <video autoPlay loop muted>
    <source
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/drone-selfie.mp4"
      type="video/mp4"
    />
    <source
      src="https://tahoewebshop.s3.us-west-1.amazonaws.com/drone-selfie.webm"
      type="video/webm"
    />

    <p>
      Sorry, Your browser doesn't support HTML5 video. Here is a 
      <a href="/static/drone-selfie.mp4">link to the video</a> instead.
    </p>
    <p className="screen-reader">Riley Bathurst Profile Video</p>
  </video>
);
export default DroneSelfie;

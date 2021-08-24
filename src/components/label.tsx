import React from "react";

function Label(props) {
  return <div>
      <h2 className="label">{props.docket}</h2>{/* i might throw a little unicode here */}
      <div>{/* stay gold */}</div>
      <div>{/* stay gold */}</div>
    </div>
  ;
}

export default Label;

import React from "react";

function Scorecard(props) {
  return <div className="card">
  <div className="scores">
    <h4>Scorecard</h4>
    <span>{props.date}</span>
  </div>
  
  <div className="scorecard">

    <section>
      <h4><a href="https://web.dev/measure/" target='_blank' rel='noreferrer'>web.dev</a></h4> 
      {/* I'd like to link these to an aready done test */}
      <hr />
      <ul>
        <li>Performance <span>{props.Lp}</span> / 100</li>
        <li>Accessibility <span>{props.La}</span> / 100</li>
        <li>Best Practices <span>{props.Lbp}</span> / 100</li>
        <li>SEO <span>{props.Ls}</span> / 100</li>
      </ul>
    </section>

    <section>
      <h4>Obsevatory</h4>
      <hr />
      <ul>
        <li>Summary <span>{props.Osu}</span></li>
        <li>Score <span>{props.Osc}</span> / 100</li>
      </ul>
    </section>

    <section>
      <h4>
        <a href={`https://wave.webaim.org/report#/${props.site}`} target='_blank' rel='noreferrer'>Wave</a></h4>
        <hr />
      <ul>
        <li>Errors <span>{props.We}</span></li>
        <li>Contrast Errors <span>{props.Wc}</span></li>
      </ul>
    </section>

    <section>
      <h4>Dark Mode</h4>
      <hr />

      <ul>
        <li><span>{props.Dm}</span></li>
      </ul>
    </section>

    <section>
      <h4>
        <a href="https://www.deadlinkchecker.com/website-dead-link-checker.asp" target='_blank' rel='noreferrer'>Deadlink Checker</a></h4>
        <hr />

      <ul>
        <li>Broken Links <span>{props.Dlc}</span></li>
      </ul>
    </section>

  </div>
  </div>;
}

export default Scorecard;

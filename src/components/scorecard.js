import React from "react";

function Scorecard(props) {

  function Celebrate(props) {
    const score = props.score;
    const winner = props.winner;

    if (score === winner) {
      return (
        <>
          <span>{props.score}</span>{props.post}
          <span role="img" aria-label="celebration emoji" className="scoremoji">{props.emoji}</span>
        </>
      );
    } else {
      return (
        <>
          <span>{props.score}</span>{props.post}
        </>
      );
    }
  }

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
          <li>Performance <Celebrate score={props.Lp} winner='100' post=' / 100' emoji="🎉🎉🎉" /></li>
          <li>Accessibility <Celebrate score={props.La} winner='100' post=' / 100' emoji="🎉🎉🎉" /></li>
          <li>Best Practices <Celebrate score={props.Lbp} winner='100' post=' / 100' emoji="🎉🎉🎉" /></li>
          <li>SEO <Celebrate score={props.Ls} winner='100' post=' / 100' emoji="🎉🎉🎉" /></li>
        </ul>
      </section>

      <section>
        <h4>Obsevatory</h4>
        <hr />
        <ul>
          <li>Summary <Celebrate score={props.Osu} winner='A+' post='' emoji="🎓" /></li>
          <li>Score <Celebrate score={props.Osc} winner='100' post=' / 100' emoji="🎓" /></li>
        </ul>
      </section>

      <section>
        <h4>
          <a href={`https://wave.webaim.org/report#/${props.site}`} target='_blank' rel='noreferrer'>Wave</a></h4>
        <hr />
        <ul>
          <li>Errors <Celebrate score={props.We} winner='0' post='' emoji="🎳" /></li>
          <li>Contrast Errors <Celebrate score={props.Wc} winner='0' post='' emoji="🎳" /></li>
        </ul>
      </section>

      <section>
        <h4>Dark Mode</h4>
        <hr />

        <ul>
          <li><Celebrate score={props.Dm} winner='Yes' post='' emoji="🌚" /></li>
        </ul>
      </section>

      <section>
        <h4>
          <a href="https://www.deadlinkchecker.com/website-dead-link-checker.asp" target='_blank' rel='noreferrer'>Deadlink Checker</a></h4>
        <hr />

        <ul>
          <li>Broken Links <Celebrate score={props.Dlc} winner='0' post='' emoji="🔗" /></li>
        </ul>
      </section>

    </div>
  </div>;
}

export default Scorecard;

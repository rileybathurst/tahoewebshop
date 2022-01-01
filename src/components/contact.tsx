import React from "react";
import { Link } from "gatsby";

import Label from "./label";

const Contact = () => (
  <section id="contact" className="lake three module extra-long">

    <hr className="hide-beyond-small" />

    <Label docket="Contact" />

    <article>
      {/* row */}
      <div>{/* stay gold */}</div>
      <div>
        <h3 className="clamped-3">
          <a href="https://goo.gl/maps/DhEsvHPR8mUSsnBM8">
            925 N Lake Blvd
            <br />
            Tahoe City
            <br />
            California 96145
            <br />
            United States
          </a>
        </h3>

        <h3 className="clamped-3">
          <a href="mailto:info@tahoewebshop.com" className="button">info@tahoewebshop.com</a>
        </h3>
        <p>No form? Nope, I'm not a huge fan of them, I would prefer just a mail link, you can send from you preferred mail app, or service. This way you know if it works or not and we can just start your mail. I can still make you a form, let's just talk about it first.</p>
        <p><a href="https://vanschneider.com/blog/down-with-contact-forms/" target='_blank' rel='noreferrer'>How about this article on the subject.</a></p>
      </div>
      <div>{/* stay gold */}</div>
    </article>

    <div>
      <p className="third return">
        <Link to="#top">Tahoe Web Shop</Link>
      </p>
    </div>
  </section>
);

export default Contact;

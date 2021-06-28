import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav className="three__row--vert">
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* li style="--animation-order: 1;" */}
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {/* li style="--animation-order: 2;" */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/* li style="--animation-order: 3;" */}
    </ul>
  </nav>
);

export default Nav;

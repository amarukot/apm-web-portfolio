import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav justify-content-center">
      <NavLink exact activeClassName="active" className="nav-link" to="/">
        <h3>home</h3>
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" to="/about">
        <h3>about</h3>
      </NavLink>
      {/* <NavLink
        activeClassName="active"
        className="nav-link"
        to="mailto:aldo.marukot@gmail.com"
      >
        <h3>email</h3>
      </NavLink> */}

      <a
        className="nav-link"
        activeClassName="active"
        href="mailto:aldo.marukot@gmail.com"
      >
        <h3>email</h3>
      </a>
    </nav>
  );
}

export default NavBar;

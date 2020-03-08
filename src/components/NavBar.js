import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/profile-apm.png";

function NavBar() {
  return (
    <nav className="navbar justify-content-center py-0">
      <a className="navbar-brand" href="/">
        <img src={logo} className="logo mb-0" alt="aldo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#nav"
      ></button>
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

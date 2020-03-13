import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/profile-apm.png";

function NavBar() {
  return (
    <div className="sticky-top">
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
        <NavLink
          exact
          activeClassName="active"
          className="nav-link nav-font px-5"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link nav-font px-5"
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link nav-font px-5"
          to="/projects"
        >
          PROJECTS
        </NavLink>
        {/* <NavLink activeClassName="active" className="nav-link" to="/contact">
          <h3>contact</h3>
        </NavLink> */}
      </nav>
      <hr className="green my-0" />
    </div>
  );
}

export default NavBar;

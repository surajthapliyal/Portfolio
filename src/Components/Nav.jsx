import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

export default function Nav() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="" className="logo"></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

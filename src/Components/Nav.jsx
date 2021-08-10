import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    if (dark) {
    }
    setDark(!dark);
  };
  return (
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Suraj</span>
          <span className="grey-color">/&gt;</span>
          <small>A Passionate Software Developer </small>
        </a>
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
  );
}
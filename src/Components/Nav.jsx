import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    if (dark) {
    }
    setDark(!dark);
  };
  return (
    <nav>
      <ul>
        <div className="logo">
          &lt; <span>Suraj</span> /&gt;{" "}
          <small>A Passionate Software Developer</small>
        </div>
        <div className="links">
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
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <button className="dark-mode-btn" onClick={darkMode}>
              <i className="fas fa-adjust"></i>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

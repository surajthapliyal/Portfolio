import React from "react";
import { Link, NavLink } from "react-router-dom";
import SocialLinks from './../SocialLinks';

const LeftCol = () => {
  return (
    <div className="leftCol">
      <p className="name homepagename">Hello World, I'm Suraj </p>
      <p className="para">
        A passionate software development and problem solving geek, having experience in building web apps and competitive programming,
        skilled in full stack web development and data structures & algorithms, with a keen interest in applying software solutions to solve real world problems efficiently.
      </p>
      <SocialLinks />
      <div className="leftCol-buttons-div">
        <button className="btn-leftCol" id="contact-btn-leftCol">
          <Link to="/contact">CONTACT</Link>
        </button>
        <button className="btn-leftCol" id="resume-btn-leftCol">
          <NavLink to="">RESUME</NavLink>
        </button>
      </div>
    </div>
  );
};

export default LeftCol;

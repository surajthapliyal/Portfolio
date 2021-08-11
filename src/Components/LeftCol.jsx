import React from "react";
import SocialLinks from "./SocialLinks";
import { Link, NavLink } from "react-router-dom";

const LeftCol = () => {
  return (
    <div className="leftCol">
      <p className="name">Hi all, I'm Suraj </p>
      <p className="para">
        A passionate Full Stack Software Developer🚀 having an experience of
        building Web applications with JavaScript / ReactJs / NodeJs / Java
        SpringBoot and some other cool libraries and frameworks.
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

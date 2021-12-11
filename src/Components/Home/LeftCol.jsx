import React from "react";
import { Link, NavLink } from "react-router-dom";
import SocialLinks from './../SocialLinks';

const LeftCol = () => {
  return (
    <div className="leftCol">
      <p className="name homepagename">Hello World, I'm Suraj </p>
      <p className="para">
        A passionate Full Stack Software Developer having an experience of
        building Web applications with JavaScript / ReactJs / NodeJs and some other cool libraries and frameworks.
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

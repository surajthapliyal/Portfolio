import React from "react";
import { Link } from "react-router-dom";

export default function LeftSkillCol() {
  return (
    <div className="leftCol">
      <h1 className="name">Skills and Expertise</h1> <br />
      <p className="para">
        I create successful responsive websites that are fast, easy to use, and
        built with best practices. The main area of my expertise is HTML, CSS,
        JS, ReactJS, NodeJS, Java building small and medium web apps, features, backend and coding interactive layouts.
        &nbsp;Regarding problem solving, I am rated 1950+ on Codechef and Leetcode with Knight Badge and solved around 1500+ problems on various programming sites.
      </p>
      <br />
      <p className="skills-visit">
        Visit my &nbsp;
        <span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/suraj-thapliyal-56ba10190/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
        &nbsp; profile or just &nbsp;
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        &nbsp; me.
      </p>
    </div>
  );
}

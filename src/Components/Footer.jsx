import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          {emoji("Made with ❤️ by Suraj Thapliyal")}
          <span className="footer-github">
            <Link to="https://github.com/surajthapliyal/Portfolio">Github</Link>
          </span>
        </p>
      </div>
    </Fade>
  );
}

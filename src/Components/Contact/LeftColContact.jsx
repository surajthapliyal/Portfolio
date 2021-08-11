import React from "react";
import SocialLinks from "../SocialLinks";

export default function LeftColContact() {
  return (
    <div className="leftCol">
      <h1 className="name">Contact Me</h1>
      <p className="para">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? <br />
        MY INBOX IS OPEN FOR ALL.
      </p>

      <h3 className="opportunity">
        Open for opportunities : &nbsp;<span className="yn"> Yes</span> <br />
      </h3>
      <SocialLinks />
    </div>
  );
}

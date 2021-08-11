import React from "react";
import { Fade } from "react-reveal";
import LeftSkillCol from "./LeftSkillCol";
import RightSkillCol from "./RightSkillCol";
import "./skills.css";

export default function Skills() {
  return (
    <div>
      <Fade bottom duration={1000} distance="40px">
        <div className="hero-container">
          <LeftSkillCol />
          <RightSkillCol />
        </div>
      </Fade>
    </div>
  );
}

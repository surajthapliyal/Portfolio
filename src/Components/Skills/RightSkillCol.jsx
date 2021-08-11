import React from "react";
import MySkill from "./MySkill";
export default function RightSkillCol() {
  return (
    <div className="all-skills">
      <MySkill skillName="C" percent="70%" />
      <MySkill skillName="Java" percent="80%" />
      <MySkill skillName="Javascript" percent="75%" />
      <MySkill skillName="ReactJS" percent="75%" />
      <MySkill skillName="NodeJS" percent="70%" />
      <MySkill skillName="DSA" percent="80%" />

      {/* <span>Java</span>
        <span>Javascript</span>
        <span>ReactJS</span>
        <span>NodeJS</span>
        <span>Data Structures And Algorithms</span> */}
    </div>
  );
}

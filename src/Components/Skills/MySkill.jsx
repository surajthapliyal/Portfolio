import React from "react";

export default function MySkill({ skillName, percent }) {
  const styles = { width: `${percent}` };
  return (
    <div className="progress-container">
      <div className="skills">
        <span className="skillName">{skillName}</span>
        <div className="percent">
          <div className="skill-progress" style={styles}></div>
        </div>
      </div>
      <div />
    </div>
  );
}

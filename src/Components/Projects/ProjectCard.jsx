import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ name, description, link }) {
  return (
    <div className="project-card container">
      <a href={link} target="_blank" className="" rel="noreferrer">
        <h2>{name}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}

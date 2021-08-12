import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <h1 className="name">
        Some Projects <br /> To Showcase My Skills
      </h1>
      <div className="projects-container">
        <Fade left duration={1500} distance="1000px">
          <div className="projects-header">
            <i className="fab fa-react" />
            <i className="fab fa-html5" />
            <i className="fab fa-css3-alt" />
            <i className="fab fa-java" />
            <i className="fab fa-js-square" />
            <i className="fab fa-python" />
            <i className="fab fa-npm" />
            <i className="fab fa-node" />
            <i className="fas fa-database" />
          </div>
        </Fade>
        <div className="all-projects">
          <ProjectCard
            name="TODO-LIST"
            description="A react based application where user can add, update and remove todos."
            link="https://github.com/surajthapliyal/Todo-List"
          />
          <ProjectCard
            name="CHATS"
            description="A ReactJS, NodeJS based application where user can chat and share images to each other."
            link="https://github.com/surajthapliyal/Todo-List"
          />
        </div>
        <Fade bottom duration={2000} distance="60px">
          <div className="github-graph">
            <p className="githubHeading">GITHUB CONTRIBUTIONS CHART</p>
            <img
              src="https://ghchart.rshah.org/55198b/surajthapliyal"
              alt="surajthapliyal's Blue Github chart"
            />
          </div>
        </Fade>
      </div>
    </Fade>
  );
}

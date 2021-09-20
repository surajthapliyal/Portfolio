import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
import Icons from "./Icons";
import { allProjects } from "./allProjects";
export default function Projects() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <h1 className="name">
        Some Projects <br /> To Showcase My Skills
      </h1>
      <div className="projects-container">
        <Fade left duration={1500} distance="1000px">
          <div className="projects-header">
            <Icons />
          </div>
        </Fade>
        <div className="all-projects">
          {allProjects.map((project) => {
            return (
              <ProjectCard
                name={project.name}
                description={project.description}
                link={project.link}
              />
            );
          })}
          {/* <ProjectCard
            name="CHATS"
            description="A ReactJS, NodeJS based application where user can chat and share images to each other."
            link="https://github.com/surajthapliyal/Chats/tree/master"
          /> */}
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

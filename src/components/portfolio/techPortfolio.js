import React from "react";
import { techContent } from "./techPortfolioData";
import "../../base-styles/base.scss";
import "./portfolio.scss";

export default function TechPortfolio() {
  const techPortfolio = techContent.map((project, i) => {
    return (
      <div key={i}>
        <h4>{project.projectName}</h4>
        <img src={require(`${project.image}`)} alt={project.alt} />
        <p>
          <span>About: </span>
          {project.description}
        </p>
        <p className="tech">
          <span>Tech Used: </span>
          {project.tech}
        </p>
        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
          GitHub Repo <span id="arrow">&rarr;</span>
        </a>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.urlName} &rarr;
        </a>
      </div>
    );
  });

  return techPortfolio;
}

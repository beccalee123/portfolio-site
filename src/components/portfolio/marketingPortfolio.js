import React from "react";
import { marketingData } from "./marketingPortfolioData";
import "../../base-styles/base.scss";
import "./portfolio.scss";

export default function MarketingPortfolio() {
  const marketingContent = marketingData.map((project, i) => {
    return (
      <div key={i}>
        <h4>{project.title}</h4>
        <img src={require(`${project.image}`)} alt={project.alt} />
        <p id="market1">
          <span>About: </span>
          {project.description}
        </p>
        <p>
          <span>Highlights:</span>
        </p>
        <a href={`${project.media1}`} target="_blank" rel="noopener noreferrer">
          {project.media1Name} &rarr;
        </a>
        <a href={`${project.media2}`} target="_blank" rel="noopener noreferrer">
          {project.media2Name} &rarr;
        </a>
        <a href={`${project.media3}`} target="_blank" rel="noopener noreferrer">
          {project.media3Name} &rarr;
        </a>
        <a href={`${project.media4}`} target="_blank" rel="noopener noreferrer">
          {project.media4Name} &rarr;
        </a>
      </div>
    );
  });

  return marketingContent;
}

import React from "react";

function ProjectCard({ title, description, link , image}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="Image"/>
      <a href={link} target="_blank" rel="noreferrer">Ver proyecto</a>
    </div>
  );
}

export default ProjectCard;

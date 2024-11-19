import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Survival VR Game",
    description: "Videojuego en Unity con inteligencia artificial.",
    link: "https://github.com/tu-repo",
  },
  {
    title: "Web Tracking App",
    description: "Aplicación web para medir pasos y actividad del usuario.",
    link: "https://github.com/tu-repo",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

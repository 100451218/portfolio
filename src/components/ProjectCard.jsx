import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, brief_summary, languages, tools, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="brief-summary">{brief_summary}</p>
      <div className="languages">
        <h4>Programming Languages: &nbsp;</h4>
        {languages.map((lang, index, array)=>
          {
            if (array.length-1=== index){
            return(<span key={index} className="language-tag">
              {lang+" "}
            </span>)
            } else {
              return (<span key={index} className="language-tag">
                {lang+", "}
                &nbsp;
              </span>
              )
            }
            
          })}
      </div>
      <div className="tools">
        <h4>Tools used: &nbsp;</h4>
        {tools.map((tool, index, array)=>
          {
            if (array.length-1=== index){
            return(<span key={index} className="tool-tag">
              {tool+" "}
            </span>)
            } else {
              return (<span key={index} className="tool-tag">
                {tool+", "}
                &nbsp;
              </span>)
            }
            
          })}
      </div>
      <div className="description">
        {description.map((desc, index) => (
          <div  key={index} className="text-image">
            <p >{desc.text}</p>
            {desc.image && <img id={"image"+desc.image} src={desc.image} alt="project"/>}
          </div>
        ))}
      </div>
      <br/>
      <br/>
      {link && <a href={link.link} target="_blank" rel="noreferrer"><span>{link.text}</span></a>}
    </div>
  );
}

export default ProjectCard;

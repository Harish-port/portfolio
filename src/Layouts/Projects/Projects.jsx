import React from "react";
import "./Projects.scss";
import data from "../../Utils/data.json";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="project-content">
          <p>Projects</p>
          <h4 className="heading">
            Each project is a unique piece of development 🧩
          </h4>
          <div className="projects-list-wrapper">
            {data.projects.map(
              ({ title, description, techstack, links }, i) => (
                <div className="projects-list" key={i}>
                  <div className="project-display">
                    <img
                      src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                      alt="NA"
                    />
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="tech-stack">
                      <p className="tech1">{techstack[0]}</p>
                      <p className="tech2">{techstack[1]}</p>
                      <p className="tech3">{techstack[2]}</p>
                      <p className="tech4">{techstack[3]}</p>
                    </div>
                    <div className="project-source-view">
                      <a
                        target="_blank"
                        href={links.sourcecode}
                        rel="noreferrer"
                      >
                        Code 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                      </a>
                      <a
                        target="_blank"
                        href={links.livedemolink}
                        rel="noreferrer"
                      >
                        Live Demo{" "}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

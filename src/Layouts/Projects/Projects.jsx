import React from 'react';
import './Projects.scss';
import data from '../../Utils/data.json';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <div className="project-content">
                    <p>PORTFOLIO</p>
                    <h4 className='heading'>Each project is a unique piece of development 🧩</h4>
                    <div className="projects-list-wrapper">
                        {
                            data.projects.map(({title,description,techstack,links}, i) => (
                                <div className='projects-list'key={i} >
                                    <div className='project-display'>
                                        <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='NA' />
                                    </div>
                                    <div className="project-info">
                                        <h3 className='project-title'>{title}</h3>
                                        <p className="project-description">
                                            {description}
                                        </p>
                                        <div className='tech-stack'>
                                            <p className='tech1'>{techstack[0]}</p>
                                            <p className='tech2'>{techstack[1]}</p>
                                            <p className='tech3'>{techstack[2]}</p>
                                            <p className='tech4'>{techstack[3]}</p>
                                        </div>
                                        <div className="project-source-view">
                                            <a target="_blank" href={links.sourcecode} rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                                            <a target="_blank" href={links.livedemolink} rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <div className="project-content">
                    <p>PORTFOLIO</p>
                    <h4 className='heading'>Each project is a unique piece of development 🧩</h4>
                    <div className="projects-list-wrapper">
                        <div className='projects-list'>
                            <div className='project-display'>
                                <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='NA' />
                            </div>
                            <div className="project-info">
                                <h3 className='project-title'>Project Title</h3>
                                <p className="project-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dolorem officia suscipit un   de voluptate labore omnis eum, sapiente quam est.
                                </p>
                                <div className='tech-stack'>
                                    <p className='tech1'>React</p>
                                    <p className='tech2'>SAss</p>
                                </div>
                                <div className="project-source-view">
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Live Demo<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='projects-list'>
                            <div className='project-display'>
                                <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='NA' />
                            </div>
                            <div className="project-info">
                                <h3 className='project-title'>Project Title</h3>
                                <p className="project-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dolorem officia suscipit un   de voluptate labore omnis eum, sapiente quam est.
                                </p>
                                <div className='tech-stack'>
                                    <p className='tech1'>React</p>
                                    <p className='tech2'>SAss</p>
                                </div>
                                <div className="project-source-view">
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Live Demo<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='projects-list'>
                            <div className='project-display'>
                                <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='NA' />
                            </div>
                            <div className="project-info">
                                <h3 className='project-title'>Project Title</h3>
                                <p className="project-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dolorem officia suscipit un   de voluptate labore omnis eum, sapiente quam est.
                                </p>
                                <div className='tech-stack'>
                                    <p className='tech1'>React</p>
                                    <p className='tech2'>SAss</p>
                                </div>
                                <div className="project-source-view">
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
                                    <a target="_blank" href="https://github.com/Harish-port" rel="noreferrer">Live Demo<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
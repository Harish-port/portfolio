import React from 'react';
import './Main.scss';
import Hero from '../../Assets/Images/trek2.png'

function Main() {
    return (
        <section className='section-wrapper'>
            <div className='main-container'>
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>
                                Front-End React Developer
                            </h1>
                            <img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="NA" />
                            <p>
                                Hi, I'm Harish S. A passionate Front-end React Developer based in Bengaluru. 📍
                            </p>
                            <span>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/harish-s-906340175/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/Harish-port"><i class="fa-brands fa-github">
                                </i>
                                </a>
                            </span>
                        </div>
                        <div className="hero-image">
                            <img src={Hero} alt="NA" />
                        </div>
                    </div>
                    <div className="skills">
                        <p className='tech-stack-para'>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                <li>
                                    <img src='https://img.icons8.com/color/144/null/html-5' alt="" />
                                    <p className='img-description'>HTML5</p>
                                </li>
                                <li>
                                    <img src='https://img.icons8.com/color/144/null/css3' alt="" />
                                    <p className='img-description'>CSS3</p>
                                </li>
                                <li>
                                    <img src='https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png' alt="" />
                                    <p className='img-description'>SASS</p>
                                </li>
                                <li>
                                    <img src='https://img.icons8.com/color/144/null/javascript' alt="" />
                                    <p className='img-description'>Javascript</p>
                                </li>
                                <li>
                                    <img src='https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png' alt="" />
                                    <p className='img-description'>ReactJs</p>
                                </li>
                                <li>
                                    <img src='https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png' alt="" />
                                    <p className='img-description'>Redux</p>
                                </li>

                                <li>
                                    <img src='https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png' alt="" />
                                    <p className='img-description'>Typescript</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
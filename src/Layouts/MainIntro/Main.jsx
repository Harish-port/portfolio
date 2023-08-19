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
                    {/* <div className="skills">
                        Skills
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Main
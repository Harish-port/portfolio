import React, { useState } from 'react';
import './Main.scss';
import Hero from '../../Assets/Images/trek55.png'
import data from '../../Utils/data.json';
function Main() {
    const [highlightedButton, setHighlightedButton] = useState(1);
    const handleButtonClick = (buttonId) => {
        setHighlightedButton(buttonId)
    }
    return (
        <section className='section-wrapper' id='home'>
            <div className='main-container'>
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>
                                Front-End React Developer <img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="NA" />
                            </h1>
                            <p>
                                Hi, I'm Harish. A passionate Front-End React Developer based in Karnataka, Bengaluru. 📍
                            </p>
                            <span className='social-links'>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/harish-s-906340175/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/Harish-port"><i className="fa-brands fa-github">
                                </i>
                                </a>
                            </span>
                        </div>
                        <div className="hero-image">
                            <img  src={Hero} alt="NA" />
                        </div>
                    </div>
                    <p className='skills-heading'>Skills</p>
                    <div className="skills-tools-section">
                        <div className="toggle-button">
                            <button className={`tech-stack-list ${highlightedButton === 1 ? 'selected' : 'unselected'}`} onClick={() => handleButtonClick(1)} >Tech Stack</button>
                            <button className={`tools-list ${highlightedButton === 2 ? 'selected' : 'unselected'}`} onClick={() => handleButtonClick(2)}>Tools</button>
                        </div>
                    </div>
                    {
                        highlightedButton === 1 &&
                        <div className="skills">
                            <div className="logos">
                                <ul>
                                    {
                                        data.skills.map((info, i) => (
                                            <li key={i}>
                                                <img src={info.image} alt="Logos" />
                                                <p className='img-description'>{info.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    }
                    {
                        highlightedButton === 2 &&
                        <div className="tools">
                            <div className="logos">
                                <ul>
                                    {
                                        data.tools.map((info, i) => (
                                            <li key={i}>
                                                <img src={info.image} alt="Logos" />
                                                <p className='img-description'>{info.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Main
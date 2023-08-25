import React from 'react';
import './About.scss';

function About() {
    return (
        <div className='about-wrapper' id='about'>
            <div className='about-container'>
                <img src='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='NA' />
                <div className='description'>
                    <h3>ABOUT ME</h3>
                    <h4 className='heading'>A dedicated Front-End Developer based in Karnataka, Bengaluru 📍</h4>
                    <p className='summary'>
                        As a Software Engineer having close to 5 years of experience in front-end development in the IT industry,I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
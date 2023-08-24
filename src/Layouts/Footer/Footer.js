import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='footer-container' id='footer'>
        <div className='footer-content'>
          <h1>Copyright @2023.All rights are reserved</h1>
          <div className='footer-social-links'>
            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/harish-s-906340175/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/Harish-port"><i className="fa-brands fa-github">
            </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
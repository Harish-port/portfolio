import React from 'react';
import './Header.scss';

function Header() {

  const handleSideNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-container") {
      x.className += " responsive";
    } else {
      x.className = "header-container";
    }
  }

  return (
    <div id='header'>
      <nav className={'header-container responsive'} id="myTopnav">
        <h3 className='logo'>Harish.dev</h3>
        <ul>
          <li>
            <a href='#header'>
              Home
            </a>
          </li>
          <li>
            <a href='#about'>
              About
            </a>
          </li>
          <li>
            <a href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact'>
              Contact
            </a>
          </li>
          <li className='toggle-nav-icon'>
            <a href="javascript:void(0);" className="icon" onClick={handleSideNav}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
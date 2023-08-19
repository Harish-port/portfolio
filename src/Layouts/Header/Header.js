import React from 'react';
import './Header.scss';

function Header() {

  const handleSideNav = () => {
    console.log("tres");
    var x = document.getElementById("myTopnav");
    if (x.className === "header-container") {
      x.className += " responsive";
    } else {
      x.className = "header-container";
    }
  }

  return (
    <>
      <nav className={'header-container responsive'} id="myTopnav">
        <h3 className='logo'>Harish.dev</h3>
        <ul>
          <li>
            <a href='#home'>
              Home
            </a>
          </li>
          <li>
            <a href='#home'>
              About
            </a>
          </li>
          <li>
            <a href='#home'>
              Projects
            </a>
          </li>
          <li>
            <a href='#home'>
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
    </>
  )
}

export default Header;
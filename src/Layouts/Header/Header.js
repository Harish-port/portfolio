import React from 'react';
import './Header.scss';

function Header() {
  return (
    <>
      <nav className='header-container'>
        <h3 className='logo'>Harish.dev</h3>
        {/* Hamburger icon  */}
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
          </label>
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
        </ul>
      </nav>
    
    </>
  )
}

export default Header;
import React from 'react';
import './Header.scss';

function Header() {
  return (
    <nav className='header-container'>
      <h3 className='logo'>Harish.dev</h3>
      <ul>
        <li>
          <a href='#home'>
          </a>
          Home
        </li>
        <li>
          <a href='#home'>
          </a>
          About
        </li>
        <li>
          <a href='#home'>
          </a>
          Projects
        </li>
        <li>
          <a href='#home'>
          </a>
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Header;
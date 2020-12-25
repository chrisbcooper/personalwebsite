import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className='navbar navbar-dark sticky-top navbar-expand-lg  font'>
      <Link
        className='navbar-brand'
        to='homepage'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='nav-button'>CC</button>
      </Link>

      <div className='disappear-small'>
        <ul className='navbar-nav ml-auto right'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='aboutme'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className='nav-button'>About Me</button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className='nav-button'>Projects</button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='contactme'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className='nav-button nav-item'>Contact Me</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

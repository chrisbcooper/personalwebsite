import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import SideDrawer from './SideDrawer';

function Nav() {

  const [sidedDrawerOpen, setSideDrawerOpen] = useState(false)

  
  window.addEventListener('scroll', () => {
    if(document.getElementById('top-page').getBoundingClientRect().bottom <= 0) {
      changeNavTop(false);
    } else if(navTop && document.getElementById('top-page').getBoundingClientRect().bottom > 0) {
      changeNavTop(true);
    }
  });

  const [navTop, changeNavTop] = useState(true);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sidedDrawerOpen);
  }


  return (
    <nav className={`font ${navTop ? 'no-bottom-padding' : 'nav-white '}`} id='navbar'>
    <div className='nav-logo' >
      <Link
        className={`nav-item`}
        to='top-page'
        spy={true}
        smooth={true}
        duration={1000}
      > CC
      </Link>
      </div>
      <div className="spacer"></div>
      <div className='nav-link-outer' >
        <ul>
          <li className='nav-item'>
            <Link
              className={`nav-link`}
              to='aboutme'
              spy={true}
              smooth={true}
              duration={1000}
            >About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link`}
              to='experience'
              spy={true}
              smooth={true}
              duration={1000}
            >Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link`}
              to='projects'
              spy={true}
              smooth={true}
              duration={1000}
            >Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link`}
              to='contactme'
              spy={true}
              smooth={true}
              duration={1000}
            > Contact Me
            </Link>
          </li>
        </ul>
        </div>
        <div>
          <button className='toggler' onClick={drawerToggleClickHandler} ><FontAwesomeIcon icon={faBars} className='bars' size='2x' /></button>
          {<div><SideDrawer toggle={drawerToggleClickHandler} open={sidedDrawerOpen} /> { sidedDrawerOpen &&
            <div className="backdrop" onClick={drawerToggleClickHandler} />}
            </div> }
        </div>
    </nav>
  );
}

export default Nav;

import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

function SideDrawer({open, toggle}) {

    let c  = 'side-drawer'

    if (open === true) {
        c = 'side-drawer open';
    } 

    return (
        <nav className={c}>
            <button className='x-button' onClick={toggle}>
                <FontAwesomeIcon icon={faWindowClose} size='2x' />
            </button>
            <ul>
          <li >
            <Link
              to='aboutme'
              spy={true}
              smooth={true}
              duration={1000}
            >About Me
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              spy={true}
              smooth={true}
              duration={1000}
            >Experience
            </Link>
          </li>
          <li >
            <Link
              to='projects'
              spy={true}
              smooth={true}
              duration={1000}
            >Projects
            </Link>
          </li>
          <li >
            <Link
              to='contactme'
              spy={true}
              smooth={true}
              duration={1000}
            > Contact Me
            </Link>
          </li>
        </ul>
        </nav>
    );
}
export default SideDrawer;

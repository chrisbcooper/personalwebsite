import React, {useState} from 'react';
import { Link } from 'react-scroll';

function Nav() {


  const [navTop, changeNavTop] = useState(true);

  //add an event listener to change color of navbar

  const changeNav = () => {
    if(document.getElementById('top-page').getBoundingClientRect().bottom <= 0) {
      changeNavTop(false);
    } else if(navTop && document.getElementById('top-page').getBoundingClientRect().bottom > 0) {
      changeNavTop(true);
    }
  }

  window.addEventListener('scroll', changeNav);

  

  


  return (
    <nav className={`font ${navTop ? 'no-bottom-padding' : 'nav-white '}`} id='navbar'>
      <Link
        className={`nav-item`}
        to='top-page'
        spy={true}
        smooth={true}
        duration={1000}
      > CC
      </Link>
        <ul className='nav-link-outer'>
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
    </nav>
  );
}

export default Nav;

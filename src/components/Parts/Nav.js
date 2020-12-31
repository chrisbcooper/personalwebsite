import React, {useState} from 'react';
import { Link } from 'react-scroll';

function Nav() {

  
  window.addEventListener('scroll', () => {
    if(document.getElementById('top-page').getBoundingClientRect().bottom <= 0) {
      changeNavTop(false);
    } else if(navTop && document.getElementById('top-page').getBoundingClientRect().bottom > 0) {
      changeNavTop(true);
    }
  });

  const [navTop, changeNavTop] = useState(true);


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
    </nav>
  );
}

export default Nav;

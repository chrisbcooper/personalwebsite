import React, {useState} from 'react';
import { Link } from 'react-scroll';

function Nav() {


  const [navTop, changeNavTop] = useState(true);

  //add an event listener to change color of navbar

  const changeNav = () => {
    if(navTop && window.scrollY >= 700) {
      changeNavTop(false);
    } else if(!navTop && window.scrollY < 700) {
      changeNavTop(true);
    }
  }

  window.addEventListener('scroll', changeNav)

  


  return (
    <nav className={`font ${navTop ? '' : 'nav-white'}`}>
      <Link
        className={`nav-logo ${navTop ? 'link-white' : 'link-blue'}`}
        to='homepage'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='nav-button'>CC</button>
      </Link>
        <ul className='nav-link-outer'>
          <li className='nav-item'>
            <Link
              className={`nav-link ${navTop ? 'link-white' : 'link-blue'}`}
              to='aboutme'
              spy={true}
              smooth={true}
              duration={500}
            >About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${navTop ? 'link-white' : 'link-blue'}`}
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
            >Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${navTop ? 'link-white' : 'link-blue'}`}
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

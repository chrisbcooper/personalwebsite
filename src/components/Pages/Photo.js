import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Photo() {

  const [showHeader, setShowHeader] = useState(true);
  const [showParagraph, setShowParagraph] = useState(true);
 
  window.addEventListener('scroll', () => {
    if(showHeader === true && document.getElementById('navbar').getBoundingClientRect().bottom + 40 > 
    document.getElementById('intro-name').getBoundingClientRect().top) {
      setShowHeader(false);
    } else if (showHeader === false && document.getElementById('navbar').getBoundingClientRect().bottom + 40 <= 
    document.getElementById('intro-name').getBoundingClientRect().top){
      setShowHeader(true);
    }

    if(showParagraph === true &&document.getElementById('navbar').getBoundingClientRect().bottom + 40 > 
    document.getElementById('intro-description').getBoundingClientRect().top) {
      setShowParagraph(false);
    } else if(showParagraph === false && document.getElementById('navbar').getBoundingClientRect().bottom + 40 <=
    document.getElementById('intro-description').getBoundingClientRect().top) {
      setShowParagraph(true);
    }
  });


  return (
      <div className='header font' id='top-page' >
        <div className='middle-text'>
        <h1 id='intro-name'
        className={`${showHeader ? 'display' : 'display-none'}`}
        >Hi! I'm Christopher Cooper</h1>
        <p id='intro-description' className={`${showParagraph ? 'display' : 'display-none'}`}>Aspiring Software Engineer</p>
        </div>
        <Link to='aboutme'
        spy={true}
        smooth={true}
        duration={1000}
        className='down-icon'><FontAwesomeIcon className='icon' size='3x' icon={faChevronCircleDown} /></Link>
      </div>
  );
}

export default Photo;

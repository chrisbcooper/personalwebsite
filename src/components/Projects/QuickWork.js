import React, {useState} from 'react';
import chatPhoto from '../../img/QuickWork/chatPhoto.png';
import detailsPhoto from '../../img/QuickWork/detailsPhoto.png';
import feedPhoto from '../../img/QuickWork/feedPhoto.png';
import profilePhoto from '../../img/QuickWork/profilePhoto.png';
import { Carousel } from 'react-bootstrap';
import SpotifyInsiderProfileNarrow from '../../img/SpotifyInsider/SpotifyInsiderProfileNarrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function QuickWork() {

  const[width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  }


  window.addEventListener('resize', changeWidth);


  const Description = () => (
    <div>
    <p>
    I created this iOS application with two friends while taking a course
    through CodePath at UCI. With so many people being out of work because
    of COVID-19, many people are trying to find any kind of work.
    QuickWork allows those in a community to contact and communicate with
    those around them to find jobs that anyone can do. The data was hosted
    on Heroku, and this allowed there to be a global feed of all of the
    tasks that you can do for your community.</p>
    <div className='project-technologies-right'>
      <p>Swift</p>
      <p>Parse</p>
      <p>Heroku</p>
    </div>
    <div className='project-icons-right'>
    <a href="https://github.com/joshualchan/QuickWork" className='github-link' rel="noopener noreferrer" target='_blank'>
    <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
    </div>
    </div>
  );

return (
<div className='project-item'>
      <div className='project-container'>
        
        <div className='project-description-right' >
        <h3>QuickWork</h3>
        {width > 768 && <Description />}
        </div>
        <div>
        <div className='project-pic-container' >
          <a href="https://spotify-insider.herokuapp.com"  rel="noopener noreferrer" target='_blank'>
          <span className="helper"></span> <img src={SpotifyInsiderProfileNarrow} alt="" className='project-pic' />
          </a>
          
        </div>
        {width <= 768 && <Description />}
      </div>
      </div>
    </div>
  );
}

export default QuickWork;

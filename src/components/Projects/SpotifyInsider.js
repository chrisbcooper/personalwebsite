import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SpotifyInsiderProfile from '../../img/SpotifyInsider/SpotifyInsiderProfile.png';
import SpotifyInsiderProfileNarrow from '../../img/SpotifyInsider/SpotifyInsiderProfileNarrow.png';

function SpotifyInsider() {


  const[width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  }


  window.addEventListener('resize', changeWidth);



  return (
    <div className='project-item'>
      <div className='project-container'>
      <div>
        {width <= 768 && <h3 style={{textAlign: 'left'}} >Spotify Insider</h3>}
        <div className='project-pic-container'>
          <a href="https://spotify-insider.herokuapp.com" className='project-link' rel="noopener noreferrer" target='_blank'>
          <span className="helper"></span><img src={SpotifyInsiderProfileNarrow} alt="" className='project-pic' />
          </a>
        </div>
        </div>
        <div className='project-description' >
          {width > 768 && <h3>Spotify Insider</h3>}
          <p>
          id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo m
          </p>
          <div className='project-technologies'>
            <p>Reactjs</p>
            <p>Node.js</p>
            <p>Spotify Web API</p>
          </div>
          <div className='project-icons'>
          <a href="https://github.com/chrisbcooper/Spotify-Insider" className='github-link' rel="noopener noreferrer" target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotifyInsider;

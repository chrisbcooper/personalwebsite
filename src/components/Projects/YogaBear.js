import React, {useState} from 'react';
import yogaBear from '../../img/YogaBear/yoga-bear.png';
import yogaComputerPic from '../../img/YogaBear/yoga-computer-pic.jpg';
import bears from '../../img/YogaBear/bears.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SpotifyInsiderProfileNarrow from '../../img/SpotifyInsider/SpotifyInsiderProfileNarrow.png';

function YogaBear () {

  const[width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  }


  window.addEventListener('resize', changeWidth);


  return (
    <div className='project-item'>
      <div className='project-container'>
        <div>
        {width <= 768 && <h3 style={{textAlign: 'left'}} >YogaBear</h3>}
        <div className='project-pic-container' >
          <a href="https://spotify-insider.herokuapp.com" rel="noopener noreferrer" target='_blank'>
          <span className="helper"></span><img src={SpotifyInsiderProfileNarrow} alt="" className='project-pic' />
          </a>
          </div>
        </div>
        <div className='project-description' >
        {width > 768 && <h3>YogaBear</h3>}
          <p>
          YogaBear was an application that my friends and I created at HackSC.
          This app allows users to attempt yoga poses and compares their forms
          with those of professionals. It then tracks their progression to help
          them improve. We built it using the Always AI pose estimation API to
          compare a live video to a person in a picture. We were able to get a
          live connection between the Rasberry Pi and the Python server so that
          the algorithm could be executed for the user in real time. This
          project was created so that users could improve their form and mental
          health over time.</p>
          <div className='project-technologies'>
            <p>Java</p>
            <p>Python</p>
            <p>Always AI</p>
          </div>
          <div className='project-icons'>
          <a href="https://github.com/chrisbcooper/YogaBear"  rel="noopener noreferrer" className='github-link' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x'/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YogaBear;

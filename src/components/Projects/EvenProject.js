import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function EvenProject({name, projectPic, tech1, tech2, tech3, githubLink, link, description}) {

  const[width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  }


  window.addEventListener('resize', changeWidth);


  const Description = () => (
    <div>
    <p>
    {description}</p>
    <div className='project-technologies-right'>
      <p>{tech1}</p>
      <p>{tech2}</p>
      <p>{tech3}</p>
    </div>
    <div className='project-icons-right'>
    <a href={githubLink} className='github-link' rel="noopener noreferrer" target='_blank'>
    <FontAwesomeIcon icon={faGithub} size='2x' />
    </a>
    </div>
    </div>
  );

return (
<div className='project-item'>
      <div className='project-container'>
        
        <div className='project-description-right' >
        <h3>{name}</h3>
        {width > 768 && <Description />}
        </div>
        <div>
        <div className='project-pic-container' >
          <a href={link} rel="noopener noreferrer" target='_blank'>
          <span className="helper"></span> <img src={projectPic} alt="" className='project-pic' />
          </a>
          
        </div>
        {width <= 768 && <Description />}
      </div>
      </div>
    </div>
  );
}

export default EvenProject;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function OtherProjectsCard({name, description, githublink, tech1, tech2, tech3}) {
  return (
    <div className="other-projects-item">
      <div className="other-header">
        <div className='other-github' >
          <a href={githublink} className='github-link' rel="noopener noreferrer" target='_blank'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
        <div className="other-name">
          <h3>{name}</h3>
        </div>
        <div className="other-description">
          <p>{description}</p>
        </div>
        </div>
        <div className="other-tech">
          <p>{tech1}</p>
          <p>{tech2}</p>
          <p>{tech3}</p>
        </div>
    </div>
  );
}

export default OtherProjectsCard;

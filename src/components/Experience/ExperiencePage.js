import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

function ExperiencePage({logo, name, position, time, description}) {
  return (
    
    <div className="experience-item">
      <div className='experience-icon-outer' >
        <FontAwesomeIcon icon={faBriefcase} className='experience-icon' />
      </div>
      <div className="experience-name">
        <h1>{name}</h1>
        <p>{time}</p>
      </div>
      <div className="experience-description"> 
      <h3>{position}</h3>
      <p>{description}</p>
      </div>
    </div>
  );
}

export default ExperiencePage;

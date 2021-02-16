import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUniversity} from "@fortawesome/free-solid-svg-icons";


function EducationPage() {

  return (
    <div className='experience-container'>
        <div className="experience-item">
          <div className='experience-icon-outer' >
            <FontAwesomeIcon icon={faUniversity} className='experience-icon'/>
          </div>
          <div className="experience-name">
            <h1>University of Southern California</h1>
            <p>August 2019 - Present</p>
          </div>
          <div className="experience-description"> 
          <h3>B.S. Computer Science</h3>
          <p>I am currently a sophomore at USC studying Computer Science. At school I am
          involved in two clubs, CAIS++ and Scope. CAIS++ is a group of students that focus on Artificial Integlligence
          and how it can be used for social good. Scope is a club where a group of students gather to learn different frameworks, 
          and create projects based on the frameworks that they learned. I am also a member of the club basketball team, and 
          the Phi Delta Theta fraternity.
          </p>
          </div>
        </div>
      </div>

  );
}

export default EducationPage;




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
          <p>I am currently a sophomore at USC studying Computer Science. At school I am involved
          with CAIS++, which focuses on using AI for social good. Non computer science 
          related, I am also a member of the club basketball team at USC.
          </p>
          </div>
        </div>
      </div>

  );
}

export default EducationPage;




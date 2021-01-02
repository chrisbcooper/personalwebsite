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
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem</p>
          </div>
        </div>
      </div>

  );
}

export default EducationPage;




import React from 'react';
import InkedSportsLogo from '../../img/Experience/InkedSportsLogo.jpeg';
import ExperiencePage from './ExperiencePage';

function Experience() {
  return (
    <div id='experience' className='font'>
    <h1>Experience</h1>
      <div className='experience-container'>
        <div className="experience-item">
          <div className='experience-icon' >

          </div>
          <div className="experience-name">
            <h1>Software Engineering Intern</h1>
            <p>December 2020 - Present</p>
          </div>
          <div className="experience-description"> 
          <h3>Inked Sports</h3>
          <p>This is a description of the experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

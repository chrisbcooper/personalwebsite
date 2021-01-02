import React from 'react';
import InkedSportsLogo from '../../img/Experience/InkedSportsLogo.jpeg';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';

function Experience() {

  return (
    <div id='experience' className='font'>
    <h1>Experience</h1>
    <div className='experience-container'>
      <ExperiencePage 
        position='Software Engineering Intern' 
        time='December 2020 - Present'
        name='Inked Sports'
        description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem'
      />
    </div>
      <h1>Education</h1>
      <div className='experience-container'>
      <EducationPage />
      </div>
    </div>
  );
}

export default Experience;

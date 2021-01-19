import React from 'react';
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
        description="Inked Sports is a student run startup 
        that looks to use Social Media to help college athletes
        with their personal branding. The app is going to use 
        the Instagram API to receive and analyze the data from
        their social media, and use that to help them get deals
        with companies. The app has a Firebase backend, and a 
        React Native frontend."
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

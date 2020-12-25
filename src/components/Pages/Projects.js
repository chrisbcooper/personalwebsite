import React from 'react';
import YogaBear from '../Projects/YogaBear';
import QuickWork from '../Projects/QuickWork';

function Projects() {
  return (
    <div id='projects' className='projects container-fluid font'>
      <h1>Projects</h1>
      <div className='container'>
        <YogaBear />
        <QuickWork />
      </div>
    </div>
  );
}

export default Projects;

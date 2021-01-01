import React from 'react';
import YogaBear from './YogaBear';
import QuickWork from './QuickWork';
import SpotifyInsider from './SpotifyInsider';

function Projects() {
  return (
    <div id='projects' className='projects container-fluid font'>
      <h1>Projects</h1>
      <div className='container'>
        <SpotifyInsider />
        <YogaBear />
        <QuickWork />
      </div>
    </div>
  );
}

export default Projects;

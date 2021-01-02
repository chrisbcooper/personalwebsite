import React from 'react';
import YogaBear from './YogaBear';
import QuickWork from './QuickWork';
import SpotifyInsider from './SpotifyInsider';
import OtherProjectsCard from './OtherProjectsCard'

function Projects() {
  return (
    <div id='projects' className='font'>
      <h1>Projects</h1>
        <SpotifyInsider />
        <QuickWork />
        <YogaBear />
      <h3>Other Projects</h3>
      <div className='other-projects' >
        <OtherProjectsCard 
          name='Arcade Hoops'
          description=' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie'
          githublink=''
          tech1='SQL'
          tech2='Java'
          tech3='Swift'
        />
        <OtherProjectsCard
          name='This Website'
          description='Personal website to show more about me'
          githublink='https://github.com/chrisbcooper/personalwebsite'
          tech1='Reactjs'
          tech2='JavaScript'
          tech3='HTML/CSS'
         />
      </div>
    </div>
  );
}

export default Projects;

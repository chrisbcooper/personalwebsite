import React from 'react';
import profilePic from '../../img/Me/profile-pic.jpeg';

function AboutMe() {


  //Lower the padding around so I can get more information in 


  return (
    <div className='about container-fluid font' id='aboutme'>
      <h1>About me</h1>
      <div className='grid'>
        <div>
          <span className='helper'></span>
          <img src={profilePic} alt=''  className='profile-pic' />
        </div>
        <p>
          I am currently a sophomore studying Computer Science at The
          University of Southern California. I am passionate about
          Software Engineering, but I am open to all kinds of paths.
          When I'm not coding I'm usually playing basketball, spending
          time outside, or just spending time with friends and family.
          I am currently looking for a Software Engineering Internship
          for Summer 2021.
          </p> 
      </div>
      <div className='inner-grid'>
          <div className='about-me-list'>C++</div>
          <div className='about-me-list'>Java</div>
          <div className='about-me-list'>Python</div>
          <div className='about-me-list'>Swift</div>
          <div className='about-me-list'>JavaScript</div>
          <div className='about-me-list'>HTML</div>
          <div className='about-me-list'>CSS</div>
          <div className='about-me-list'>Reactjs</div>
          <div className='about-me-list'>Nodejs</div>
      </div>
    </div>
  );
}

export default AboutMe;

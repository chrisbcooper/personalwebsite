import React from 'react';
import aboutMe from '../../img/Me/about-me.jpeg';

function AboutMe() {
  return (
    <div className='about container-fluid font' id='aboutme'>
      <h1>About me</h1>
      <div className='container padding-top'>
        <div className='row'>
          <div className='col col-lg-6 col-md-12 col-sm-12'>
            <p>
              I am currently a sophomore studying Computer Science at The
              University of Southern California. At school I am involved in the
              Data Science Club and I participate on the Club Basketball Team. I
              also participated in the Joint Educational Program (JEP) where USC
              students go and volunteer in the surrounding community. I am
              interested AI/Machine learning and Software Engineering. Here are
              some of the technologies that I am proficient in:
            </p>
            <div className='container'>
              <div className='row'>
                <div className='col about-me-list'>C++</div>
                <div className='col about-me-list'>Java</div>
                <div className='col about-me-list'>Python</div>
                <div className='col about-me-list'>Swift</div>
              </div>
              <div className='row'>
                <div className='col about-me-list'>JavaScript</div>
                <div className='col about-me-list'>HTML</div>
                <div className='col about-me-list'>CSS</div>
                <div className='col about-me-list'>Reactjs</div>
                <div className='col about-me-list'>Nodejs</div>
              </div>
            </div>
          </div>
          <div className='col col-lg-6 col-md-12 col-sm-12'>
            <span className='helper'></span>
            <img src={aboutMe} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

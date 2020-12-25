import React from 'react';
import Typist from 'react-typist';
import profilePic from '../../img/Me/profile-pic.jpeg';

function HomePage() {
  return (
    <div className='home container-fluid font' id='homepage'>
      <Typist
        className='name-intro'
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
      >
        Hi, my name is Christopher Cooper
      </Typist>
      <img className='profile-pic' src={profilePic} alt='profile-pic.jpeg' />
      <p className='home-p'>
        I am currently a Sophomore at USC studying Computer Science, and I have
        a strong passion for Software Engineering.
      </p>
    </div>
  );
}

export default HomePage;

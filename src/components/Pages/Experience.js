import React from 'react';
import InkedSportsLogo from '../../img/Experience/InkedSportsLogo.jpeg';

function Experience() {
  return (
    <div id='experience' className='container-fluid font experience'>
      <h1>Experience</h1>
      <div className='outer-experience' >
        <div className="inked-sports inner-experience">
            <img className='experience-logo' src={InkedSportsLogo} alt=""/>
            <div>
                <h3>Inked Sports</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

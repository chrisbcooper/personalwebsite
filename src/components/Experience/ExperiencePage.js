import React from 'react';

function ExperiencePage({logo, name, position, time, description}) {
  return (
      <div className='outer-experience' >
        <div className="inked-sports inner-experience">
            <img className='experience-logo' src={logo} alt=""/>
            <div>
                <h3 className='experience-name' >{name}</h3>
                <h4 className='experience-position'>{position}</h4>
                <h6 className="experience-time">{time}</h6>
                <p className="experience-description">{description}</p>
            </div>
        </div>
    </div>
  );
}

export default ExperiencePage;

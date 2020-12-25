import React from 'react';
import resume from '../../Documents/Resume.pdf';

function ContactMe() {
  return (
    <div id='contactme' className='contactme container-fluid font'>
      <h1>Contact Me</h1>
      <p>
        I'm always willing to meet new people, so please reach out to me if you
        can!
      </p>
      <h6>Emaill: coopercb@usc.edu</h6>
      <h6>Phone Number: (949) 838 - 6614</h6>
      <h6>
        <a
          href={resume}
          className='resume-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </h6>
      <a href='mailto:coopercb@usc.edu'>
        <button className='btn contact-btn'>Get in touch!</button>
      </a>
    </div>
  );
}

export default ContactMe;

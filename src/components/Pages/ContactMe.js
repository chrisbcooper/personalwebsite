import React from 'react';
import resume from '../../Documents/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  return (
    <div id='contactme' className='font'>
      <h1>Contact Me</h1>
      <p>
        I'm always willing to start new projects with people, so reach out to me if you want to build something together!
      </p>
      <p>Emaill: coopercb@usc.edu</p>
      <p>Phone Number: (949) 838 - 6614</p>
      <p>
        <a
          href={resume}
          className='resume-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </p>
      <div className="link-div">
      <a href='mailto:coopercb@usc.edu' className='contact-btn'>
        Get in touch!
      </a>
      </div>

      <footer className='footer center'>
      <span className='helper'></span>
      <a
        href='https://www.facebook.com/profile.php?id=100010222663731&ref=bookmarks'
        className='a-icon'
      >
        <FontAwesomeIcon icon={faFacebookF} size='2x' />
      </a>
      <a className='a-icon' href='https://www.instagram.com/chriscooper13/'>
        <FontAwesomeIcon icon={faInstagram} size='2x'  />
      </a>
      <a className='a-icon' href='https://github.com/chrisbcooper'>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a
        className='a-icon'
        href='https://www.linkedin.com/in/christopher-cooper-256969195/'
      >
        <FontAwesomeIcon icon={faLinkedin}size='2x'  />
      </a>
    </footer>
    </div>
  );
}

export default ContactMe;

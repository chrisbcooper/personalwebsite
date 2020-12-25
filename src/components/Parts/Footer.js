import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer center'>
      <span className='helper'></span>
      <a
        href='https://www.facebook.com/profile.php?id=100010222663731&ref=bookmarks'
        className='a-icon'
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className='a-icon' href='https://www.instagram.com/chriscooper13/'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a className='a-icon' href='https://twitter.com/chriscoooper'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className='a-icon' href='https://github.com/chrisbcooper'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className='a-icon'
        href='https://www.linkedin.com/in/christopher-cooper-256969195/'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
}

export default Footer;

import React from 'react';
import chatPhoto from '../../img/QuickWork/chatPhoto.png';
import detailsPhoto from '../../img/QuickWork/detailsPhoto.png';
import feedPhoto from '../../img/QuickWork/feedPhoto.png';
import profilePhoto from '../../img/QuickWork/profilePhoto.png';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function QuickWork() {
  return (
    <div className='row align-items-center'>
      <div className='col col-lg-6 col-md-12 col-sm-12'>
        <h2 className='project-title'>QuickWork</h2>

        <p>
          I created this iOS application with two friends while taking a course
          through CodePath at UCI. With so many people being out of work because
          of COVID-19, many people are trying to find any kind of work.
          QuickWork allows those in a community to contact and communicate with
          those around them to find jobs that anyone can do. The data was hosted
          on Heroku, and this allowed there to be a global feed of all of the
          tasks that you can do for your community.
        </p>
        <div className='container skills-table'>
          <div className='row'>
            <div className='col'>Swift</div>
            <div className='col'>Adobe XD</div>
            <div className='col'>Parse</div>
            <div className='col'>Heroku</div>
          </div>
        </div>
        <a
          className='project-icon'
          href='https://github.com/joshualchan/QuickWork'
        >
          <FontAwesomeIcon size='2x' icon={faGithub} />
        </a>
      </div>
      <div className='col col-lg-6 col-md-12 col-sm-12 mx-auto'>
        <Carousel>
          <Carousel.Item>
            <img
              src={feedPhoto}
              alt='feedPhoto.png'
              className='carousel-pic-iphone'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={detailsPhoto}
              alt='detailsPhoto.png'
              className='carousel-pic-iphone'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={profilePhoto}
              alt='profilePhoto.png'
              className='carousel-pic-iphone'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={chatPhoto}
              alt='chatPhoto.png'
              className='carousel-pic-iphone'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default QuickWork;

import React from 'react';
import yogaBear from '../../img/YogaBear/yoga-bear.png';
import yogaComputerPic from '../../img/YogaBear/yoga-computer-pic.jpg';
import bears from '../../img/YogaBear/bears.png';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function YogaBear() {
  return (
    <div className='row align-items-center projects-row'>
      <div className='col col-lg-6 col-md-12 col-sm-12 mx-auto'>
        <Carousel>
          <Carousel.Item>
            <img src={yogaBear} alt='yoga-bear.png' className='carousel-pic' />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={yogaComputerPic}
              alt='yoga-bear.png'
              className='carousel-pic'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bears} alt='yoga-bear.png' className='carousel-pic' />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='col col-lg-6 col-md-12 col-sm-12'>
        <h2 className='project-title'>Yoga Bear</h2>

        <p>
          YogaBear was an application that my friends and I created at HackSC.
          This app allows users to attempt yoga poses and compares their forms
          with those of professionals. It then tracks their progression to help
          them improve. We built it using the Always AI pose estimation API to
          compare a live video to a person in a picture. We were able to get a
          live connection between the Rasberry Pi and the Python server so that
          the algorithm could be executed for the user in real time. This
          project was created so that users could improve their form and mental
          health over time.
        </p>
        <div className='container skills-table'>
          <div className='row'>
            <div className='col'>Java</div>
            <div className='col'>Python</div>
            <div className='col'>Always AI</div>
          </div>
        </div>
        <a
          className='project-icon'
          href='https://github.com/chrisbcooper/YogaBear'
        >
          <FontAwesomeIcon size='2x' icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default YogaBear;

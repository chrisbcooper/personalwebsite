import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

function EducationPage() {
	return (
		<div className='experience-container'>
			<div className='experience-item'>
				<div className='experience-icon-outer'>
					<FontAwesomeIcon
						icon={faUniversity}
						className='experience-icon'
					/>
				</div>
				<div className='experience-name'>
					<h1>University of Southern California</h1>
					<p>August 2019 - May 2023</p>
				</div>
				<div className='experience-description'>
					<h3>B.S. Computer Science</h3>
					<p> I am currently a senior studying Computer Science at the University of Southern California.
					</p>
				</div>
			</div>
			<div className='experience-item'>
			<div className='experience-name'>
					<h3>Relevant Coursework</h3>
				</div>
				<div className='experience-description'>
					<ul>
						<li style={{ marginBottom: '20px' }}>
							CSCI 104: Data Structures and Object Oriented Design 
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 170: Discrete Methods in Computer Science 
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 201: Principles of Software Development
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 270: Introduction to Algorithms and Theory of Computing
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 356: Introduction to Computer Systems
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 310: Software Engineering
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 350: Introduction to Operating Systems
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 353: Introduction to Internetworking
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 360: Introduction to Artificial Intelligence
						</li>
						<li style={{ marginBottom: '20px' }}>
							ITP 325: Ethical Hacking
						</li>
						<li style={{ marginBottom: '20px' }}>
							ITP 435: Professional C++
						</li>
						<li style={{ marginBottom: '20px' }}>
							MATH 407: Probability Theory
						</li>
					</ul>
				</div>
			</div>
			<div className='experience-item'>
				<div className='experience-icon-outer'>
					<FontAwesomeIcon
						icon={faUniversity}
						className='experience-icon'
					/>
				</div>
				<div className='experience-name'>
					<h1>University of Southern California</h1>
					<p>August 2022 - May 2023</p>
				</div>
				<div className='experience-description'>
					<h3>M.S. Computer Science</h3>
					<p> I am currently completing my masters degree at the University of Southern California.
					</p>
				</div>
			</div>
			<div className='experience-item'>
			<div className='experience-name'>
					<h3>Relevant Coursework</h3>
				</div>
				<div className='experience-description'>
					<ul>
						<li style={{ marginBottom: '20px' }}>
							CSCI 570: Analysis of Algorithms
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 571: Web Technologies
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default EducationPage;

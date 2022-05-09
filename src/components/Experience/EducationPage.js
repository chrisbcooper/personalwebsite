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
					<p>August 2019 - Present</p>
				</div>
				<div className='experience-description'>
					<h3>B.S. Computer Science</h3>
					<p>
						I am currently a junior at USC studying Computer
						Science. At school I am involved in two clubs, CAIS++
						and Scope. CAIS++ is a group of students that focus on
						Artificial Intelligence and how it can be used for
						social good. Scope is a club where a group of students
						gather to learn different frameworks, and create
						projects based on the frameworks that they learned. I am
						also a member of the USC club basketball team, and the
						Phi Delta Theta fraternity.
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
							CSCI 360: Introduction to Artificial Intelligence
						</li>
						<li style={{ marginBottom: '20px' }}>
							CSCI 353: Introduction to Internetworking
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
		</div>
	);
}

export default EducationPage;

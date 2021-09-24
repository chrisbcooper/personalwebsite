import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function OddProject({
	name,
	githubLink,
	projectPic,
	description,
	link,
	tech1,
	tech2,
	tech3,
	tech4,
}) {
	const [width, setWidth] = useState(window.innerWidth);

	const changeWidth = () => {
		setWidth(window.innerWidth);
	};

	window.addEventListener('resize', changeWidth);

	return (
		<div className='project-item'>
			<div className='project-container'>
				<div>
					{width <= 768 && (
						<h3 style={{ textAlign: 'left' }}>{name}</h3>
					)}
					<div className='project-pic-container'>
						<a
							href={link}
							className='project-link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<span className='helper'></span>
							<img
								src={projectPic}
								alt=''
								className='project-pic'
							/>
						</a>
					</div>
				</div>
				<div className='project-description'>
					{width > 768 && (
						<a
							href={link}
							style={{ color: 'white', textDecoration: 'none' }}
						>
							<h3>{name}</h3>
						</a>
					)}
					<p>{description}</p>
					<div className='project-technologies'>
						<p>{tech1}</p>
						<p>{tech2}</p>
						<p>{tech3}</p>
						{tech4 && <p>{tech4}</p>}
					</div>
					<div className='project-icons'>
						<a
							href={githubLink}
							className='github-link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<FontAwesomeIcon icon={faGithub} size='2x' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OddProject;

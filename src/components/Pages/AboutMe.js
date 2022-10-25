import React from 'react';
import profilePic from '../../img/Me/profile-pic.jpeg';

function AboutMe() {
	const Text = () => (
		<div className='aboutme-words'>
			<div className='aboutme-description'>
				<p>
					Hi! I'm Christopher, and I'm currently a senior studying
					Computer Science at The University of Southern California
				</p>
				<p></p>
				<p>
					{' '}
					I am passionate about Software Engineering, and I am
					constantly trying to learn more and grow. When I'm not
					coding I'm usually playing basketball or just spending time
					with friends and family.
				</p>
				<p></p>
				<p>Here are some technologies that I enjoy using:</p>
				<div className='inner-grid'>
					<div className='aboutme-list'>C++</div>
					<div className='aboutme-list'>Java</div>
					<div className='aboutme-list'>Python</div>
					<div className='aboutme-list'>Node</div>
					<div className='aboutme-list'>Nodejs</div>
					<div className='aboutme-list'>MongoDB</div>
					<div className='aboutme-list'>SQL</div>
					<div className='aboutme-list'>Reactjs</div>
					<div className='aboutme-list'>Git</div>
				</div>
			</div>
		</div>
	);

	const Im = () => (
		<div>
			<span className='helper'></span>
			<img src={profilePic} alt='' className='profile-pic' />
		</div>
	);

	return (
		<div className='font' id='aboutme'>
			<h1>About me</h1>
			<div className='aboutme-grid'>
				<Im />
				<Text />
			</div>
		</div>
	);
}

export default AboutMe;

import React from 'react';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';

function Experience() {
	return (
		<div id='experience' className='font'>
			<h1>Experience</h1>
			<div className='experience-container'>
				<ExperiencePage
					position='Software Engineering Intern'
					time='May 2022 - August 2022'
					name='Google'
				/>
				<div style={{ height: 40 }} />
				<ExperiencePage
					position='Software Engineering Intern'
					time='June 2021 - August 2021'
					name='PIMCO'
				/>
				<div style={{ height: 40 }} />
				<ExperiencePage
					position='Software Engineering Intern'
					time='December 2020 - August 2021'
					name='Inked Sports'
				/>
			</div>
			<h1>Education</h1>
			<div className='experience-container'>
				<EducationPage />
			</div>
		</div>
	);
}

export default Experience;

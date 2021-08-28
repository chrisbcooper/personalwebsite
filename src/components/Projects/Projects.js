import React from 'react';
import EvenProject from './EvenProject';
import OddProject from './OddProject';
import OtherProjectsCard from './OtherProjectsCard';
import spotifyInsiderProfileNarrow from '../../img/Projects/SpotifyInsider.png';
import arcadeHoops from '../../img/Projects/ArcadeHoops.png';
import foodConnect from '../../img/Projects/FoodConnect.jpeg';

function Projects() {
	return (
		<div id='projects' className='font'>
			<h1>Projects</h1>
			<OddProject
				name='Food Connect'
				githubLink='https://github.com/chrisbcooper/FoodConnect'
				link='https://food-connect.co'
				tech1='Reactjs'
				tech2='Node.js'
				tech3='MongoDB'
				tech4='JWT'
				projectPic={foodConnect}
				description='This is a personal project that allows the user to explore local restaurants, review these restaurants,
				and see with their friends posts as well. They can create and comment on posts, create a wishlists of restaurants they want to go to,
				and join groups who have similar taste. The idea is so that if someone is stuck with no idea of where to eat, they can go to Food Connect
				to find the answer. The front-end of the project was made with React with a Node.js backend.
				The backend uses MongoDB to store all of the data, AWS to store all of the media, and JWT for authentication.'
			/>
			<EvenProject
				name='Arcade Hoops'
				githubLink='https://github.com/chrisbcooper/Arcade-Hoops'
				link='https://docs.google.com/presentation/d/11uaS2u9FDBkiYkzb8BwoXg1DsfJdz1zKMhEgdZG42xM/edit?usp=sharing'
				tech1='Swift'
				tech2='Java'
				tech3='SQL'
				projectPic={arcadeHoops}
				description="This was a group project completed in a class at USC. The front end 
          was created with Swift, and the back end was a Java HTTP Servlet. I helped work on the
          back end of the project where we communicate with MySQL to store the user's data. I helped create
          the Servlet and helped facilitate the connection between the frontend and the backend."
			/>
			<OddProject
				name='Spotify Insider'
				githubLink='https://github.com/chrisbcooper/Spotify-Insider'
				link='https://spotify-insider.com'
				tech1='Reactjs'
				tech2='Node.js'
				tech3='Spotify Web API'
				projectPic={spotifyInsiderProfileNarrow}
				description='This is a personal project that allows the user to view more information 
          about their Spotify account. The user can look at personalized data based on the 
          songs, artists, and genres that they listen to. They can also create 
          recommended playlists based on what they listen to. The app was created with a Reactjs 
          frontend and a Node.js backend, which communicates with the Spotify Web API.'
			/>

			<h3>Other Projects</h3>
			<div className='other-projects'>
				<OtherProjectsCard
					name='QuickWork'
					githublink='https://github.com/joshualchan/QuickWork'
					link='https://docs.google.com/presentation/d/1zp3fNso_jEsT2tvyq15--9_hW8GmKbTj_cH_Jw0Xatw/edit?usp=sharing'
					tech1='Swift'
					tech2='Parse'
					tech3='Heroku'
					description='This was a group project created in a course that I took outside the USC curriculum. This group
          project was created to help those during the pandemic to find jobs around the neighborhood. The frontend was
          created in Swift, and the back end was hosted on Heroku. I helped work on the functionality of the app, and how
          the data was sent to the Heroku server.'
				/>
				<OtherProjectsCard
					name='Yoga Bear'
					description='Application that allows the user to perform a certain yoga pose and compare them to professional poses.
           Front end was in Java and back end was in Python. I worked on the Python algorithm that compared the poses and created 
           an overall percentage of how accurate their pose was.'
					githublink='https://github.com/chrisbcooper/YogaBear'
					tech1='Java'
					tech2='Python'
					tech3='Always AI'
				/>
				<OtherProjectsCard
					name='This Website'
					description='This website was created with the Reactjs technology.
           I used HTML/CSS for the styling and Javascript to make the website responsive. 
           The website is hosted on Github pages, and it displays more about me.'
					githublink='https://github.com/chrisbcooper/personalwebsite'
					tech1='Reactjs'
					tech2='JavaScript'
					tech3='HTML/CSS'
				/>
			</div>
		</div>
	);
}

export default Projects;

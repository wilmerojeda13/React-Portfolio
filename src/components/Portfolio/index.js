import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
            name: 'Budget Tracker',
			description: 'Project based on creating an app that allows user to track their expensive budggets by adding expenses and deposits and it offers offline features where most application dont',
			image: 'budget-tracker.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexDB, & Serviece Workers',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/Budget-Tracker-Challenge',
			deployed: '',
		},
		{
			name: 'Whine Dine',
			description: 'Whine? Dine. is an application designed to help “undecidable millennials” come to a conclusion on what’s for dinner.The app uses API’s to randomly generate dinner combos',
			image: 'Whine-Dine.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexDB, & Serviece Workers',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/whine-dine',
			deployed: '',
		},
		{
			name: 'Password Generator',
			description: 'This is an application thats allows user to generate randomly password from 8 to 128 characters based on what you decide',
			image: 'password-generator-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexDB, & Serviece Workers',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/Password-generator',
			deployed: '',
			
		},
		{
			name: 'Social Network-API',
			description: 'Project based on creating the back end project for an social media back end-API and how you be able to modified by adding routes and deleting also they can create thoughts and react to friends',
			image: 'social-network-api.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexDB, & Serviece Workers',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/Social-Network-API',
			deployed: '',
			
		},
		{
			name: 'Travelers WishList',
			description: 'Travelers Wish List" is an app for people who need structure in their lives and want to plan out their next vacation!',
			image: 'travelers-Wishlist.png',
			technologies: [
				'JavaScript',
				'Sequileze',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/Travelers-Wish-List',
			deployed: '',
			
		},
		{
			name: 'Note Taker',
			description: 'This application allows the user to enter write notes and save notes, also you could delete note by clicking the corresponding note on the trash icon on the side of the left',
			image: 'note-taker-app.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexDB, & Serviece Workers',
				'Express.JS'
			],
			github:'https://github.com/wilmerojeda13/NOTE-TAKER-APP',
			deployed: '',
			
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
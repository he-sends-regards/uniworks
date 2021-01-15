import React from 'react';
import { Carousel } from 'react-bootstrap';

import './home.css';

const carouselItems = [
	{
		src: 'https://image.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg',
		alt: 'First slide',
		title: 'First slide label',
		text: 'Nulla vitae elit libero, a pharetra augue mollis interdum'
	},
	{
		src: 'https://image.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg',
		alt: 'Second slide',
		title: 'Second slide label',
		text: 'Nulla vitae elit libero, a pharetra augue mollis interdum'
	},
	{
		src: 'https://image.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg',
		alt: 'Third slide',
		title: 'Third slide label',
		text: 'Nulla vitae elit libero, a pharetra augue mollis interdum'
	}
];

const Home: React.FC = () => {
	return (
		<Carousel>
			{carouselItems.map(item => (
				<Carousel.Item>
					<div className="bg-cover" style={{}}></div>
					<img
						className="d-inline-block w-100"
						height="500px"
						src="https://image.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg"
						alt={item.alt}
					/>
					<Carousel.Caption>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Home;

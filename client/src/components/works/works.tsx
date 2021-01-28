import React from 'react';
import Filter from '../filter/filter';
import WorksPreview from '../works-preview/works-preview';

import './works.css';

const Works = () => {
	return (
		<div className="works-container">
			<Filter />

			<WorksPreview />
		</div>
	);
};

export default Works;

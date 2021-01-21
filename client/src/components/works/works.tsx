import React from 'react';
import Filter from '../filter/filter';

import './works.css';

const Works = () => {
	return (
		<div className="wrapper">
			<div>
				<Filter />
			</div>
			{/* <div className="works-container">
				<Filter />

				<div className="works_instance">
					<div className="works_preview">preview</div>
					<div className="works_download-btn">
						<button className="btn waves-effect waves-light col s12" type="submit" name="action">
							Download
							<i className="material-icons right">
								{
									// if payed
									true ? `file_download` : `cancel`
								}
							</i>
						</button>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Works;

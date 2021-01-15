import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './filter.css';

const Filter: React.FC = () => {
	return (
		<div className="filter_wrapper">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Курс
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">1 курс</Dropdown.Item>
					<Dropdown.Item href="#/action-2">2 курс</Dropdown.Item>
					<Dropdown.Item href="#/action-3">3 курс</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Filter;

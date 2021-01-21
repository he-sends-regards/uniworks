import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

import { subjects } from '../../const';

import './subject-win.css';

export const SubjectWin: React.FC = () => {
	const [isPayed, setIsPayed] = useState(false);

	return (
		<div className="subject-win__container">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Вариант
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<div className="subject-win__preview">preview</div>
			<Button
				variant={`${isPayed ? `success` : `secondary`}`}
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				<span style={{ marginRight: '10px' }}>Download</span>
				<i className="material-icons">{isPayed ? `file_download` : `cancel`}</i>
			</Button>{' '}
		</div>
	);
};

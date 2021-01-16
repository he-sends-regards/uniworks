import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import { subjects } from '../../const';

import './subject-win.css';

export const SubjectWin: React.FC = () => {
	return (
		<Col sm={10} className="subject-win-container">
			<Tab.Content>
				{subjects.thirdCourse.map(subject => (
					<Tab.Pane key={`${subject.name}-subject-win`} eventKey={subject.eventkey}>
						<h1>{subject.data}</h1>
					</Tab.Pane>
				))}
			</Tab.Content>
		</Col>
	);
};

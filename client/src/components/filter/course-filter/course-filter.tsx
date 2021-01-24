import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import SubjectFilter from '../subject-filter/subject-filter';
import { data } from '../../../const';
import './course-filter.css';

const CourseFilter: React.FC = ({}) => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row style={{ width: '100%', alignItems: 'center' }}>
				<Col sm={1} style={{ float: 'none', margin: '0 auto' }}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						{data.map(course => (
							<Nav.Item key={`${course.name}-tab-name`}>
								<Nav.Link eventKey={course.eventKey} disabled={course.disabled}>
									{course.name}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Col>
				<Col sm={11}>
					<Tab.Content>
						{data.map(course => (
							<Tab.Pane eventKey={course.eventKey} key={`${course.name}-tab-data`}>
								<SubjectFilter subjects={course.subjects} />
							</Tab.Pane>
						))}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default CourseFilter;

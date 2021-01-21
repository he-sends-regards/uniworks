import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { ISubject } from '../../../const';
import { SubjectWin } from '../../subject-win/subject-win';
import WorkFilter from '../work-filter/work-filter';

type CourseType = {
	subjects: ISubject[];
};

const SubjectFilter: React.FC<CourseType> = ({ subjects }) => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row style={{ alignItems: 'center' }}>
				<Col sm={1}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						{subjects.map(subject => (
							<Nav.Item key={`${subject.name}-tab-name`}>
								<Nav.Link eventKey={subject.eventkey}>{subject.name}</Nav.Link>
							</Nav.Item>
							// <WorkFilter subjectData={subject.data} subjectId={subject.id} />
						))}
					</Nav>
				</Col>
				<Col sm={11}>
					<Tab.Content>
						{subjects.map(subject => (
							<Tab.Pane eventKey={subject.eventkey} key={`${subject.name}-tab-data`}>
								{/* <SubjectFilter subjects={course.subjects} /> */}
								<WorkFilter works={subject.data} />
							</Tab.Pane>
						))}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default SubjectFilter;

import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { SubjectWin } from '../../subject-win/subject-win';
import { ISubject } from '../../../const';

// interface WorkFilterSubjectProps {
// 	subjectData: string[];
// 	subjectId: string;
// }

type WorkType = {
	works: string[];
};

const WorkFilter: React.FC<WorkType> = ({ works }) => {
	// const subjectData = subjects.thirdCourse.filter(subject => subject.id === 'mmds').data;

	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row style={{ alignItems: 'center' }}>
				<Col sm={2}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						{works.map(work => (
							<Nav.Item key={`${work}-work`}>
								<Nav.Link eventKey={`${work}-work`}>{work}</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Col>
				<Col sm={10}>
					<Tab.Content>
						{works.map(work => (
							<Tab.Pane eventKey={`${work}-work`} key={`${work}-work`}>
								<SubjectWin />
							</Tab.Pane>
						))}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default WorkFilter;

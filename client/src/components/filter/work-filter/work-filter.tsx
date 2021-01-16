import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { SubjectWin } from '../../subject-win/subject-win';

// interface WorkFilterSubjectProps {
// 	subjectData: string[];
// 	subjectId: string;
// }

const WorkFilter: React.FC = () => {
	// const subjectData = subjects.thirdCourse.filter(subject => subject.id === 'mmds').data;

	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={1}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						{/* {subject.data.map((work: string) => (
							<Nav.Item key={`${subject.name}-works-item`}>
								<Nav.Link eventKey={subject.eventkey}>{work}</Nav.Link>
							</Nav.Item>
						))} */}
					</Nav>
				</Col>
				<SubjectWin />
			</Row>
		</Tab.Container>
	);
};

export default WorkFilter;

import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { subjects } from '../../../const';
import { SubjectWin } from '../../subject-win/subject-win';
import WorkFilter from '../work-filter/work-filter';

export interface StandardComponentProps {
	subjectId: string;
	children: React.ReactNode;
}

const SubjectFilter: React.FC = ({ subjectId }: StandardComponentProps) => {
	const subjectByCourse = subjects[subjectId];

	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={2}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						{subjects.thirdCourse.map(subject => (
							<WorkFilter subjectData={subject.data} subjectId={subject.id} />
						))}
					</Nav>
				</Col>
				<SubjectWin />
			</Row>
		</Tab.Container>
	);
};

export default SubjectFilter;

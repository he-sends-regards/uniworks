import React from 'react';
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';

import './course-filter.css';

const SubjectFilter: React.FC = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={1}>
					<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
						<Nav.Item>
							<Nav.Link eventKey="first">ММДС</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">СА</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">ОТИС</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={11}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<Tab.Container id="left-tabs-example" defaultActiveKey="first"></Tab.Container>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<h1>hello</h1>
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<h1>hello</h1>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default SubjectFilter;

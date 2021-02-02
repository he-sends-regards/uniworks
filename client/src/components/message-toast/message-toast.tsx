import React, { useEffect, useState } from 'react';
import { Row, Col, Toast, Button } from 'react-bootstrap';

interface IMessageToastProps {
	message: string;
}

export const MessageToast: React.FC<IMessageToastProps> = ({ message }) => {
	const [show, setShow] = useState(false);
	useEffect(() => setShow(true), []);

	return (
		<Row style={{ zIndex: 100 }}>
			<Col xs={12}>
				<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
					<Toast.Header>
						<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
						<strong className="mr-auto">UNIWORKS</strong>
					</Toast.Header>
					<Toast.Body>{message}</Toast.Body>
				</Toast>
			</Col>
		</Row>
	);
};

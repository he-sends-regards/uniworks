// @ts-nocheck
import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

import './filter.css';

import { faculties, courses, subjects, works } from '../../const';

const Filter = () => {
	const [filterData, setFilterData] = useState({
		faculty: {
			id: '',
			name: ''
		},
		course: {
			id: '',
			name: ''
		},
		subject: {
			id: '',
			name: ''
		},
		work: {
			id: '',
			name: ''
		}
	});

	return (
		<div className="filter-container">
			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="faculty-filter-dropdown">
					{filterData.faculty.name.length === 0 ? 'Факультет' : filterData.faculty.name}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{faculties.map(faculty => (
						<Dropdown.Item
							onSelect={() =>
								setFilterData({
									...filterData,
									faculty: {
										id: faculty.id,
										name: faculty.name
									}
								})
							}
							key={faculty.id}
						>
							{faculty.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="course-filter-dropdown">
					{filterData.course.name.length === 0 ? 'Курс' : filterData.course.name}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{courses.map(course => (
						<Dropdown.Item
							onSelect={() =>
								setFilterData({
									...filterData,
									course: {
										id: course.id,
										name: course.name
									}
								})
							}
							key={course.id}
						>
							{course.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="subject-filter-dropdown">
					{filterData.subject.name.length === 0 ? 'Предмет' : filterData.subject.name}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{filterData.course.id.length !== 0 && filterData.faculty.id.length !== 0 ? (
						subjects[filterData.faculty.id][filterData.course.id].map(subject => (
							<Dropdown.Item
								onSelect={() =>
									setFilterData({
										...filterData,
										subject: {
											id: subject.id,
											name: subject.name
										}
									})
								}
								key={subject.id}
							>
								{subject.name}
							</Dropdown.Item>
						))
					) : (
						<Dropdown.Item>Вы не выбрали предыдущие фильтры</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="work-filter-dropdown">
					{filterData.work.name.length === 0 ? 'Работа' : filterData.work.name}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{filterData.course.id.length !== 0 &&
					filterData.faculty.id.length !== 0 &&
					filterData.subject.id.length !== 0 ? (
						works[filterData.subject.id].map(work => (
							<Dropdown.Item
								onSelect={() =>
									setFilterData({
										...filterData,
										work: {
											id: work.id,
											name: work.name
										}
									})
								}
								key={work.id}
							>
								{work.name}
							</Dropdown.Item>
						))
					) : (
						<Dropdown.Item>Вы не выбрали предыдущие фильтры</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>

			<Button variant="info" onClick={() => console.log(filterData)}>
				Применить
			</Button>
		</div>
	);
};

export default Filter;

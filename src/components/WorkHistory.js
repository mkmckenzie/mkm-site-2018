import React from 'react';
import JobDescription from './JobDescription';
import PropTypes from 'prop-types';

function WorkHistory({ content, title }) {

	const getContent = () => {
		let i = 1;
		return content.map((job) => {
			i += 1;
			return (
				<JobDescription
					title={job.title}
					company={job.company}
					dates={job.dates}
					description={job.description}
					order={job.order}
					key={i}
				/>
			);
		});
	};

	const jobs = getContent();
	const classNameFromTitle = title.replace(/\s/, '-');
	return (
		<div className={classNameFromTitle}>
			<h2>{title}</h2>
			<div className="jobs" style={{display:'flex', flexWrap: 'wrap'}}>{jobs}</div>
		</div>
	);
}

WorkHistory.propTypes = {
	content: PropTypes.array,
	title: PropTypes.string, 
};

export default WorkHistory;
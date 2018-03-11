import React from 'react'
import JobDescription from './JobDescription'


class WorkHistory extends React.Component {

	_getContent() {
		const content = this.props.content
		return content.map((job) => {
			return (
				<JobDescription
					title={job.title}
					company={job.company}
					dates={job.dates}
					description={job.description}
					key={job.order}
				/>
				);
		});
	};

	render() {
		const jobs = this._getContent();
		const classNameFromTitle = this.props.title.replace(/\s/, '-')
		return (
			<div className={classNameFromTitle}>
				<h2>{this.props.title}</h2>
				<div className="jobs" style={{display:'flex', flexWrap: 'wrap'}}>{jobs}</div>
			</div>
		)
	}
}

export default WorkHistory
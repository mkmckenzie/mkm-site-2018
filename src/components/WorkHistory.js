import React from 'react'
import JobDescription from './JobDescription'


class WorkHistory extends React.Component {

	_getJobs() {
			const myJobs = [
			{
				title: 'Graphics & Web Coordinator',
				company: 'SWANA',
				dates: 'July 2013 - July 2016',
				description: 'Here is the whole job description',
				order: 2
			},
			{
				title: 'Software Engineer (Specialist)',
				company: 'WeddingWire',
				dates: 'July 2016 - Present',
				description: 'another description',
				order: 1
			}
		];

		return myJobs.map((job) => {
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
		const jobs = this._getJobs();
		return (
			<div className="workHistory">
				<h2>Work History</h2>
				<div className="jobs" style={{display:'flex', flexWrap: 'wrap'}}>{jobs}</div>
			</div>
		)
	}
}

export default WorkHistory
import React from 'react'
import JobDescription from './JobDescription'


class WorkHistory extends React.Component {

	_getJobs() {
			const myJobs = [
			{
				title: 'Graphics & Web Coordinator',
				company: 'SWANA',
				dates: 'July 2013 - July 2016',
				description: <ul><li>Designed branding & marketing graphics for two major annual conferences</li>
<li>Created and updated content for the association website</li>
<li>Launched, marketed, and managed the online community for 8,000 members</li></ul>,
				order: 2
			},
			{
				title: 'Software Engineer (Specialist)',
				company: 'WeddingWire',
				dates: 'July 2016 - Present',
				description: <ul><li>Stack: Rails, React, Redux, MySQL, Elasticsearch</li>
<li>Projects: Interactive Venue Pricing, WeddingWire Pay integration with the Stripe API, Responsive Storefront & Write A Review Redesign</li>
<li>Daily: Implement a team-designed Agile workflow to work with product managers, designers, developers and quality assurance to see a feature from inception to completion, and beyond.</li> 
<li>Honorable Mention: First entirely self-taught web developer hired at company</li></ul>,
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
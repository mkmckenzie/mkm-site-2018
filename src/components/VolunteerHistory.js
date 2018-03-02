import React from 'react'
import JobDescription from './JobDescription'


class VolunteerHistory extends React.Component {

	_getGroups() {
			const myGroups = [
			{
				title: 'DC Community Developer',
				company: 'CodeNewbie DC',
				dates: 'March 2016 - Present',
				description:
				<ul> 
					<li>Plan and schedule meet ups including a 5-month speaker series, monthly community coding sessions, and various social events for up to 50 attendees</li>
					<li>Hold monthly meetings with Saron Yitbarek, the founder of CodeNewbie</li>
					<li>Volunteered at <a href="http://codelandconf.com/">Codeland</a> 2017, the 2-day annual CodeNewbie conference, in NYC</li>
				</ul>
				,
				order: 2
			},
			{
				title: 'Rails Community Lead',
				company: 'Women Who Code DC',
				dates: 'December 2015 - Present',
				description: 
				<ul>
					<li>Create tutorials, give tech talks, and organize weekly meetups for attendees</li>
				</ul>,
				order: 1
			}
		];

		return myGroups.map((group) => {
			return (
				<JobDescription
					title={group.title}
					company={group.company}
					dates={group.dates}
					description={group.description}
					key={group.order}
					order={group.order}
				/>
				);
		});
	};

	render() {
		const groups = this._getGroups();
		return (
			<div className="volunteerHistory">
				<h2>Community Leadership</h2>
				<div className="groups" style={{display:'flex', flexWrap: 'wrap'}}>{groups}</div>
			</div>
		)
	}
}

export default VolunteerHistory
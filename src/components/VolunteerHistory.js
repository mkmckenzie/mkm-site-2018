import React from 'react'
import JobDescription from './JobDescription'


class VolunteerHistory extends React.Component {

	_getGroups() {
			const myGroups = [
			{
				title: 'DC Community Developer',
				company: 'CodeNewbie DC',
				dates: 'March 2016 - Present',
				description: <li>Create tutorials, give tech talks, and organize weekly meetups for attendees</li>,
				order: 2
			},
			{
				title: 'Rails Communtiy Lead',
				company: 'Women Who Code DC',
				dates: 'December 2015 - Present',
				description: <li>Organize monthly speaker-series or community coding events for 1,500 members</li>,
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
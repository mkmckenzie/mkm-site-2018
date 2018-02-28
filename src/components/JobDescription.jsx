import React from 'react';

class JobDescription extends React.Component {
	render() {
		const style = {
			order: this.props.order,
			display: 'block',
			width: '100%',
		}
		return(
			<div className="job" style={style}>
				<h4>{this.props.title}, {this.props.company}, {this.props.dates}</h4>
				<ul>{this.props.description}</ul>
			</div>
			)
	}
}

export default JobDescription
import React from 'react'

class Skill extends React.Component {
	render() {
		return(
			<div>
				<h4 style={{ textAlign: 'center', }}>{this.props.skillName}</h4>
				<p style={{ fontSize: '14px', }}>{this.props.skillDescription}</p>
			</div>
		)
	}
}

export default Skill
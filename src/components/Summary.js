import React from 'react'
import COLOR_ARRAY from '../utils/constants'
import resume from '../content/MaryKatherineMcKenzie-Resume2018-3.pdf'

const bodyStyle = {
	textAlign: 'center',
}

const Summary = () => (
	<div>
		<h2>Summary</h2>
		<div>
			<p style={bodyStyle}>
				I am a self-taught, community-focused, full-stack software engineer 
				who takes a people-driven approach to development. I am quick to learn,
				methodical, and a stickler for the house style guide.
			</p>
			<p style={{textAlign: 'center', fontSize: '48px'}}> 👩🏼‍💻 🛫 🗺 </p>
			<p style={bodyStyle}>Currently seeking job opportunities in <strong>San Francisco</strong> or remote.</p>
		</div>
		{ /* <div className='resume-button'><a href={resume}>Download My Resume</a></div> */}
	</div>
)


export default Summary
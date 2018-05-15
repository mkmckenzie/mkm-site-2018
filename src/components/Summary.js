import React from 'react'
import COLOR_ARRAY from '../utils/constants'
import resume from '../content/MaryKatherineMcKenzie-Resume2018-3.pdf'

const bodyStyle = {
	textAlign: 'center',
	paddingBottom: '10px',
}

const Summary = () => (
	<div>
		<h2>Summary</h2>
		<div style={bodyStyle}>
			<p>
				I am a self-taught, community-focused, full-stack software engineer 
				who takes a people-driven approach to development. I am quick to learn,
				methodical, and a stickler for the house style guide.
			</p>
			<p style={{ fontSize: '48px' }}> 👩🏼‍💻 🛫 🗺 </p>
			<p>Currently relocating to <strong>San Francisco</strong>!</p>
		</div>
		<div className='resume-button'><a href={resume}>Download My Resume</a></div>
	</div>
)

export default Summary
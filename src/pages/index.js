import React from 'react';
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import WorkHistory from '../components/WorkHistory';
import SocialLinks from '../components/SocialLinks';
import FloatingHexagon from '../components/FloatingHexagon';
import SkillContent from '../content/skills';
import MediaContent from '../content/media';
import WorkHistoryContent from '../content/workhistory';
import VolunteerHistoryContent from '../content/volunteerhistory';
import EducationContent from '../content/education';
import OtherProjectsContent from '../content/otherprojects';

const floatingThingsContainerStyle = { 
	height: '500px', 
	width: '100%', 
	display:'flex', 
	overflow: 'hidden', 
	position: 'absolute',
	zIndex: '-100',
	top: '0',
	left: '0',
	alignItems: 'flex-end',
};

function _renderFloatingThings(number) {
	let placeholder = [];
	for (let i = 0; i < number; i++) {
		placeholder.push(<FloatingHexagon key={i} uniqId={i}/>);
	}
	return placeholder;
}

const containerStyle = {
	paddingTop: '50px',
};


const IndexPage = () => (
	<div>
  	<div style={floatingThingsContainerStyle}>{_renderFloatingThings(1000)}</div>
		<div id="summary" style={containerStyle}><Summary  /></div>
		<div id="skills" style={containerStyle}><Skills content={SkillContent} title="Skills" /></div>
  	<div id="work-history" style={containerStyle}><WorkHistory content={WorkHistoryContent} title="Work History"/></div>
  	<div id="community-leadership" style={containerStyle}><WorkHistory content={VolunteerHistoryContent} title="Community Leadership" /></div>
		<div id="education" style={containerStyle}><WorkHistory content={EducationContent} title="Education" /></div>
		<div id="media-mentions" style={containerStyle}><Skills content={MediaContent} title="Media Mentions"/></div>
		<div id="projects-presentations" style={containerStyle}><Skills content={OtherProjectsContent} title="Projects & Presentations"/></div>
  	<div id="contact" style={containerStyle}><SocialLinks /></div>
	</div>
);

export default IndexPage;

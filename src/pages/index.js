import React from 'react'
import Link from 'gatsby-link'
import Summary from '../components/Summary'
import Skills from '../components/Skills'
import WorkHistory from '../components/WorkHistory'
import SocialLinks from '../components/SocialLinks'
import FloatingHexagon from '../components/FloatingHexagon'
import SkillContent from '../content/skills'
import MediaContent from '../content/media'
import WorkHistoryContent from '../content/workhistory'
import VolunteerHistoryContent from '../content/volunteerhistory'
import EducationContent from '../content/education'

const floatingThingsContainerStyle = { 
  height: '450px', 
  width: '100%', 
  display:'flex', 
  overflow: 'hidden', 
  position: 'absolute',
  zIndex: '-100',
  top: '0',
  left: '0',
};

function _renderFloatingThings(number) {
  let placeholder = [];
    for (let i = 0; i < number; i++) {
     placeholder.push(<FloatingHexagon key={i} uniqId={i}/>)
    };
  return placeholder;
};

const containerStyle = {
  marginTop: '80px',
}


const IndexPage = () => (
  <div>
  	<div style={floatingThingsContainerStyle}>{_renderFloatingThings(1000)}</div>
    <div style={containerStyle}><Summary  /></div>
    <div style={containerStyle}><Skills content={SkillContent} title="Skills" /></div>
  	<div style={containerStyle}><WorkHistory content={WorkHistoryContent} title="Work History"/></div>
  	<div style={containerStyle}><WorkHistory content={VolunteerHistoryContent} title="Volunteer History" /></div>
    <div style={containerStyle}><WorkHistory content={EducationContent} title="Education" /></div>
    <div style={containerStyle}><Skills content={MediaContent} title="Media Mentions"/></div>
  	<div style={containerStyle}><SocialLinks /></div>
  </div>
)

export default IndexPage

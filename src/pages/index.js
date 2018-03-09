import React from 'react'
import Link from 'gatsby-link'
import Summary from '../components/Summary'
import Skills from '../components/Skills'
import WorkHistory from '../components/WorkHistory'
import VolunteerHistory from '../components/VolunteerHistory'
import SocialLinks from '../components/SocialLinks'
import FloatingHexagon from '../components/FloatingHexagon'

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
    <div style={containerStyle}><Skills /></div>
  	<div style={containerStyle}><WorkHistory /></div>
  	<div style={containerStyle}><VolunteerHistory /></div>
  	<div style={containerStyle}><SocialLinks /></div>
  </div>
)

export default IndexPage

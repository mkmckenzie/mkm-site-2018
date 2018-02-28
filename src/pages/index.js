import React from 'react'
import Link from 'gatsby-link'
import Summary from '../components/Summary'
import Skill from '../components/Skill'
import WorkHistory from '../components/WorkHistory'
import VolunteerHistory from '../components/VolunteerHistory'

const IndexPage = () => (
  <div>
    <Summary />
    <Skill
    	skillName="Rails"
    	skillDescription="Since 2015" 
  	/>
  	<WorkHistory />
  	<VolunteerHistory />
  </div>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import { rhythm } from '../utils/typography'


class Header extends React.Component {

  render() {

    const outerContainerStyle = { 
      height: '500px',
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center',
    }

    // const 

    return (
      <div>
        <div style={outerContainerStyle}>
          <div>
              <Hexagon
              sizeMultiplier='1'
              backgroundColor='#6B322E'
             />
           </div>
           <div style={{
              background: '#6B322E',
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
              color: 'white',
              padding: rhythm(1),
              textTransform: 'uppercase',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <h1 style={{textAlign: 'center'}}>
              Mary-Katherine McKenzie
            </h1>
          </div>
        </div>
      </div>
      )
  }
  

};

export default Header

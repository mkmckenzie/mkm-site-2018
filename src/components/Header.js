import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import { rhythm } from '../utils/typography'
import COLOR_ARRAY from '../utils/constants'


class Header extends React.Component {

  render() {
    const MainDarkColor = COLOR_ARRAY.darkest;
    const outerContainerStyle = { 
      height: '500px',
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center',
    }

    const titleBackgroundStyle = {
      background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
      color: 'white',
      padding: rhythm(0.3),
      textTransform: 'uppercase',
      width: '85%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }

    return (
      <div>
        <div style={outerContainerStyle}>
          <div>
            <Hexagon
              sizeMultiplier='1'
              backgroundColor={MainDarkColor}
            />
          </div>
          <div style={titleBackgroundStyle}>
            <h1>Mary-Katherine McKenzie</h1>
          </div>
        </div>
      </div>
    )
  }
};

export default Header

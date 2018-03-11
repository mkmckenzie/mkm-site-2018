import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import { rhythm } from '../utils/typography'
import COLOR_ARRAY from '../utils/constants'


class Header extends React.Component {

  render() {
    const MainDarkColor = COLOR_ARRAY.darkest;
    const outerContainerStyle = { 
      padding: '50px',
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center',
    }

    const titleBackgroundStyle = {
      position: '-webkit-sticky',
      position: 'sticky',
      top: '10px',
      background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
      margin: '0',
      color: 'white',
      padding: '10px',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
     
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
        </div>
        <div style={titleBackgroundStyle}>
          <h1>Mary-Katherine McKenzie</h1>
        </div>
      </div>
    )
  }
};

export default Header

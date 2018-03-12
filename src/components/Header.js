import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import COLOR_ARRAY from '../utils/constants'
import mk from '../img/mkm-granada-2017.jpg'


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
      background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
      margin: '0',
      color: 'rgba(0,0,0,0)',
      padding: '10px',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      position: 'relative',
      bottom: '200px',
      WebkitTextStroke: '2px white',
      textStroke: '1px white',
    }

    return (
      <div style={{maxHeight: '500px'}}>
        <div style={outerContainerStyle}>
          <div>
            <Hexagon
              sizeMultiplier='1'
              backgroundColor={MainDarkColor}
              image={mk}
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

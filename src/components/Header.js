import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import { rhythm } from '../utils/typography'
import FloatingHexagon from './FloatingHexagon'

class Header extends React.Component {

  _renderFloatingThings(number) {
    let placeholder = [];
    for (let i = 0; i < number; i++) {
       placeholder.push(<FloatingHexagon key={i} uniqId={i}/>)
    };
    return placeholder;
  };

  render() {

    const outerContainerStyle = { height: '500px', }
    const floatingThingsContainerStyle = { 
      height: '100%', 
      width: '100%', 
      display:'flex', 
      alignItems: 'flex-end', 
      overflow: 'hidden', 
    }

    return (
      <div style={outerContainerStyle}>
        <div style={floatingThingsContainerStyle}>
          {this._renderFloatingThings(100)}
        </div>
        <div>
          <div>
              <Hexagon
              sizeMultiplier='.7'
              backgroundColor='cornflowerblue'
             />
           </div>
         </div>
         <div style={{
            background: 'black',
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
            color: 'white',
            padding: rhythm(1),
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          <h1
            style={{
              margin: 0,
            }}
          >
            Mary-Katherine McKenzie
          </h1>
        </div>
      </div>
      )
  }
  

};

export default Header

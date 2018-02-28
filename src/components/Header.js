import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import { rhythm } from '../utils/typography'

const Header = () => (
  <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: rhythm(2),
      }}>
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

export default Header

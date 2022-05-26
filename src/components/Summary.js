import React from 'react'
import sf from '../img/stitchfix-logo.png'

const bodyStyle = {
  textAlign: 'center',
  paddingBottom: '10px',
}

function Summary() {
  return (
    <div>
      <h2>Summary</h2>
      <div style={bodyStyle}>
        <p>
          I am a self-taught, community-focused, full-stack software engineer
          who takes a people-driven approach to development. I am quick to
          learn, methodical, and a stickler for the house style guide.
        </p>
        <p style={{ fontSize: '40px' }}>
          {' '}
          👩🏼‍💻 <img src={sf} /> 📦
        </p>
        <p>
          Now happily working for{' '}
          <a href="https://multithreaded.stitchfix.com/">Stitch Fix</a> in{' '}
          <strong>San Francisco</strong>.
        </p>
      </div>
    </div>
  )
}

export default Summary

import React from 'react'
import PropTypes from 'prop-types'

function Hexagon({ sizeMultiplier, backgroundColor, image }) {
  const hexStyle = {
    fill: backgroundColor,
    height: 300 * sizeMultiplier,
    transform: 'scale(' + sizeMultiplier + ')',
  }

  const svgStyle = {
    height: 300 * sizeMultiplier + 'px',
    width: 300 * sizeMultiplier + 'px',
  }

  const clipSvgStyle = {
    width: '0',
    height: '0',
  }

  const imgStyle = {
    maxWidth: 300 * sizeMultiplier,
    height: 'auto',
    WebkitClipPath:
      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    /* eslint-disable no-dupe-keys */
    WebkitClipPath: 'url("#polygon-clip-hexagon")',
    clipPath: 'url("#polygon-clip-hexagon")',
  }

  const renderHexWithImg = (
    <div className="wholeHexagon" aria-hidden='true'>
      <svg
        className="clip-svg"
        style={clipSvgStyle}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="polygon-clip-hexagon" clipPathUnits="objectBoundingBox">
            <polygon
              className="hexagon"
              style={hexStyle}
              points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25"
            ></polygon>
          </clipPath>
        </defs>
      </svg>
      <div className="polygon-each-img-wrap">
        <img
          src={image}
          alt="Mary Katherine in Granada with the sun setting in the background and a glass of rose on the table."
          className="polygon-clip-hexagon"
          style={imgStyle}
        />
      </div>
    </div>
  )

  const renderHexWithBackground = (
    <div className="wholeHexagon" aria-hidden='true'>
      <svg
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <polygon
          className="hexagon"
          style={hexStyle}
          points="300,150 225,280 75,280 0,150 75,20 225,20"
        ></polygon>
      </svg>
    </div>
  )

  if (image.length > 1) {
    return renderHexWithImg
  } else {
    return renderHexWithBackground
  }
}

Hexagon.propTypes = {
  sizeMultiplier: PropTypes.number,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
}

export default Hexagon

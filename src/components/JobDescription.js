import React from 'react'
import PropTypes from 'prop-types'

function JobDescription({ order, title, company, dates, description }) {
  const style = {
    order: order,
    display: 'block',
    width: '100%',
  }
  return (
    <div className="job" style={style}>
      <h4>
        <em>
          {title}, {company}, {dates}
        </em>
      </h4>
      <ul>{description}</ul>
    </div>
  )
}

JobDescription.propTypes = {
  order: PropTypes.number,
  title: PropTypes.string,
  company: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dates: PropTypes.string,
  description: PropTypes.object,
}

export default JobDescription

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Nav from '../components/nav'
import favicon from '../img/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MKM"
      meta={[
        { name: 'A portfolio and resume site for Rails developer Mary Katherine McKenzie', content: 'Resume' },
        { name: 'resume, web developer, web dev, rails dev, ruby dev, ruby, rails, dev for hire, software engineer', content: 'resume, portfolio' },
      ]}
      link={[
        { rel: 'icon', href:`${favicon}` }
        ]}
    />
    <Header />
    <Nav />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

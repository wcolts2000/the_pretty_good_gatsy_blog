import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComments,
  faDatabase,
  faEnvelope,
  faShareAlt,
  faThumbsUp,
  faThumbsDown,
  faTimes,
  faUsers,
  faPhone,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer/footer'
import Header from './Header/header'
import './layout.css'

import '../styles/index.scss'

library.add(
  fab,
  faComments,
  faDatabase,
  faEnvelope,
  faShareAlt,
  faThumbsUp,
  faThumbsDown,
  faTimes,
  faUsers,
  faPhone,
  faPenNib
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                "Sean Pheneger's Blog: Developer, Lambda School Student, Full Stack Web Development and Computer Science",
            },
            {
              name: 'keywords',
              content:
                'blog, development, full stack web, designer, front-end, back-end, databases, websites, freelancing',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

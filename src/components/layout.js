import React from 'react'
import PropTypes from 'prop-types'
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
  faBookReader,
  faTools,
  faAsterisk,
  faLaptopCode,
  faPortrait
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer/footer'
import Header from './Header/header'
import layoutStyles from './layout.module.scss'

import '../styles/index.scss'

library.add(
  fab,
  faPortrait,
  faAsterisk,
  faLaptopCode,
  faTools,
  faBookReader,
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
        <div className={layoutStyles.wrapper}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            {children}
          </div>

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

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <header className={headerStyles.header}>
        <h2 className={headerStyles.headerH2}>
          <Link to="/" className={headerStyles.headerLink}>
            {data.site.siteMetadata.title}
          </Link>
        </h2>
        <div className={headerStyles.navLinks}>
          <Link className={headerStyles.headerNav} to="/projects/">
            Projects
          </Link>
          <Link className={headerStyles.headerNav} to="/references/">
            Notes
          </Link>
          <Link className={headerStyles.headerNav} to="/technologies/">
            Tools
          </Link>
          <Link to="/blog/" className={headerStyles.headerNav}>
            Blog
          </Link>
          <Link
            to="/overview/"
            className={`${headerStyles.headerNav} ${headerStyles.top}`}
            style={{ paddingRight: '0' }}
          >
            About Me
          </Link>
        </div>
      </header>
      <div className={headerStyles.spacer}>&nbsp;</div>
    </div>
  )
}

export default Header

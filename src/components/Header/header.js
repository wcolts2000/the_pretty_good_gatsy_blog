import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#090909' }}>
    <header className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </h1>
      <div className="nav-links">
        <Link to="/overview/" className="header-nav top">
          About Me
        </Link>
        <Link to="/technologies/" className="header-nav">
          Technologies
        </Link>
        <Link className="header-nav" to="/projects/">
          Projects
        </Link>
        <Link className="header-nav" to="/blog/" style={{ paddingRight: '0' }}>
          Blog
        </Link>
      </div>
    </header>
    <div className="spacer">&nbsp;</div>
  </div>
)

export default Header

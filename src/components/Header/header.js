import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#090909' }}>
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </h1>
      <div className="nav-links">
        <Link to="/overview/" className="header-nav top">
          Overview
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
    </div>
  </div>
)

export default Header

import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#090909' }}>
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header-link">{siteTitle}</Link>
      </h1>
      <div style={{padding: ".75rem"}}>
        <Link to="/page-2/" className="header-nav top">Overview</Link>
        <Link to="/page-2/" className="header-nav">Technologies</Link>
        <Link className="header-nav" to="/page-2/">Projects</Link>
        <Link className="header-nav" to="/page-2/" style={{paddingRight: "0"}}>Blogs</Link>
      </div>
    </div>
  </div>
)

export default Header

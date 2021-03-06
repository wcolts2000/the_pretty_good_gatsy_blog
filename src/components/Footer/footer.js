import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

const FooterComponent = styled.footer``

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <FooterComponent className="footer-container">
      <div className="footer-right">
        <a
          href="https://github.com/wcolts2000?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="footer-icon" icon={['fab', 'github']} />
        </a>
        <a
          href="https://www.linkedin.com/in/sean-pheneger/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} />
        </a>
      </div>
      <h4>
        <a href="https://www.seanpheneger.dev">
          &copy; 2020 with &#9829; by {data.site.siteMetadata.author}
        </a>
      </h4>
    </FooterComponent>
  )
}

export default Footer

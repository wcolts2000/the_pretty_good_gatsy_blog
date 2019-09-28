import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

const FooterComponent = styled.footer``

const Footer = () => {
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
        <a href="mailto:wcolts2000@gmail.com">
          <FontAwesomeIcon className="footer-icon" icon="envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/sean-pheneger-5393a089/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} />
        </a>
      </div>
      <h4>&copy; 2018 with &#9829; by Sean Pheneger</h4>
    </FooterComponent>
  )
}

export default Footer

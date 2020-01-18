import React from 'react'
import projectsStyles from '../../pages/projects.module.scss'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function Project({ projectTitle, projectDescription, techUsed, code, live }) {
  return (
    <div className={projectsStyles.project}>
      <div className="left">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <h4>Tech Used</h4>
        <ul>
          {techUsed.length > 0 &&
            techUsed.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </div>
      <div className="right">
        {/* <Img fluid={data.hupimg.childImageSharp.fluid} /> */}
        {code && <a href={code}>Code</a>}
        <a href={live}>Live</a>
      </div>
    </div>
  )
}

export default Project

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hupimg: file(relativePath: { eq: "images/hurryupprint.jpg" }) {
      ...fluidImage
    }
  }
`

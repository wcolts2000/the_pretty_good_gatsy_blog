import React from 'react'
import projectsStyles from './projects.module.scss'
import Project from '../components/Projects/Project'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          hupimg: file(relativePath: { eq: "images/hurryupprint.jpg" }) {
            ...fluidImage
          }
          nnnsimg: file(relativePath: { eq: "images/nnns.jpg" }) {
            ...fluidImage
          }
          rsmgimg: file(relativePath: { eq: "images/rsmg.jpg" }) {
            ...fluidImage
          }
          mjjimg: file(relativePath: { eq: "images/mjj.jpg" }) {
            ...fluidImage
          }
        }
      `}
      render={data => (
        <Layout>
          <Head title="My Projects" />
          <div className={projectsStyles.container}>
            <h1>Some of my projects</h1>
            <section className={projectsStyles.projects}>
              <div className={projectsStyles.projectWrapper}>
                <Img
                  className={projectsStyles.screenshot}
                  fluid={data.hupimg.childImageSharp.fluid}
                  alt="hurry up print website"
                />
                <Project
                  projectTitle={'Hurry Up Print'}
                  projectDescription={'an E-commerce print shop'}
                  techUsed={[
                    'PHP',
                    'HTML5',
                    'CSS3',
                    'Materialize CSS',
                    'MySQL',
                    'JavaScript',
                  ]}
                  code={'https://www.github.com/wcolts2000/hup-client'}
                  live={'https://www.hurryupprint.com'}
                />
              </div>
              <div className={projectsStyles.projectWrapper}>
                <Img
                  className={projectsStyles.screenshotLeft}
                  fluid={data.nnnsimg.childImageSharp.fluid}
                  alt="Northern Nevada Network Service website"
                />
                <Project
                  projectTitle={'Northern Nevada Network Services'}
                  projectDescription={'A Wifi Network Providers website'}
                  techUsed={['React', 'NEXTJS', 'SCSS']}
                  code={'https://www.github.com/wcolts2000/nnns'}
                  live={'https://www.nnnsllc.com'}
                />
              </div>
              <div className={projectsStyles.projectWrapper}>
                <Img
                  className={projectsStyles.screenshot}
                  fluid={data.rsmgimg.childImageSharp.fluid}
                  alt="Reno Social Media website"
                />
                <Project
                  projectTitle={'Reno Social Media Group'}
                  projectDescription={
                    'Landing Page for Social Media Marketing Company'
                  }
                  techUsed={['HTML5', 'CSS3', 'Animate CSS', 'WoWJS', 'PHP']}
                  code={'https://www.github.com/wcolts2000/rsmg'}
                  live={'https://www.renosocialmediagroup.com'}
                />
              </div>
              <div className={projectsStyles.projectWrapper}>
                <Img
                  className={projectsStyles.screenshotLeft}
                  fluid={data.mjjimg.childImageSharp.fluid}
                  alt="Mike and Judy's Jewels website"
                />
                <Project
                  projectTitle={"Mike and Judy's Jewels"}
                  projectDescription={'E-commerce Jewelry store'}
                  techUsed={['PHP', 'OPENCART']}
                  live={'https://www.mikeandjudysjewels.com .com'}
                />
              </div>
            </section>
          </div>
        </Layout>
      )}
    />
  )
}

export default Projects

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

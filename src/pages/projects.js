import React from 'react'
import projectsStyles from './projects.module.scss'
import Project from '../components/Projects/Project'

import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => {
  return (
    <Layout>
      <Head title="My Projects" />
      <div className={projectsStyles.container}>
        <h1>Some of my projects</h1>
        <section className={projectsStyles.projects}>
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
            // imgSrc={'../images/hurryupprint.jpg'}
            code={'https://www.github.com/wcolts2000/hup-client'}
            live={'https://www.hurryupprint.com'}
          />
          <Project
            projectTitle={'Northern Nevada Network Services'}
            projectDescription={'A Wifi Network Providers website'}
            techUsed={['React', 'NEXTJS', 'SCSS']}
            // imgSrc={'../images/hurryupprint.jpg'}
            code={'https://www.github.com/wcolts2000/nnns'}
            live={'https://www.nnnsllc.com'}
          />
          <Project
            projectTitle={'Reno Social Media Group'}
            projectDescription={
              'Landing Page for Social Media Marketing Company'
            }
            techUsed={['HTML5', 'CSS3', 'Animate CSS', 'WoWJS', 'PHP']}
            // imgSrc={'../images/hurryupprint.jpg'}
            code={'https://www.github.com/wcolts2000/rsmg'}
            live={'https://www.renosocialmediagroup.com'}
          />
          <Project
            projectTitle={"Mike and Judy's Jewels"}
            projectDescription={'E-commerce Jewelry store'}
            techUsed={['PHP', 'OPENCART']}
            // imgSrc={'../images/hurryupprint.jpg'}
            live={'https://www.mikeandjudysjewels.com.com'}
          />
        </section>
      </div>
    </Layout>
  )
}

export default Projects

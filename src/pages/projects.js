import React from 'react'
import projectsStyles from './projects.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => (
  <Layout>
    <Head title="My Projects" />
    <section className={projectsStyles.container}>

      <h1>Some of the Projects I have Created</h1>
      <p>Personal and Group Projects</p>
    </section>
  </Layout>
)

export default Projects

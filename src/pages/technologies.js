import React from 'react'
import techStyles from './technologies.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const Technologies = () => (
  <Layout>
    <Head title="Technologies" />
    <section className={techStyles.container}>
      <h1>Various Tech Stacks and Library References and Notes</h1>
      <p>Here you will find information about various javascript and python libraries and fundamentals</p>
    </section>
  </Layout>
)

export default Technologies

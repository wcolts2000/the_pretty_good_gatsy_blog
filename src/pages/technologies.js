import React from 'react'
import techStyles from './technologies.module.scss'
import FlipPage from 'react-flip-page'

import Layout from '../components/layout'
import Head from '../components/head'

const Technologies = () => (
  <Layout>
    <Head title="Technologies" />
    <div className={techStyles.flip}>
      <FlipPage height="430" width="580" orientation="horizontal" pageBackground="#D9B89100">
        <section className={techStyles.container}>
          <h1>Various Tech Stacks and Library References and Notes</h1>
          <p>Here you will find information about various javascript and python libraries and fundamentals</p>
        </section>
        <section className={techStyles.container}>
          <h1>Various Tech Stacks and Library References and Notes</h1>
          <p>Here you will find information about various javascript and python libraries and fundamentals</p>
        </section>
      </FlipPage>
    </div>
  </Layout>
)

export default Technologies

import React from 'react'
import Layout from '../components/layout'
import TypeWriterDiv from '../components/TypeWriterDiv/TypeWriterDiv'
import './index.css'
import Card from '../components/Card/Card'

const IndexPage = () => (
  <Layout>
    <TypeWriterDiv
      strings={['Designer', 'Creator', 'Developer']}
      options={{ loop: true }}
    />
    <div className="card-holder">
      <h1>Cheat Sheets, Code Samples, Resources and More</h1>
      {/* <Card /> */}
      <Card
        name={['About Me']}
        link={['overview']}
        details={[
          'A little info about me and my journey of becoming a software developer',
        ]}
        cta={['A little about me, Lambda School, and this crazy journey']}
      />
      <Card
        name={['technologies']}
        details={["The different tech stacks I'm currently exploring"]}
        cta={[
          "Notes, Cheat Sheets, and Snippets in various libraries and frameworks I work with",
        ]}
      />
      <Card
        name={['projects']}
        details={['Explore Some of the Projects I am working on']}
        cta={[
          'This way for some of the projects I have created and some team projects I have been a part of',
        ]}
      />
      <Card
        name={['blog']}
        details={['Compilation of references and little snippets with tips and tricks I come across and discover']}
        cta={['Blogs about the different gems I come across and code snippets']}
        style={{ marginRight: '0' }}
      />
    </div>
  </Layout>
)

export default IndexPage

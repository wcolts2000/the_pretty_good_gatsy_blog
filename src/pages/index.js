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
      {/* <Card /> */}
      <Card
        name={['overview']}
        details={[
          'Go this way to get a little more info about me and my journey',
        ]}
        cta={['A little about me, Lambda School, and this crazy journey']}
      />
      <Card
        name={['technologies']}
        details={["The different technologies I'm currently exploring"]}
        cta={[
          "Just the beginning of the technologies I'll be learning and teaching myself",
        ]}
      />
      <Card
        name={['projects']}
        details={['Explore Some Lambda Projects and Personal Projects']}
        cta={[
          'This way for the portfolio, some are complete, most still need polishing',
        ]}
      />
      <Card
        name={['blogs']}
        details={['A look into the world of an online bootcamp student']}
        cta={['Blogs about the different sections of study and projects']}
        style={{ marginRight: '0' }}
      />
    </div>
  </Layout>
)

export default IndexPage

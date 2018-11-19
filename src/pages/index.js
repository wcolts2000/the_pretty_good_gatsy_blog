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
    <Card />
  </Layout>
)

export default IndexPage

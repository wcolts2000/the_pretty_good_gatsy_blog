import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import TypeWriterDiv from '../components/TypeWriterDiv'
import './index.css'
import '../components/header.css'

const IndexPage = () => (
  <Layout>
    <TypeWriterDiv
      strings={['Designer', 'Creator', 'Developer']}
      options={{ loop: true }}
    />
    <p>
      A personal blog following my journey through the curriculum of an online
      immersive full stack web development and computer science school.
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
    <Link to="/overview/" className="card-link">
      Check out the blogs here
    </Link>
  </Layout>
)

export default IndexPage

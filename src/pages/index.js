import React from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'
import TypeWriterDiv from '../components/TypeWriterDiv'

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
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link
      to="/page-2/"
      style={{
        textDecoration: 'none',
        color: 'dodgerblue',
        textTransform: 'uppercase',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontWeight: 'bold',
        transition: 'all .3s ease-in-out',
      }}
    >
      Check out the blogs here
    </Link>
  </Layout>
)

export default IndexPage

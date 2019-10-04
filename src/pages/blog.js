import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const Blogs = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <h1>Blogs and Code Snippets</h1>
      <p>A compilation of cool techniques and snippets I have found useful</p>
      <ol>
        {data.allMarkdownRemark.edges.map((post, i) => (
          <li key={i} ><h2>{post.node.frontmatter.title} </h2>
          <p> <date>{post.node.frontmatter.date}</date></p></li>
        ))} 
      </ol>
    </Layout> 
  )
}

export default Blogs

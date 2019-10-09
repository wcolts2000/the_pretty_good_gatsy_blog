import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

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
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Head title="Markdown Blog" />
      <section className={blogStyles.container}>
        <h1>Notes, Blogs, and Code Snippets</h1>
        <p>A compilation of cool techniques and snippets I have found useful</p>
        <ol>
          {data.allMarkdownRemark.edges.map((post, i) => (
            <Link key={i} to={`blog/${post.node.fields.slug}`}>
              <li>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </li>
            </Link>
          ))} 
        </ol>
      </section>
    </Layout> 
  )
}

export default Blogs

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const References = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Contentful CMS Blog" />
      <section className={blogStyles.container}>
        <h1>Blog Posts</h1>
        <p>A compilation of cool techniques and snippets I have found useful</p>
        <ol>
          {data.allContentfulBlogPost.edges.map((post, i) => (
            <Link key={i} to={`references/${post.node.slug}`}>
              <li>
                <h2>{post.node.title} </h2>
                <p>
                  {' '}
                  <date>{post.node.publishedDate}</date>
                </p>
              </li>
            </Link>
          ))}
        </ol>
      </section>
    </Layout>
  )
}

export default References

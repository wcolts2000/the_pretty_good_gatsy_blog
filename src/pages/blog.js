import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const Blog = () => {
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
        <p>
          This page pulls the data from Contentful CMS and generates the static
          pages from whatever I upload there. Very user friendly interface that
          a client can easily add content to their sites with out writing a
          single line of code.
        </p>
        <ol>
          {data.allContentfulBlogPost.edges.map((post, i) => (
            <Link key={i} to={`blog/${post.node.slug}`}>
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

export default Blog

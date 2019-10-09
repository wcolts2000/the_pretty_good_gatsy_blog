import React from 'react'
import Layout from './../components/layout';
import {graphql} from 'gatsby'
import Head from '../components/head';
import blogStyles from './blog-post.module.scss'


export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: {slug: { eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

function Blog(props) {
  console.log("PROPS: ", props)

  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <section className={blogStyles.container}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
      </section>
    </Layout>
  )
}

export default Blog

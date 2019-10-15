import React from 'react'
import Layout from './../components/layout';
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head';
import blogStyles from './blog-post.module.scss'


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          json
        }
      }
    }
`

function Blog(props) {
  console.log("PROPS: ", props)
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <section className={blogStyles.container}>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </section>
    </Layout>
  )
}

export default Blog

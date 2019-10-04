import React from 'react'
import Layout from './../components/layout';
import {grapgql, useStaticQuery} from 'gatsby'


function Blog() {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          html
          excerpt
          fields {
            slug
          }
          }
        }
      }
    }
  `)
  console.log("FFFFFFFFFFFF",data)
  return (
    <Layout>
      blog data here
    </Layout>
  )
}

export default Blog

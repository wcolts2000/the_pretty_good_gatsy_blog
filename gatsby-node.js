const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-post.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
  const cmsBlogTemplate = path.resolve('./src/templates/cms-blog-template.js')

  const cmsRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  cmsRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: cmsBlogTemplate,
      path: `references/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-flip-page/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
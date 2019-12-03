---
title: "Gatsby Site Setup and Notes on Plugins"
date: "2019-10-04"
---

# Gatsby js cheat sheet

### Compiled from Course: 
    Gatsbyjs: The Great Gatsby Bootcamp
    Date: Oct 3 2019
    Professor: Andrew Mead 
    YouTube Link: https://www.youtube.com/watch?v=8t0vNu2fCCM&feature=youtu.be


### Resources

1. [Gatsbyjs Docs](https://Gatsbyjs.org)
1. [Gatsbyjs Plugins](https://gatsbyjs.org/plugins/)
1. [Contentful CMS](https://contentful.com/sign-up/)


## Key Points

 **PASSING DATA:**
 
  Uses graphql in background to handle data and images
 **WHEN ADDING PLUGINS IN CONFIG FILE:**
 
  Restart server on gatsby-config.js updates to activate them 
 **MAKING PAGES:**
 
  Pages folder in src contains views that will be on site
 **PAGE URLS:**
 
  Name of page in pages folder will be the names of url links to the page 
 **ROUTING:**
 
  Linking between pages accomplished with  named Link import from gatsby and uses a 'to' prop and can also add an activeClassName to them to specify a class for when you are on the page of that link like shown here:

   ```<Link to="/" className=headerStyles.headerLink} activeClassName={`${headerStyles.active}`}>{data.site.siteMetadata.title</Link> ```
 **REUSABLE LAYOUT COMPONENTS:**
 
  Utilize a layout component to reuse common components like header and footer on all pages 
 **SASS:**
 
  Plug-in for SASS: gatsby-plugin-sass -> npm install --save node-sass gatsby-plugin-sass -> make a gatsby-config.js file in root folder -> add into the module.exports object the key of  plugins which will be an array containing plugins as either a string for no config or an object with resolve and options keys. This one just use a string 'gatsby-plugin-sass'
 **MODULAR SCSS STYLES:**
 
  To prevent global styles in a components specific style sheet, you can use css modules by remaining your files like shown here: header.scss -> header.module.scss... When you import them use syntax like shown here: import headerStyles from './header.module.scss' and add to the components className like shown here: className="headerStyles.link" where link is the class styles object from the headerStyles stylesheet 
 **SITE METADATA:**
 
  Adding site metadata to page with graphql: in gatsby-config.js add key siteMetadata with value of object containing key of title (can add others like author as well)
 **VIEWING AVAILABLE DATA:**
 
  To access graphql developer interface, visit localhost:8000/___grapgql (3 Underscores) -> click on Docs in upper right to get document explorer and click on query to expand and view all available data site has access to 
 **USING GRAPHQL METADATA:**
 
  To get site Metadata access graphql query -> site -> siteMetadata
 **ACCESSING DATA IN COMPONENTS:**
 
  You can import the data into components with 2 named imports like so (in this example, Link is being imported as well): import { Link, graphql, useStaticQuery } from 'gatsby' -> Inside the component you can query the data and access it as shown in this example:  


```const Header = () => { 
 const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header className={headerStyles.header}>
        <h2 className={headerStyles.headerH2}>
          <Link to="/" className={headerStyles.headerLink}>
            {data.site.siteMetadata.title}
          </Link>
<MORE STUFF HERE>
  )}
export default Header;
```


 **ADD GRAPHQL PLAYGROUND TO REPLACE GRAPHIQL UI:**
 
  create a .env.development file to root directory and add the following key=value pair: GATSBY_GRAPHQL_IDE=playground   ->  if local server is running, stop server and add cross-env package as follows: npm install cross-env -> modify develop script in package.json as follows: `"develop": "cross-env GATSBY_GRAPHQL_IDE=playground gatsby develop"`  -> use `npm run develop` now instead of gatsby develop to start your server

 **SOURCING DATA FROM FILESYSTEM (ADDING MARKDOWN):**
 
   add plugin gatsby-source-filesystem with the following: npm install  gatsby-source-filesystem   -> add as object to the plugins array in gatsby-config.js like follows: 


  ```{
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      }
  ```

  -> in graphql you now have access to file and allFile queries. example query grabbing a few properties from the files in the sourced directory like the following: 


```
  query {
         allFile {
             edges {
                 node {
                     name
                     extension
                     dir
                 }
             }
         }
     }
```


-> add plugin gatsby-transformer-remark to be able to parse markdown files like follows: 
`npm install gatsby-transformer-remark `
-> add string 'gatsby-transformer-remark' to plugins array inside gatsby-config.js
-> restart development server -> inside graphql query there should now be access to markdownRemark and allMarkdownRemark for retrieving your markdown posts like the following query:  

```
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
                         }
                  }
        }
} 
```

-> you can now import useStaticQuery and graphql from gatsby to access in components (see accessing data in posts above)


 **DYNAMIC PAGE GENERATION - GENERATING SLUGS:**
 
   create a gatsby-node.js file -> import path from node and create a module export function like follows grabbing the files path and stripping it down to just the filename as the slug like follows: 


```
const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
} 
```


-> this slug is now accessible in graphql queries like follows: 


```
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
```


-> note that the slug is now present in the fields from node -> in src directory add a templates directory and create a blog.js template file containing the template structure for your blogs -> add a createPages export to the gatsby-node.js file like follows:


```
  module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-post.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
```

in blog page, add the slug to the graphql query and add a Link around the list item with a 'to' prop dynamically pointing to the slug page like follows: 


```
<Link key={i} to={`blog/${post.node.fields.slug}`}>
      <li>
           <h2>{post.node.frontmatter.title} </h2>
            <p> <date>{post.node.frontmatter.date}</date></p>
     </li>
</Link>
```

to grab the data for a particular slug, use markdownRemark query and graphql query variables in the query object as follows: 


```
query (
     $slug: String!
     ) {
         markdownRemark (
             fields:{
                 slug: {
                     eq: $slug
                 }
             }
         ) {
         frontmatter {
             title
         }
     }
}
```

instead of the useStaticQuery, define a query to be able to grab the individual data in the blog template file as follows:


```
import React from 'react';
import Layout from './../components/layout';
import {graphql} from 'gatsby';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: {slug: { eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

function Blog(props) {
  return (    
     <Layout>
           <h1>{props.data.markdownRemark.frontmatter.title}</h1>
           <p>{props.data.markdownRemark.frontmatter.date}</p>
           <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
    </Layout>

  )
}

export default Blog
```

 **ADDING IMAGES INTO GRAPHQL TO UTILIZE GATSBY-SHARP FOR DYNAMIC OPTIMIZED IMAGES:**
    make sure you have the plugins `gatsby-image` `gatsby-transformer-sharp` and `gatsby-plugin-sharp` and in the gatsby-config.js add the following to the plugins array:

    ```
    ['gatsby-plugin-sharp',
    'gatsby-transformer-sharp']
    ```
    make sure that you are sourcing the path to your images folder with an object in the plugins array of config-js as follows:

    ```
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
    ```
    you can access the images in a graphql query similar to the following:

    ```
    {
      allFile(filter: {relativeDirectory: {eq: "images"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1600) {
                srcSet
              }
            }
          }
        }
      }
    }
    ```
 in the component you want to grab from sharp add the following import: 
 ```
 import {StaticQuery, graphql} from 'gatsby';
 import Img from 'gatsby-image';
 ```
 and add it to the jsx as the wrapper component with query and render props as follows:
 ```
  <StaticQuery query={} render={} />
 ```
 putting inside the render prop the jsx you want rendered in that component and you will add the query similar to the following into the query prop:
 ```
  {
    bg: file(relativePath: {eq: "images/bg.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
    }
  }
```
inside the jsx in the render prop add your image tag from gatsby-image as follows:
```
<Img alt="reno arch" fluid={data.bg.childImageSharp.fluid} />
```


 **ADDING IMAGES TO MD POSTS:**
 
   add gatsby-plugin-sharp , gatsby-remark-images, and gatsby-remark-relative-images  like follows:   `npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images`  -> add string "gatsby-plugin-sharp" to gatsby-config.js plugins array and modify "gatsby-transformer-remark" to be an object as follows:  


```
'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
```


-> restart server


 **SETTING UP A CMS TO HANDLE ADDING PAGES WITH CONTENTFUL CMS:**
 
   
Set up acct at [Contentful CMS Sign Up](https://contentful.com/sign-up/) if you don't have an acct yet 
-> in contentfuls user dashboard, open the menu and select `+ Create space` , name it, and create an empty space
-> in dashboard the content model tab will allow for specifying the schemas for the data and the
 content tab is where the creation of the data is done...create a new content model clicking the
  `add content type` button, name it add an api identifier and description (optional) and click
  create
-> on right column click add field and define the fields you want from the data (be sure to add a
 text field titled Slug so the data entry person can name the slug) and for html fields add a 
 Rich Text field and after all fields wanted are added click save
-> switch to content tab and click add post to enter the first post from contentful
-> after filling in post data click on publish
-> add gatsby-source-contentful plugin as follows: `npm install gatsby-source-contentful`
-> add options object to `gatsby-config.js` plugins array as follows: 


```
{
      resolve: 'gatsby-source-contentful',      
      options: {
         spaceId: process.env.CONTENTFUL_SPACE_ID,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }

    },
```
be sure to add these 2 keys to your environment variables as follows:

`CONTENTFUL_SPACE_ID=<Your spaceId key here>`

`CONTENTFUL_ACCESS_TOKEN=<Your access token here>`

-> add dotenv package as follows: npm install dotenv  -> add env config in the top of the gatsby-config.js file as follows: 
```
let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
   path: `.env.${activeEnv}`,
})
```
-> start server and should now have access to contentful data via graphql queries as in the following example:
```
query {
  allContentfulBlogPost (
     sort: {
        fields:publishedDate,
        order:DESC
      }
  ) {
  edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY") 
      }
    }
  }
}
```
NOTE IF ERROR IS THROWN (Unknown type "ContentfulFixed". Did you mean "ContentfulBlogPost"....) THIS CAN BE RESOLVED BY ADDING AN IMAGE AS A PLACEHOLDER IN THE CONTENTFUL DASHBOARDS MEDIA TAB AS PER [This](https://github.com/gatsbyjs/gatsby/issues/16455)  -> add new createPages setup to gatsby-node.js file like following example:
```
const cmsBlogTemplate = path.resolve('./src/templates/cms-blog-template.js')
  const cmsRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  cmsRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: cmsBlogTemplate,
      path: `cms-blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
```
-> stop the server and add the following pages to the project: npm i @contentful/rich-text-react-renderer -> to access data in template createuse decumentToReactComponents to parse the RichTextContent and images like in the example that follows:
```
import React from 'react'
import Layout from './../components/layout';
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          json
        }
      }
    }
function Blog(props) {
  console.log("PROPS: ", props)
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      }
    }
  }
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}
export default Blog
```
 **CUSTOM 404 PAGE:**
 
   create a 404.js file in pages -> add any custom content, styles and links back to pages that exist

 **THIRD PARTY PACKAGE REQUIRES WINDOW OBJECT THROWING ERROR:**
    
    Inside the gatsby-node.js file add the following config replacing `/bad-package/` with the package name requiring the window object:

    ```
    exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-package/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
    ```
 
 **DYNAMICALLY ADD HEAD DATA VIA REACT HELMET:**
 
   stop server and add gatsby-plugin-react-helmet and react-helmet as follows: npm install gatsby-plugin-react-helmet react-helmet -> add plugin to gatsby-config.js plugins array as a string: 'gatsby-plugin-react-helmet'  -> create a head.js file and add the info you want to dynamically insert to each page as seen in the following example:
```
import React from 'react'
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Head({title}) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
  )
}

export default Head
```
-> then add custom head component into each page with the dynamic props you want for that page as seen in the index page example component as follows: `<Head title="Home"/>`'


 **DEPLOYMENT TIPS ON NETLIFY:**
 
   After adding a new post or modifying one in contentful, go to netlify and trigger a new deploy with the clear cache and redeploy option, if new changes are made to source code and pushed to branch being tracked by netlify, a new deploy should automatically trigger
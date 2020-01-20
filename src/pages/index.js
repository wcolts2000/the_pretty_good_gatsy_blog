import React from 'react'
import Layout from '../components/layout'
import TypeWriterDiv from '../components/TypeWriterDiv/TypeWriterDiv'
import indexStyles from './index.module.scss'
import Head from '../components/head'
import FlatCard from './../components/Card/FlatCard'

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <TypeWriterDiv
      strings={['Designer', 'Creator', 'Developer']}
      options={{ loop: true }}
    />
    <section className={indexStyles.hyperlinkContainer}>
      <h1 className={indexStyles.indexHeader}>
        Projects, Notes, Resources, Blog, About Me
      </h1>
      <div className={indexStyles.linksCardsContainer}>
        <FlatCard
          title="Projects"
          color="yellow"
          body="A look at my personal and team projects"
          icon="laptop-code"
          linkTo="projects"
        />
        <FlatCard
          title="Notes"
          color="red"
          body="notes from classes and personal study"
          icon="asterisk"
          linkTo="notes"
        />
        <FlatCard
          title="Resources"
          color="orange"
          body="resources, tools, and cheat sheets"
          icon="tools"
          linkTo="resources"
        />
        <FlatCard
          title="Blog"
          body="blogs and snippets"
          icon="book-reader"
          color="lightgreen"
          linkTo="blog"
        />
        <FlatCard
          title="About Me"
          color="rebeccapurple"
          body="A little insight into my journey as a developer"
          icon="portrait"
          linkTo="about"
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage

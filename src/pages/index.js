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
        Notes, Projects, Tools, References, About Me
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
          linkTo="references"
        />
        <FlatCard
          title="Tools"
          color="orange"
          body="my dev tools and cheat sheets"
          icon="tools"
          linkTo="technologies"
        />
        <FlatCard
          title="Blog"
          body="notes from my research, tutorials, and classes"
          icon="book-reader"
          color="lightgreen"
          linkTo="blog"
        />
        <FlatCard
          title="About Me"
          color="rebeccapurple"
          body="A little insite into my journal as a developer"
          icon="portrait"
          linkTo="overview"
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage

import React from 'react'
import Layout from '../components/layout'
import TypeWriterDiv from '../components/TypeWriterDiv/TypeWriterDiv'
import indexStyles from './index.module.scss'
// import Card from '../components/Card/Card'
import Head from '../components/head'
import FlatCard from './../components/Card/FlatCard';


const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <TypeWriterDiv
      strings={['Designer', 'Creator', 'Developer']}
      options={{ loop: true }}
    />
    <section className={indexStyles.hyperlinkContainer}>
    <h1 className={indexStyles.indexHeader}>Notes, Projects, Tools, References, About Me</h1>
    {/* <div className={indexStyles.cardHolder}>
      <Card
        name={['About Me']}
        link={['/overview']}
        details={[
          'A little info about me and my journey of becoming a software developer',
        ]}
        cta={['A little about me, Lambda School, and this crazy journey']}
      />
      <Card
        name={['/technologies']}
        details={["The different tech stacks I'm currently exploring"]}
        cta={[
          "Notes, Cheat Sheets, and Snippets in various libraries and frameworks I work with",
        ]}
      />
      <Card
        name={['/projects']}
        details={['Explore Some of the Projects I am working on']}
        cta={[
          'This way for some of the projects I have created and some team projects I have been a part of',
        ]}
      />
      <Card
        name={['/blog']}
        details={['Compilation of references and little snippets with tips and tricks I come across and discover']}
        cta={['Blogs about the different gems I come across and code snippets']}
        style={{ marginRight: '0' }}
      />
    </div> */}
      <div className={indexStyles.linksCardsContainer}>
        <FlatCard title="Notes" body='notes from my research, tutorials, and classes' icon='book-reader' color="yellow"/>
        <FlatCard title="Projects" color="red" body='A look at my personal and team projects' icon='laptop-code'/>
        <FlatCard title="Tools" color="orange" body='my dev tools and cheat sheets' icon='tools'/>
        <FlatCard title="References" color="lightgreen" body='links to the most useful references I have found' icon='asterisk'/>
        <FlatCard title="About Me" color="rebeccapurple" body='A little insite into my journal as a developer' icon='portrait'/>

      </div>
    </section>
  </Layout>
)

export default IndexPage

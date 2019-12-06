import React, { Component } from 'react'
import techStyles from './technologies.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

import FlipPage from 'react-flip-page'

class Technologies extends Component {
state = {
 jsx: ""
}
  componentDidMount() {
    // required to add library after component has mounted as this library needs access to window object and in server side render build will fail
    this.setState({jsx: <FlipPage height="700" width="1000" orientation="horizontal" pageBackground="#D9B89100">
    <section className={techStyles.container}>
      <h1>Various Tech Stacks and Library References and Notes</h1>
      <p>Here you will find information about various javascript and python libraries and fundamentals</p>
    </section>
    <section className={techStyles.container}>
      <h1>Various Tech Stacks and Library References and Notes</h1>
      <p>Here you will find information about various javascript and python libraries and fundamentals</p>
    </section>
  </FlipPage>})
  }
  
  makeComponent = jsx => {
    return jsx
  }

  render() {
    return (
      <Layout>
        <Head title="Technologies" />
        <div className={techStyles.flip}>
          {this.makeComponent(this.state.jsx)
          }
        </div>
      </Layout>
    )
  }
}

export default Technologies

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import techStyles from './technologies.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import ResourceCard from './../components/Technologies/ResourceCard'

const Technologies = () => {
  return (
    <Layout>
      <Head title="Technologies" />
      <section className={techStyles.container}>
        <h1>Useful Resources and Links</h1>
        <p>
          Here you will find information about various programming libraries and
          fundamentals, links to useful tools and their docs, some of my
          favorite resources and more.
        </p>
        <div className={techStyles.resourceHeader}>
          <FontAwesomeIcon
            className={techStyles.ytIcon}
            icon={['fab', 'youtube']}
          />
          <h2>Some Awesome Content Creators and Playlists</h2>
        </div>
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PLM_i0obccy3sZGzZdpEtxPcR1iPIV0taQ"
          topics={['JS', 'Algorithms', 'Frameworks', 'Fundamentals']}
          channelLink="https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw/featured"
          channelName="Coding Garden With CJ"
          summary="CJ is a Senior Engineer that has a growing community of developers
          learning and growing. His channel has numerous playlists that range from
          algorithm practice to beginner full stack application building. This
          channel is a wealth of knowledge and is definitely worth a like and
          subscribe!"
        />
      </section>
    </Layout>
  )
}

export default Technologies

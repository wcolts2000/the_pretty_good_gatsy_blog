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
          topics={[
            'JS',
            'Algorithms',
            'Frameworks',
            'Fundamentals',
            'Web Development',
          ]}
          channelLink="https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw/featured"
          channelName="Coding Garden With CJ"
          summary="CJ is a Senior Engineer that has a growing community of developers
          learning and growing. His channel has numerous playlists that range from
          algorithm practice to beginner full stack application building. This
          channel is a wealth of knowledge and is definitely worth a like and
          subscribe!"
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8"
          topics={[
            'Languages',
            'Crash Courses',
            'Frameworks',
            'Fundamentals',
            'Web development',
          ]}
          channelLink="https://www.youtube.com/user/TechGuyWeb/featured"
          channelName="Traversy Media"
          summary="Brad Traversy has one of the most informative coding channels for beginner to intermediate developers
          I have come across. He covers nearly everything you could think about with regards to being a web developer, from 
          fundamentals to frameworks to mental health as a programmer. If you have not subscribed and liked his channel and 
          videos, don't do another thing before going over and giving his content a look. I also have numerous Udemy courses
          from him as I love his teaching style and the projects he builds out are fun and have good UIs as well."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PL4-IK0AVhVjMI45H5E9oE47wj-7AZLNnK"
          topics={[
            'HTML5',
            'CSS3',
            'Pre-processors',
            'Fundamentals',
            'Web development',
          ]}
          channelLink="https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw"
          channelName="Kevin Powell"
          summary="Kevin Powell's channel is an amazing wealth of knowledge regarding styling and front-end design. He
          covers the basics as well as doing deep dives into some really cool tricks and tips. Anyone looking to step up their
          front-end game will love the content on his channel. There isn't a person I don't refer to his channel when they ask
          where to find resources for CSS and front-end."
        />
      </section>
    </Layout>
  )
}

export default Technologies

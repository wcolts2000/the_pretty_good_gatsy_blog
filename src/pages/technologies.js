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
          favorite resources and more. While there are a lot listed here, there
          are a ton more I watch on a regular basis so to see the entire
          subscription list of what I keep an eye on,{' '}
          <a href="https://www.youtube.com/channel/UCCg7LOsRTzeoc9CUDDu0e9w/channels?view_as=subscriber">
            Check Here
          </a>
          . It is mostly programming related but there are a few musicians,
          graphic design content and a few gaming channels on there as well.
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
          summary="CJ is a Senior Engineer that has built a community of developers focused on
          learning and growing. His channel has numerous playlists that range from
          algorithm practice and big O to beginner full stack application building. This
          channel is a wealth of knowledge and is definitely worth a watch, like and
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
          summary="Brad Traversy has one of the most informative coding channels for beginner
          to intermediate developers I have come across. He covers nearly everything you could
          think about with regards to being a web developer, from fundamentals to frameworks
          to mental health as a programmer. If you have not subscribed and liked his channel and 
          videos, don't do another thing before going over and giving his content a a watch, like
          and subscribe. I also have numerous Udemy courses from him as I love his teaching style
          and the projects he builds out are fun look great."
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
          summary="Kevin Powell's channel is an amazing wealth of knowledge regarding styling
          and front-end design and development. He covers the basics as well as doing deep
          dives into some really cool tricks and tips. Anyone looking to step up their
          front-end game will love the content on his channel. There isn't a person I don't
          refer to his channel when they ask where to find resources for CSS and front-end so
          give this one a watch, like and subscribe."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PL0eyrZgxdwhwBToawjm9faF1ixePexft-"
          topics={['Fundamentals', 'C#', 'JS', 'PHP', 'Development']}
          channelLink="https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw"
          channelName="MULTIMEDIA TUTORIALS"
          summary="On mmtuts, you will find a vast amount of videos centered around beginners in PHP, JavaScript,
          C#, and some design game creation content as well. While the majority is tutorials, there are also vlogs,
          live streams, reviews, and recently he has started spotlighting Indie Game Developers as well on the
          channel. Give this one a a watch, like and subscribe as there is great content with clear and simple
          explanations on why things are being done the way they are to really get an
          understanding of the fundamentals and reasons behind the things he is doing in the video."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PLDyQo7g0_nsUjf046cCHKJ16U1SoXrElZ"
          topics={['HTML5', 'CSS3', 'JS', 'Tools', 'Development']}
          channelLink="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q"
          channelName="Dev Ed"
          summary="On Dev Ed, you can find a variety of videos from creating video games in Unity to writing node.js
          applications. He has a lot of great content on styling and front-end related things in addition to tutorials
          on tools like figma. If you enjoy a fun personality and teaching style, give this channel a peak. He is
          humorous and knowledgeable and has great presentation."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PL7pEw9n3GkoV32XrIcbXCk9JscSfyEobX"
          topics={['JS', 'React', 'Node', 'Interview Prep', 'Angular']}
          channelLink="https://www.youtube.com/channel/UCbGZKLIHpox2l0whz6_RYyg"
          channelName="Techsith Tutorials"
          summary="On Techsith Tutorials, you will find a great collection of content focused on understanding
          and reviewing your knowledge of JavaScript, Interview Prep and React mostly, with some videos on Node
          and Angular as well. He has a series where he has viewers do a mock interview with him going over
          questions one may receive in a real world interview and some nice explanations of array
          methods and data structures. If you are prepping for an interview or want to test your knowledge
          of JavaScript and React, give this channel a watch, like and subscribe."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PL0lNJEnwfVVM80SBgWyC_1DQqyBYfiXeF"
          topics={[
            'CSS',
            'UI / UX',
            'Crash Courses',
            'Web Development',
            'Live Streams',
          ]}
          channelLink="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow"
          channelName="DesignCourse"
          summary="On DesignCourse, Gary Simon covers a variety of development and design topics, frameworks
          and tools. He does a biweekly design review live stream critiquing designs viewers submit and
          giving some advice on how to improve on the design. With numerous tutorials on various libraries
          and frameworks, you can lose yourself in his content easily for hours on end.
          If you want to up your development and design game, give his channel a watch, like and subscribe."
        />
        <ResourceCard
          vidUrl="https://www.youtube.com/embed/videoseries?list=PLV5CVI1eNcJgJCEkMlsqXea6OIF_uV_ub"
          topics={['React', 'Testing', 'JS', 'Web Development', 'Live Streams']}
          channelLink="https://www.youtube.com/channel/UCz-BYvuntVRt_VpfR6FKXJw"
          channelName="Kent C. Dodds"
          summary="On Kent Dodds Channel, you will find videos on JavaScript related topics and testing. He also
          does fairly regular live streams and workshops. He is the writer and maintainer of numerous npm modules.
          If you have any questions or curiosity about testing, definitely give this channel a watch, like and subscribe."
        />
      </section>
    </Layout>
  )
}

export default Technologies

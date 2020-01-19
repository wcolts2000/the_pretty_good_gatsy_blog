import React from 'react'
import techStyles from '../../pages/technologies.module.scss'

function ResourceCard({ vidUrl, topics, channelLink, channelName, summary }) {
  return (
    <>
      <div className={techStyles.frameWrapper}>
        <h3>
          <a href={channelLink}>{channelName}</a>
        </h3>
        <iframe
          width="420"
          height="236"
          src={vidUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className={techStyles.tags}>
          <h3>Content Focus</h3>
          {topics.map((topic, i) => (
            <p key={i}>{topic}</p>
          ))}
        </div>
      </div>
      <p className={techStyles.summary}>{summary}</p>
    </>
  )
}

export default ResourceCard

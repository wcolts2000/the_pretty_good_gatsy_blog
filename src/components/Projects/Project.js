import React from 'react'
import projectsStyles from '../../pages/projects.module.scss'

function Project({ projectTitle, projectDescription, techUsed, code, live }) {
  return (
    <div className={projectsStyles.project}>
      <div className={projectsStyles.left}>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
      </div>
      <div className={projectsStyles.right}>
        <h4>Tech Used</h4>
        <ul>
          {techUsed.length > 0 &&
            techUsed.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
        {code && <a href={code}>Code</a>}
        <a href={live}>Live</a>
      </div>
    </div>
  )
}

export default Project

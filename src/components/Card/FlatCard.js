import React from 'react'
import CardStyles from './FlatCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function FlatCard({title, body, icon, color}) {
  return (
    <div className={`${CardStyles.flatCard} ${CardStyles[color]}`}>
      <FontAwesomeIcon icon={icon} />
      <div className={CardStyles.bottomContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

FlatCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default FlatCard

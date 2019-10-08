import React from 'react'
import CardStyles from './FlatCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

function FlatCard({linkTo, title, body, icon, color}) {
  return (
    <Link to={linkTo} className={`${CardStyles.flatCard} ${CardStyles[color]}`}>
      <FontAwesomeIcon icon={icon} />
      <div className={CardStyles.bottomContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  )
}

FlatCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default FlatCard

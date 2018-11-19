import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InfoCard = styled.div``

function Card() {
  return (
    <InfoCard>
      <p>
        A personal blog following my journey through the curriculum of an online
        immersive full stack web development and computer science school.
      </p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
      <Link to="/overview/" className="card-link">
        Check out the blogs here
      </Link>
    </InfoCard>
  )
}

export default Card

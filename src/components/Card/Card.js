import React from 'react'
import { Link } from 'gatsby'
import './Card.css'

// const Card = () => (
//   <div className="card">
//     <div className="card-side front">
//       <div className="card-picture">&nbsp;</div>
//       <div className="card-heading">
//         <span className="card-heading-span">Overview</span>
//       </div>
//       <div className="card-details">
//         <p>Go this way to get a little more info about me and my journey</p>
//       </div>
//     </div>
//     <div className="card-side back">
//       <div className="card-cta">
//         <div className="card-cta-box">
//           <p>A little about me, Lambda School, and this crazy journey</p>
//           <Link
//             to="/overview/"
//             className="card-cta-btn"
//             onMouseEnter={e => (e.target.style = 'transform: translateY(-3px)')}
//             onMouseDown={e => (e.target.style = 'transform: translateY(-1px)')}
//             onMouseLeave={e => (e.target.style = 'transform: translateY(0)')}
//           >
//             Overview
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default Card
const Card = props => (
  <div className="card">
    <div className="card-side front">
      <div className="card-picture">&nbsp;</div>
      <div className="card-heading">
        <span className="card-heading-span">{props.name}</span>
      </div>
      <div className="card-details">
        <p>{props.details}</p>
      </div>
    </div>
    <div className="card-side back">
      <div className="card-cta">
        <div className="card-cta-box">
          <p>{props.cta}</p>
          <Link
            to={`\/${props.name}\/`}
            className="card-cta-btn"
            onMouseEnter={e => (e.target.style = 'transform: translateY(-3px)')}
            onMouseDown={e => (e.target.style = 'transform: translateY(-1px)')}
            onMouseLeave={e => (e.target.style = 'transform: translateY(0)')}
          >
            {props.name}
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Card

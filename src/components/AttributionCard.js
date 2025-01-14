import React from 'react'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

const linkTypeToImage = {
  'github': github,
  'linkedin': linkedin
}

const AttributionCard = ({ name, photoUrl, title, description, links }) => {
  const linkList = links.map(link => {
    return (
      <li key={link.href}>
        <a href={link.href}><img src={linkTypeToImage[link.type]} /></a>
      </li>
    )
  })
  return (
    <div className="contributor card">
      <div class="portrait card-img-top"></div>
      <div className="card-body">
        <div className="contributor-header">
          <h4 className="card-title">
            {name}
          </h4>
          <small className="text-muted">{title}</small>
        </div>
        <p className="card-text">
          {description}
        </p>
      </div>
        <div className="card-footer">
          <ul className="social-links">
            {linkList}
          </ul>
        </div>
    </div>
  )
}

export default AttributionCard
import React from 'react'
import '../styles/Team_style.scss';








const TeamMember = ({ portrait, role, fullName, position, socials }) => {
  const roleHandler = (role) => {
    let role_ = ''
    switch (role) {
      case 'coding':
        role_ = 'coding'
        break;
      case 'crypto':
        role_ = 'crypto'
        break
      case 'marketing':
        role_ = 'marketing'
        break
      default:
        role_ = '';
    }
    return role_
  }
  return (
    <>
      <div className='team-card slide-top'>
        <div className={`team-card__top ${roleHandler(role)}`}>

        </div>
        <div className="team-card__middle">
          <img src={portrait} alt="Portrait" />
          <h3>{fullName}</h3>
          <i>{position}</i>
        </div>
        <div className="team-card__bottom">
          <div className='socials team-card-bottom'>
            <a href={`https://twitter.com/${socials.twitter}`} target="_blank" rel="noreferrer">
              <i className='fab fa-twitter'></i>
            </a>
            <a href={`https://medium.com/${socials.medium}`} target="_blank" rel="noreferrer">
              <i className='fab fa-medium-m'></i>
            </a>
            <a href={`https://telegram.org/${socials.telegram}`} target="_blank" rel="noreferrer">
              <i className='fab fa-telegram-plane'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMember
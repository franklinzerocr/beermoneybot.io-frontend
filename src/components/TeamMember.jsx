import React from 'react'
import '../styles/Team_style.scss';








const TeamMember = ({ portrait, role, fullName, position, socials }) => {
  const roleHandler = (role) => {
    let role_ = ''
    switch (role) {
      case 'frontend':
        role_ = 'frontend'
        break;
      case 'crypto':
        role_ = 'crypto'
        break
      case 'marketing':
        role_ = 'marketing'
        break
      case 'administration':
        role_ = 'administration'
        break
      case 'ceo':
        role_ = 'ceo'
        break
      case 'backend':
        role_ = 'backend'
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
          <img src={portrait} alt="Portrait" loading='eager' />
          <br />
          <div>
            <h3>{fullName}</h3>
            <i>{position}</i>
          </div>
        </div>
        <div className="team-card__bottom">
          <div className='socials team-card-bottom'>
            <a href={`https://twitter.com/${socials.twitter}`} target="_blank" rel="noreferrer" className='link-bottom'>
              <i className='fab fa-twitter'></i>
              <small className='link-bottom-details'>
                {socials.twitter}
              </small>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMember
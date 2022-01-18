import React from 'react'
import '../styles/Team_style.scss';
import portrait from '../assets/team/portrait.png';






const SectionTeam = () => {
  return (
    <section className='team-container'>
      <div className='title-container title-left'>
        <h2 className='first-word'>Conoce</h2>
        <h2 className='second-word tabbed-left'>al Equipo</h2>
      </div>
      <div className='title-container team'>
        <div className='team-row'>
          <div className='team-card slide-top'>
            <div className="team-card__top coding">

            </div>
            <div className="team-card__middle">
              <img src={portrait} alt="Portrait" />
              <h3>Team Member Name</h3>
              <i>Developer</i>
            </div>
            <div className="team-card__bottom">
              <div className='socials team-card-bottom'>
                <a href="/" target="_blank">
                  <i className='fab fa-twitter'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-medium-m'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-telegram-plane'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='team-card slide-top'>
            <div className="team-card__top crypto">

            </div>
            <div className="team-card__middle">
              <img src={portrait} alt="Portrait" />
              <h3>Team Member Name</h3>
              <i>Crypto Analyst</i>
            </div>
            <div className="team-card__bottom">
              <div className='socials team-card-bottom'>
                <a href="/" target="_blank">
                  <i className='fab fa-twitter'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-medium-m'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-telegram-plane'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='team-card slide-top'>
            <div className="team-card__top marketing">

            </div>
            <div className="team-card__middle">
              <img src={portrait} alt="Portrait" />
              <h3>Team Member Name</h3>
              <i>Marketing</i>
            </div>
            <div className="team-card__bottom">
              <div className='socials team-card-bottom'>
                <a href="/" target="_blank">
                  <i className='fab fa-twitter'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-medium-m'></i>
                </a>
                <a href="/" target="_blank">
                  <i className='fab fa-telegram-plane'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTeam
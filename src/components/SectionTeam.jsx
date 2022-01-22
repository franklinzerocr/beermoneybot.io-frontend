import React from 'react'
import '../styles/Team_style.scss';
import portrait from '../assets/team/portrait.png';
import TeamMember from "../components/TeamMember";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionTeam = () => {
  let team =
    [
      {
        portrait: portrait,
        role: 'coding',
        fullName: 'John Doe',
        position: 'Developer',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        }
      },
      {
        portrait: portrait,
        role: 'crypto',
        fullName: 'Natasha Romanoff',
        position: 'Analista Cripto',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        },
      },
      {
        portrait: portrait,
        role: 'marketing',
        fullName: 'John Rambo',
        position: 'Líder de Marketing',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        }
      },
      {
        portrait: portrait,
        role: 'coding',
        fullName: 'Charlie Brown',
        position: 'Tester',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        }
      },
      {
        portrait: portrait,
        role: 'crypto',
        fullName: 'Diana Prince',
        position: 'Analista Técnico',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        }
      },
      {
        portrait: portrait,
        role: 'marketing',
        fullName: 'Tony Stark',
        position: 'Ventas',
        socials:
        {
          twitter: 'Beermoney_Bot',
          medium: '',
          telegram: ''
        }
      }
    ]

  return (
    <section className='team-container'>
      <div className='title-container title-left'>
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
          <h2 className='first-word'>Conoce</h2>
          <h2 className='second-word tabbed-left'>al Equipo</h2>
        </AnimationOnScroll>
      </div>
      <div className='title-container team'>
        {
          team.map(
            (member) => (
              <TeamMember
                portrait={portrait}
                role={member.role}
                fullName={member.fullName}
                position={member.position}
                socials={member.socials}
              />
            )
          )
        }
      </div>
    </section>
  )
}

export default SectionTeam
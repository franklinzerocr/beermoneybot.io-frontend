import React from 'react'
import '../styles/Team_style.scss';
import portraits from '../assets/team/portraits/index.js'
import TeamMember from "../components/TeamMember";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionTeam = () => {
  let team =
    [
      {
        portrait: portraits.franklin,
        role: 'ceo',
        fullName: 'Franklin Noriega',
        position: 'Director General & Lead Developer',
        socials:
        {
          twitter: 'franklinzerocr',
        }
      },
      {
        portrait: portraits.nathaly,
        role: 'administration',
        fullName: 'Nathaly Quintero',
        position: 'Directora Administrativa',
        socials:
        {
          twitter: 'lanathquintero',
        },
      },
      {
        portrait: portraits.ricardo,
        role: 'crypto',
        fullName: 'Ricardo López',
        position: 'Director de Finanzas',
        socials:
        {
          twitter: 'Ruiseart',
        }
      },
      {
        portrait: portraits.kevin,
        role: 'marketing',
        fullName: 'Kevin Hernández',
        position: 'Director de Marketing',
        socials:
        {
          twitter: 'KevinNegocios',
        }
      },
      {
        portrait: portraits.karlianna,
        role: 'frontend',
        fullName: 'Karlianna Suárez',
        position: 'Frontend Developer',
        socials:
        {
          twitter: 'KarliMSC',
        }
      },
      {
        portrait: portraits.felix,
        role: 'backend',
        fullName: 'Felix García',
        position: 'Backend Developer',
        socials:
        {
          twitter: 'FG1989',
        }
      }
    ]

  return (
    <section className='team-container'>
      <div className='title-container title-container-aux title-left'>
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
          <h2 className='first-word'>Conoce</h2>
          <h2 className='second-word tabbed-left'>al Equipo</h2>
        </AnimationOnScroll>
        {/* <div id="circle-analysis"></div> */}
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className='title-container team'>
          {
            team.map(
              (member) => (
                <TeamMember
                  portrait={member.portrait}
                  role={member.role}
                  fullName={member.fullName}
                  position={member.position}
                  socials={member.socials}
                />
              )
            )
          }
        </div>
      </AnimationOnScroll>

    </section>
  )
}

export default SectionTeam
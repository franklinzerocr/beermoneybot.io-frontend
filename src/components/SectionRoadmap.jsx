import React from 'react'
import '../styles/Roadmap_style.scss';
import roadmap from '../assets/roadmap/bmb-roadmap-def-01-01 (2).png';






const SectionRoadmap = () => {
  return (
    <>
      <section className='roadmap-container'>
        <img src={roadmap} alt="roadmap" loading="eager"/>
      </section>
    </>
  )
}

export default SectionRoadmap
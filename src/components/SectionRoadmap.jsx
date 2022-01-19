import React from 'react'
import '../styles/Roadmap_style.scss';
import roadmap from '../assets/roadmap/bmb-roadmap-def-03 (5).png';






const SectionRoadmap = () => {
  return (
    <>
      <section className='roadmap-container'>
        <img src={roadmap} alt="roadmap" loading="lazy"/>
      </section>
    </>
  )
}

export default SectionRoadmap
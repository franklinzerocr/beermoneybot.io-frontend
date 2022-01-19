import React from 'react'
import '../styles/Roadmap_style.scss';
import roadmap from '../assets/roadmap/bmb-roadmap-def-03 (5).png';






const SectionRoadmap = () => {
  return (
    <>
      <div className='roadmap-container'>
        <img src={roadmap} alt="roadmap" loading="lazy"/>
      </div>
    </>
  )
}

export default SectionRoadmap
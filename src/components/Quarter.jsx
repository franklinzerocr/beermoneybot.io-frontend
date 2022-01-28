import React from 'react'
import '../styles/Roadmap_style.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import loguito from '../assets/Logos/loguito.png'










const Quarter = ({ quarter, index }) => {
  return (
    <>
      <AnimationOnScroll animateIn={ (index + 1) % 2 === 1 ? "animate__slideInRight" : "animate__slideInLeft"} animateOnce={true} className='roadmap-container-inner-proper-quarter'>
        <div className="roadmap-container-inner-proper-quarter">
          <div className="roadmap-container-inner-proper-quarter-left">
            <div className="roadmap-container-inner-proper-quarter-left-stage">
              {quarter.stage}
            </div>
            <div className="roadmap-container-inner-proper-quarter-left-cubes">
              <div className="roadmap-container-inner-proper-quarter-left-cubes-background">
                <span></span>
              </div>
              <div className="roadmap-container-inner-proper-quarter-left-cubes-main">
                <span>
                  {quarter.year}
                </span>
                <span>
                  {quarter.quarter}
                </span>
              </div>
            </div>
            {/* <div className='roadmap-container-inner-proper-quarter-left-bottom_line'></div> */}
          </div>
          <div className="roadmap-container-inner-proper-quarter-middle"></div>
          <div className="roadmap-container-inner-proper-quarter-right">
            <div className="roadmap-container-inner-proper-quarter-right-top">
              <div className="roadmap-container-inner-proper-quarter-right-top-beerplus">
                <img src={loguito} alt="loguito" />
                <span>+1</span>
              </div>
              <div className="roadmap-container-inner-proper-quarter-right-top-checkpoint">
                <span>
                  CHECKPOINT!
                </span>
              </div>
            </div>
            <div className='roadmap-container-inner-proper-quarter-right-list'>
              <ul>
                {quarter.objectives.map((objective, index) => {
                  return <li key={index}><span className={objective.achieved && 'scratched'}>{objective.objective}</span></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <br />
      <br />
    </>
  )
}

export default Quarter
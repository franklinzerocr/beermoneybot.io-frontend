import React from 'react'
import '../styles/Roadmap_style.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import beerBottom from '../assets/Logos/logo_Mesa de trabajo 1.png'
import Quarter from '../components/Quarter'
import QuarterProps from '../assets/quarterProps.js'





const SectionRoadmap = () => {
  return (
    <>
      <section className='roadmap-container'>
        <div className="roadmap-container-inner">

          {/* Title */}
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
            <div className="roadmap-container-inner-title">
              <h2>ROADMAP</h2>
            </div>
          </AnimationOnScroll>
          <div className="roadmap-container-inner-proper">
            {/* <Quarter /> */}
            {QuarterProps.map((quarter, index) => {
              return <Quarter key={index}  quarter={quarter} index={index}/>
            })}


            {/* bottom */}

            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} className='roadmap-container-inner-proper-quarter'>
              <div className="roadmap-container-inner-proper-quarter lower">
                <div className='lower-left'>
                  <div className='lower-left-top'>
                    <span>2023</span>
                    <span>IN PROGRESS</span>
                  </div>
                  <div className='lower-left-lower'>
                    <ul>
                      <li>
                        Lanzamiento de "Beermoney Custom Bot"
                      </li>
                      <li>
                        Integración de Token
                      </li>
                      <li>
                        Integración a DEX
                      </li>
                      <li>
                        Integración a NFT Marketplaces
                      </li>
                      <li>
                        High Frequency Crypto Trading
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='lower-right'>
                  <img src={beerBottom} alt="beer" />
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionRoadmap
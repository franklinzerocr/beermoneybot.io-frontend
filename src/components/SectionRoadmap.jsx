import React from 'react'
import '../styles/Roadmap_style.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import loguito from '../assets/Logos/loguito.png'






const SectionRoadmap = () => {
  return (
    <>
      <section className='roadmap-container'>
        <div className="roadmap-container-inner">
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
            <div className="roadmap-container-inner-title">
              <h2>ROADMAP</h2>
            </div>
          </AnimationOnScroll>
          <div className="roadmap-container-inner-proper">
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} className='roadmap-container-inner-proper-quarter'>
              <div className="roadmap-container-inner-proper-quarter">
                <div className="roadmap-container-inner-proper-quarter-left">
                  <div className="roadmap-container-inner-proper-quarter-left-stage">
                    STAGE 1
                  </div>
                  <div className="roadmap-container-inner-proper-quarter-left-cubes">
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-background">
                      <span></span>
                    </div>
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-main">
                      <div>
                        2022
                      </div>
                      <div>
                        Q1
                      </div>
                    </div>
                  </div>
                </div>
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
                      <li>
                        <span>
                          Estabilización de Spot Trading
                        </span>
                      </li>
                      <li>
                        <span>
                          Estabilización de Contabilidad
                        </span>
                      </li>
                      <li>
                        <span>
                          Estabilización de Gestión de Cuentas
                        </span>
                      </li>
                      <li>
                        <span>
                          Frontend beermoney.io
                        </span>
                      </li>
                      <li>
                        <span>
                          V1.0 Dashboard
                        </span>
                      </li>
                      <li>
                        <span>
                          Lanzamiento de Recompensas NFT "BM Club"
                        </span>
                      </li>
                      <li>
                        <span>
                          Refactorización de Proyecto
                        </span>
                      </li>
                    </ul>
                  </div>
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
import React from 'react'
import '../styles/Roadmap_style.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import loguito from '../assets/Logos/loguito.png'
import beerBottom from '../assets/Logos/LogoIndex.png'






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

            {/* Q1 */}
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
                      <span>
                        2022
                      </span>
                      <span>
                        Q1
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

            <br />
            <br />

            {/* Q2 */}
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} className='roadmap-container-inner-proper-quarter'>
              <div className="roadmap-container-inner-proper-quarter">
                <div className="roadmap-container-inner-proper-quarter-left">
                  <div className="roadmap-container-inner-proper-quarter-left-stage">
                    STAGE 2
                  </div>
                  <div className="roadmap-container-inner-proper-quarter-left-cubes">
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-background">
                      <span></span>
                    </div>
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-main">
                      <span>
                        2022
                      </span>
                      <span>
                        Q2
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
                      <li>
                        <span>
                          Migración a servidores de alto rendimiento
                        </span>
                      </li>
                      <li>
                        <span>
                          v2.0 Dashboard
                        </span>
                      </li>
                      <li>
                        <span>
                          Integración Kucoin Exchange
                        </span>
                      </li>
                      <li>
                        <span>
                          Integración Bitfinex Exchange
                        </span>
                      </li>
                      <li>
                        <span>
                          Short Mode
                        </span>
                      </li>
                      <li>
                        <span>
                          Bitcoin & Shitcoins Futures Trading
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>

            <br />
            <br />

            {/* Q3 */}
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} className='roadmap-container-inner-proper-quarter'>
              <div className="roadmap-container-inner-proper-quarter">
                <div className="roadmap-container-inner-proper-quarter-left">
                  <div className="roadmap-container-inner-proper-quarter-left-stage">
                    STAGE 3
                  </div>
                  <div className="roadmap-container-inner-proper-quarter-left-cubes">
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-background">
                      <span></span>
                    </div>
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-main">
                      <span>
                        2022
                      </span>
                      <span>
                        Q3
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
                      <li>
                        <span>
                          Integración LN Markets
                        </span>
                      </li>
                      <li>
                        <span>
                          Integración ByBit Exchange
                        </span>
                      </li>
                      <li>
                        <span>
                          Integración FTX Exchange
                        </span>
                      </li>
                      <li>
                        <span>
                          Integración Kraken Exchange
                        </span>
                      </li>
                      <li>
                        <span>
                          Estabilización de Operaciones de Alto Volumen
                        </span>
                      </li>
                      <li>
                        <span>
                          Lanzamiento de "Beermoney Bot (Open)"
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>

            <br />
            <br />

            {/* Q4          */}
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true} className='roadmap-container-inner-proper-quarter'>
              <div className="roadmap-container-inner-proper-quarter">
                <div className="roadmap-container-inner-proper-quarter-left">
                  <div className="roadmap-container-inner-proper-quarter-left-stage">
                    STAGE 4
                  </div>
                  <div className="roadmap-container-inner-proper-quarter-left-cubes">
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-background">
                      <span></span>
                    </div>
                    <div className="roadmap-container-inner-proper-quarter-left-cubes-main">
                      <span>
                        2022
                      </span>
                      <span>
                        Q4
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
                      <span>
                        +1
                      </span>
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
                          Lanzamiento de "Beermoney Bot Analyzer"
                        </span>
                      </li>
                      <li>
                        <span>
                          Tokenización
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>

            <br />
            <br />


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
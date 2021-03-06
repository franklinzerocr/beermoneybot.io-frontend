import '../styles/Exchanges_style.scss';
import binance from '../assets/Logos/exchanges/Binance.png';
import ftx from '../assets/Logos/exchanges/ftx.png';
import bybit from '../assets/Logos/exchanges/bitbit.png';
import kraken from '../assets/Logos/exchanges/kraken.png';
import kucoin from '../assets/Logos/exchanges/kucoin.png';
import bitfinex from '../assets/Logos/exchanges/bitfinex.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const SectionUse = () => {
  return (
    <section className='main-container-use'>
      <div className='main-container-use-background'>
        <div className='title-container title-right'>
          <div className="title-container-aux">
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
              <h2 className='first-word '>Exchanges</h2>
              <h2 className='second-word tabbed-right'>Compatibles</h2>
            </AnimationOnScroll>
          </div>
          <div id="circle-exchanges"></div>
        </div>
        <section className='section-exchange'>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <div className='grid-exchanges'>
              <div className='grid-exchange enable-exchange'>
                <a href="https://www.binance.com" target="_blank" rel="noreferrer">
                  <img src={binance} alt='Binance' />
                </a>
              </div>
              <div className='grid-exchange unable-exchange'>
                <a href="https://www.ftx.com" target="_blank" rel="noreferrer">
                  <img src={ftx} alt='FTX' />
                </a>
              </div>
              <div className='grid-exchange unable-exchange'>
                <a href="https://www.bybit.com" target="_blank" rel="noreferrer">
                  <img src={bybit} alt='ByBit' />
                </a>
              </div>
              <div className='grid-exchange unable-exchange'>
                <a href="https://www.kraken.com" target="_blank" rel="noreferrer">
                  <img src={kraken} alt='Kraken' />
                </a>
              </div>
              <div className='grid-exchange unable-exchange'>
                <a href="https://www.kucoin.com" target="_blank" rel="noreferrer">
                  <img src={kucoin} alt='Kucoin' />
                </a>
              </div>
              <div className='grid-exchange unable-exchange'>
                <a href="https://www.bitfinex.com" target="_blank" rel="noreferrer">
                  <img src={bitfinex} alt='Bitfinex' />
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </section>
      </div>
    </section>
  );
};

export default SectionUse;

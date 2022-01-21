import '../styles/Exchanges_style.scss';
import binance from '../assets/Logos/exchanges/Binance.png';
import ftx from '../assets/Logos/exchanges/ftx.png';
import bybit from '../assets/Logos/exchanges/bitbit.png';
import kraken from '../assets/Logos/exchanges/kraken.png';
import kucoin from '../assets/Logos/exchanges/kucoin.png';
import bitfinex from '../assets/Logos/exchanges/bitfinex.png';

const SectionUse = () => {
  return (
    <section className='main-container-use'>
      <div className='main-container-use-background'>
        <div className='title-container title-right'>
          <h2 className='first-word '>Exchanges</h2>
          <h2 className='second-word tabbed-right'>Compatibles</h2>
        </div>
        <section className='section-exchange'>
          <div className='grid-exchanges'>
            <div className='grid-exchange enable-exchange'>
              <a href="https://www.binance.com" target="_blank" rel="noreferrer">
                <img src={binance} alt='' />
              </a>
            </div>
            <div className='grid-exchange unable-exchange'>
              <a href="https://www.ftx.com" target="_blank" rel="noreferrer"> 
                <img src={ftx} alt='' />
              </a>
            </div>
            <div className='grid-exchange unable-exchange'>
              <a href="https://www.bybit.com" target="_blank" rel="noreferrer">
                <img src={bybit} alt='' />
              </a>
            </div>
            <div className='grid-exchange unable-exchange'>
              <a href="https://www.kraken.com" target="_blank" rel="noreferrer">
                <img src={kraken} alt='' />
              </a>
            </div>
            <div className='grid-exchange unable-exchange'>
            <a href="https://www.kucoin.com" target="_blank" rel="noreferrer">
                <img src={kucoin} alt='' />
              </a>
            </div>
            <div className='grid-exchange unable-exchange'>
              <a href="https://www.bitfinex.com" target="_blank" rel="noreferrer">
                <img src={bitfinex} alt='' />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SectionUse;

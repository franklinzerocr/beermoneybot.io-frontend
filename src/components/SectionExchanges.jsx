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
              <img src={binance} alt='' />
            </div>
            <div className='grid-exchange unable-exchange'>
              <img src={ftx} alt='' />
            </div>
            <div className='grid-exchange unable-exchange'>
              <img src={bybit} alt='' />
            </div>
            <div className='grid-exchange unable-exchange'>
              <img src={kraken} alt='' />
            </div>
            <div className='grid-exchange unable-exchange'>
              <img src={kucoin} alt='' />
            </div>
            <div className='grid-exchange unable-exchange'>
              <img src={bitfinex} alt='' />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SectionUse;

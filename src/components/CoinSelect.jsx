import React from 'react';
import '../styles/CoinSelect_style.scss';
import btc from '../assets/home/btc.png';
import usdt from '../assets/home/usdt.png';

const CoinSelect = ({ coin, setCoin }) => {
  const handleCoinClick = (coin) => {
    setCoin(coin);
  };
  return (
    <>
      <div className='coin-select-container'>
        <div className={`coin-chip ${coin === 'USDT' && 'selected-coin'}`} onClick={() => handleCoinClick('USDT')}>
          <img src={usdt} alt='UST' />
          <span>USDT</span>
        </div>
        <div className={`coin-chip ${coin === 'BTC' && 'selected-coin'}`} onClick={() => handleCoinClick('BTC')}>
          <img src={btc} alt='BTC' />
          <span>BTC</span>
        </div>
      </div>
    </>
  );
};

export default CoinSelect;

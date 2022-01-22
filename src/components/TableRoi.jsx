import React from 'react';
import '../styles/TableRoi_style.scss';
import CoinSelect from './CoinSelect';


export const TableRoi = ({ coin, setCoin }) => {
  const coinHandler = (coin) => {
    let coin_ = ''
    switch (coin) {
      case 'USDT':
        coin_ = 'USDT'
        break;
      case 'BTC':
        coin_ = 'BTC';
        break
      default:
        coin_ = 'USDT'
        break;
    }
    return coin_
  }
  return (
    <>
      <div className='grid-container-tableroi'>
        <div className='item1'>
          <div className='tableroi-sqare'> TRADES </div>
          <div className='tableroi-center'> XX </div>
        </div>
        <div className='item2'>
          <div className='tableroi-sqare'> AVG </div>
          <div className='tableroi-center'> XX% </div>
        </div>
        <div className='item3'>
          <div className='tableroi-sqare'> WIN </div>
          <div className='tableroi-center'> XX </div>
        </div>
        <div className='item4'>
          <div className='tableroi-sqare'> LOSES </div>
          <div className='tableroi-center'> XX </div>
        </div>
        <div className='item5'>
          <div className='tableroi-sqare'> ROI {coinHandler(coin)} </div>
          <div className='tableroi-center'> XXX% </div>
          <div id="circle-roi"></div>
        </div>
      </div>
      <div>
        <CoinSelect coin={coin} setCoin={setCoin} />
      </div>
    </>
  );
};

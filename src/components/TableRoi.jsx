import React from 'react';
import '../styles/TableRoi_style.scss';
import CoinSelect from './CoinSelect';

export const TableRoi = ({ coin, setCoin }) => {
  if (coin === 'USDT') {
    return (
      <>
        <div className='grid-container-tableroi'>
          <div className='item1'>
            <div className='tableroi-sqare'> TRADES </div>
            <div className='tableroi-center'> 77 </div>
          </div>
          <div className='item2'>
            <div className='tableroi-sqare'> AVG </div>
            <div className='tableroi-center'> 1.99% </div>
          </div>
          <div className='item3'>
            <div className='tableroi-sqare'> WIN </div>
            <div className='tableroi-center'> 65 </div>
          </div>
          <div className='item4'>
            <div className='tableroi-sqare'> LOSES </div>
            <div className='tableroi-center'> 12 </div>
          </div>
          <div className='item5'>
            <div className='tableroi-sqare'> ROI USDT </div>
            <div className='tableroi-center'> 24.39% </div>
            <div id='circle-roi'></div>
          </div>
        </div>
        <div>
          <CoinSelect coin={coin} setCoin={setCoin} />
        </div>
      </>
    );
  }
  if (coin === 'BTC') {
    return (
      <>
        <div className='grid-container-tableroi'>
          <div className='item1'>
            <div className='tableroi-sqare'> TRADES </div>
            <div className='tableroi-center'> 74 </div>
          </div>
          <div className='item2'>
            <div className='tableroi-sqare'> AVG </div>
            <div className='tableroi-center'> 1.08% </div>
          </div>
          <div className='item3'>
            <div className='tableroi-sqare'> WIN </div>
            <div className='tableroi-center'> 61 </div>
          </div>
          <div className='item4'>
            <div className='tableroi-sqare'> LOSES </div>
            <div className='tableroi-center'> 13 </div>
          </div>
          <div className='item5'>
            <div className='tableroi-sqare'> ROI BTC </div>
            <div className='tableroi-center'> 14.21% </div>
            <div id='circle-roi'></div>
          </div>
        </div>
        <div>
          <CoinSelect coin={coin} setCoin={setCoin} />
        </div>
      </>
    );
  }
};

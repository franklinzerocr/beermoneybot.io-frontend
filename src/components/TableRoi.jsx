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
            <div className='tableroi-center'> 81 </div>
          </div>
          <div className='item2'>
            <div className='tableroi-sqare'> AVG </div>
            <div className='tableroi-center'> 2.41% </div>
          </div>
          <div className='item3'>
            <div className='tableroi-sqare'> WIN </div>
            <div className='tableroi-center'> 65 </div>
          </div>
          <div className='item4'>
            <div className='tableroi-sqare'> LOSES </div>
            <div className='tableroi-center'> 16 </div>
          </div>
          <div className='item5'>
            <div className='tableroi-sqare'> ROI USDT </div>
            <div className='tableroi-center'> 27.68% </div>
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
            <div className='tableroi-center'> 84 </div>
          </div>
          <div className='item2'>
            <div className='tableroi-sqare'> AVG </div>
            <div className='tableroi-center'> 0.18% </div>
          </div>
          <div className='item3'>
            <div className='tableroi-sqare'> WIN </div>
            <div className='tableroi-center'> 58 </div>
          </div>
          <div className='item4'>
            <div className='tableroi-sqare'> LOSES </div>
            <div className='tableroi-center'> 26 </div>
          </div>
          <div className='item5'>
            <div className='tableroi-sqare'> ROI BTC </div>
            <div className='tableroi-center'> 0.84% </div>
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

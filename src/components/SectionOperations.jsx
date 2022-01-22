import React from 'react';
import '../styles/Operations_style.scss';
import { TableRoi } from './TableRoi';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SectionWhat = () => {
  const defaultCoin = 'USDT'
  const [coin, setCoin] = React.useState(defaultCoin);

  return (
    <section className='main-container-roi'>
      <div className='title-container title-right'>
        <div className="title-container-aux">
          <h2 className='first-word '>Operaciones</h2>
          <h2 className='second-word tabbed-right'>Realizadas</h2>
        </div>
        <div id="circle-ops"></div>
      </div>
      <section className='container-articles-roi'>
        <article className='article-roi table-roi-container'>
          <TableRoi coin={coin} setCoin={setCoin} />{' '}
        </article>

        <article className='article-roi twitter-timeline '>
          {/* <a className="twitter-timeline" data-height="460" data-theme="light" href="https://twitter.com/Beermoney_Bot?ref_src=twsrc%5Etfw"> @Beermoney_Bot</a> 
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
          <TwitterTimelineEmbed sourceType='profile' screenName='Beermoney_Bot' linkColor='#FF9933' options={{ height: 400 }} noFooter={true} theme='dark' />
        </article>
      </section>
    </section>
  );
};

export default SectionWhat;

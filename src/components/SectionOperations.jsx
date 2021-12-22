import '../styles/Operations_style.scss';
import { TableRoi } from './TableRoi';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SectionWhat = () => {
  return (
    <section className='main-container-roi'>
      <div className='title-container title-right'>
        <h2 className='first-word '>Operaciones</h2>
        <h2 className='second-word tabbed-right'>Realizadas</h2>
      </div>
      <section className='container-articles-roi'>
        <article className='article-roi table-roi-container'>
          {' '}
          <TableRoi />{' '}
        </article>

        <article className='article-roi twitter-timeline '>
          {/* <a className="twitter-timeline" data-height="460" data-theme="light" href="https://twitter.com/Beermoney_Bot?ref_src=twsrc%5Etfw"> @Beermoney_Bot</a> 
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
          <TwitterTimelineEmbed sourceType='profile' screenName='Beermoney_Bot' linkColor='#FF9933' options={{ height: 400 }} noFooter='true' theme='dark' />
        </article>
      </section>
    </section>
  );
};

export default SectionWhat;
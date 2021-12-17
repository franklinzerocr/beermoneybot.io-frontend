import '../styles/SectionRoi_style.scss';
import { TableRoi } from './TableRoi';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SectionRoi = () => {
    return (
        <section className="main-container-roi">
            <section className="container-articles-roi" >
            <article className="article-roi">  <TableRoi /> </article>
               
       
            <article className="article-roi"> 
                <a className="twitter-timeline" href="https://twitter.com/Beermoney_Bot?ref_src=twsrc%5Etfw"> @Beermoney_Bot</a> 
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Beermoney_Bot"
                    footer
                    //theme="dark"
                    linkColor="#FF9933"
                    transparent
                    // autoHeight
                />
           </article>
           </section>
        </section>
    );
}

export default SectionRoi;
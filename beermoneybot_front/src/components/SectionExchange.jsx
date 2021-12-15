import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import '../styles/Exchange_style.scss';

const SectionExchange = () => {
  return (
    <section className="main-exchange-container">
      {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Beermoney_Bot"
          theme="dark"
          linkColor="#FF9933"
          transparent
          noFooter
          options={{height: 400}} 
        />

        {/* onLoad={tweetWidgetEl => {
    const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
    tweetEl.style.border = '5px solid red'
}}*/}

      <section className="main-table-container">
        {/* <div className="main-table-currency">
            <div className="table-currency-container">
              <table>
                <thead>
                <tr>
                  <th>Lorem</th>
                  <th>Lorem</th>
                  <th>Lorem</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>001</td>
                  <td>Bitcoin</td>
                  <td>$1.96 </td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Etherium</td>
                  <td>$0.4 </td>

                </tr>
                <tr>
                  <td>001</td>
                  <td>Rippler</td>
                  <td>$2.5</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Stellar</td>
                  <td>$4.9</td>
                </tr>
                </tbody>
              </table>
              <div className="currency-date">
                <p>Telegram: únete </p>
              </div>
            </div>
          </div> */}
      </section> 
    </section>
  )

}

export default SectionExchange;
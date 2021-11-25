import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="header--title-container">
            <a href="#plans" className="header--button">Conoce nuestros planes <span></span></a>
        </div>
      </header>
      <main>
        <section className="main-container-what">
          <div className="main-container-what-title">
            <h1>Qué es</h1>
            <h2>Beermoney Bot?</h2>
            <p>La próxima revolución de trading de criptomonedas,
              siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias
              obtiendo el mejor rendimiento en cada operación</p>
          </div>
          <div className="container-what-Img"></div>
        </section>
        <section className="main-container-what">
          <div className="main-container-operate-title">
            <h1>Cómo opera </h1>
            <h2>al día?</h2>
            <p>La próxima revolución de trading de criptomonedas,
              siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias
              obtiendo el mejor rendimiento en cada operación</p>
          </div>
          <div className="container-what-Img"></div>
        </section>
        <section className="main-container-verify">
          <div className="main-container-verify-title">
            <h1>Cómo verificar</h1>
            <h2>que es real?</h2>
            <p>La próxima revolución de trading de criptomonedas,
              siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias
              obtiendo el mejor rendimiento en cada operación</p>
          </div>
          <div className="container-what-Img"></div>
        </section>
        <section className="main-container-use">
        <div className="main-container-use-background">
          <div className="main-container-what-title">
            <h1>Cómo usar </h1>
            <h2>Beermoney Bot?</h2>
            <p>La próxima revolución de trading de criptomonedas,
              siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias
              obtiendo el mejor rendimiento en cada operación</p>
          </div>
        </div>
        </section>
        <section className="main-exchange-container">
          <div className="main-exchange-container-title">

          </div>

          <section className="main-table-container">
            <div className="main-table-currency">
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
            </div>
          </section>
        </section>
        <section id="plans" className="main-plans-container">
          <div className="plans-title">
            <h2>Suscribete en el plan que prefieras</h2>
          </div>
          <section className="plans-container-slider">
            <article className="plans-container-card">
              <div className="plan-info-container">
                <h3 className="plan-card-title">Light</h3>
                <p className="plan-card-price"><span>usdt</span> 1</p>
                <button className="plan-card-button">Escoge este </button>
              </div>
            </article>
            <article className="plans-container-card">
              <div className="plan-info-container">
                <h3 className="plan-card-title">Medium</h3>
                <p className="plan-card-price"><span>usdt</span> 25</p>
                <button className="plan-card-button">Escoge este </button>
              </div>
            </article>
          </section>
        </section>
      </main>
      <footer>
        <section className="footer-left">
            <ul>
                <li><a href="#"> Twitter </a></li>
                <li><a href="#"> Franklin Noriega </a></li>
                <li><a href="#"> ROI </a></li>
            </ul>
        </section>
        <section className="footer-rigth">
            <img src="./assets/Logos/Logoindex.png" alt="Logo de BeermoneyBot 2020"/>
        </section>
    </footer>
    </div>
  );
}

export default App;

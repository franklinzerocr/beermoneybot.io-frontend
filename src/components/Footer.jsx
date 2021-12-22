import '../styles/Footer_style.scss';
import logo from '../assets/Logos/LogoIndex.png';

const Footer = () => {
  return (
    <footer>
      <section className='footer-left'>
        <div className='logo-footer-container'>
          <img src={logo} alt='Logo de BeermoneyBot 2020' />
          <div className='socials'>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-medium-m'></i>
            <i className='fab fa-telegram-plane'></i>
          </div>
        </div>
      </section>
      <section className='footer-rigth'>
        <div className='logo-footer-container'>
          <p>Beermoney Bot es un Bot de Trading Algoritmico Automatizado con Criptomonedas que opera en distintos exchanges.</p>
          <div className='footer-menu'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/roadmap'>Roadmap</a>
            </li>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='#access'>Access</a>
            </li>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

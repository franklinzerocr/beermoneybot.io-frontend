import '../styles/Footer_style.scss';
import logo from '../assets/Logos/LogoIndex.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <section className='footer-left'>
        <div className='logo-footer-container'>
          <img src={logo} alt='Logo de BeermoneyBot 2020' />
          <div className='socials'>
            <a href={`https://twitter.com/beermoney_bot`} target='_blank' rel='noreferrer'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href={`https://medium.com/beermoney-bot`} target='_blank' rel='noreferrer'>
              <i className='fab fa-medium-m'></i>
            </a>
            <a href={`https://t.me/beermoneyAnuncios`} target='_blank' rel='noreferrer'>
              <i className='fab fa-telegram-plane'></i>
            </a>
          </div>
        </div>
      </section>
      <section className='footer-rigth'>
        <div className='logo-footer-container'>
          <p>Beermoney Bot es un Bot de Trading Algoritmico Automatizado con Criptomonedas que opera en distintos exchanges.</p>
          <div className='footer-menu'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/roadmap'>Roadmap</Link>
              </li>
              <li>
                <Link to='/team'>Team</Link>
              </li>
              <li>
                <a href='/#access'>Access</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

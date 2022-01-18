import '../styles/Footer_style.scss';
import logo from '../assets/Logos/LogoIndex.png';
import { Link } from "react-router-dom";


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
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

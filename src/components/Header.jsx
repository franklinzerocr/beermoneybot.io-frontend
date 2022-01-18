import '../styles/Header_style.scss';
import { MenuHeader } from './MenuHeader';
import logo from '../assets/Ilustracion-beer.svg';

const Header = ({small}) => {
  if (small) {
    return(
      <header className='App-header--small'>
        <div className='header-menu-container'>
          <MenuHeader />
        </div>
      </header>
    )
  } else {
    return (
      <header className='App-header'>
        <div className='header-menu-container'>
          <MenuHeader />
        </div>
          <div className='header--title-container'>
            <p>
              ¿Un <b>Robot</b> que
              <br />
              haga trading mejor
              <br />
              que un humano?
            </p>
            <h1>Bro... Hold my Beer</h1>
          </div>
          <div className='header-img'>
            <img src={logo} alt=''></img>
          </div>
      </header>
    );
  }
};

export default Header;

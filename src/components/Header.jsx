import '../styles/Header_style.scss';
import { MenuHeader } from './MenuHeader';
import logo from '../assets/Ilustracion-beer.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Header = ({ small }) => {
  if (small) {
    return (
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
        <AnimationOnScroll animateIn="animate__lightSpeedInRight" animateOnce={true} >
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
        </AnimationOnScroll>
        <div className='header-img'>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <img src={logo} alt=''></img>
          </AnimationOnScroll>
        </div>
      </header>
    );
  }
};

export default Header;

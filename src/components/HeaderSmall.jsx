import '../styles/Header_style.scss';
import { MenuHeader } from './MenuHeader';

const Header = () => {
  return (
    <header className='App-header small'>
      <div className='header-menu-container'>
        <MenuHeader />
      </div>
    </header>
  );
};

export default Header;

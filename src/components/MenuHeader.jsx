import '../styles/MenuHeader_style.scss';
import { Link } from 'react-router-dom';

import logo from '../assets/Logos/log blanco-01.svg';

export const MenuHeader = () => {
  return (
    <>
      <div className='logo-container'>
        <img className='logo-menu' src={logo} alt=''></img>
      </div>
      <div className='menu-container'>
        <ul className='main-menu'>
          <li className='menu-item'>
            <Link to='/'>Home</Link>
          </li>
          {/* <li className='menu-item'>
            <Link to='/roadmap'>Roadmap</Link>
          </li> */}
          {/* <li className='menu-item'>
            <Link to='/team'>Team</Link>
          </li> */}
          <li className='menu-item'>
            <a href='/#access'>Access</a>
          </li>
        </ul>
      </div>
    </>
  );
};

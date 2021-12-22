import '../styles/MenuHeader_style.scss';

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
            <a href='/'>Home</a>
          </li>
          <li className='menu-item'>
            <a href='/roadmap'>Roadmap</a>
          </li>
          <li className='menu-item'>
            <a href='/team'>Team</a>
          </li>
          <li className='menu-item'>
            <a href='#access'>Access</a>
          </li>
        </ul>
      </div>
    </>
  );
};

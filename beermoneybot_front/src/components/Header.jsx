import '../styles/Header_style.scss';
import { MenuHeader } from './MenuHeader';
import logo from '../assets/Ilustracion-beer.svg'

const Header = () => {
    return (
        <header className="App-header">
            <div className="header-menu-container">
                <MenuHeader />
            </div>
            <div className="header--title-container">
                <p>¿Un robot que haga trading mejor que un humano?</p>
                <h1>Bro... Hold my beer</h1>
                
            </div>
            <div className="header-img"> 
                <img src={logo} alt=""></img>
            </div>
           
        </header>
    );
}

export default Header
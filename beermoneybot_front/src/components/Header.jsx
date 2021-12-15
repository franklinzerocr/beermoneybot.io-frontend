import '../styles/Header_style.scss';
import { MenuHeader } from './MenuHeader';

const Header = () => {
    return (
        <header className="App-header">
            <MenuHeader />
            <div className="header--title-container">
                <a href="#plans" className="header--button">Conoce nuestros planes <span></span></a>
            </div>
        </header>
    );
}

export default Header
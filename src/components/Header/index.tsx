import Menu from "../Menu";
import './assets/css/nav.css';
import './assets/css/nav-logo.css';
import './assets/css/nav-menu.css';
const Header = () => {
    return (<>
        <nav className="nav">
            <div className="nav__logo">
                
            </div>
            <div className="nav__menu">
                <Menu
                    type="header"
                />
            </div>
        </nav>
    </>);
}

export default Header;
import Menu from "../Menu";
import './assets/css/style.scss';
const Header = () => {
    return (<>
        <nav className="nav">
            <div className="nav__logo">
                
            </div>
            <div className="nav__menu container">
                <Menu
                    type="header"
                />
            </div>
        </nav>
    </>);
}

export default Header;
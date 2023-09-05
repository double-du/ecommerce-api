import Menu from "../Menu";
import './assets/css/footer.css';
import './assets/css/footer-main.css';
import './assets/css/footer-menu.css';
import './assets/css/footer-devby.css';
const Footer = () => {
    return (<>
        <footer className="footer">
            <div className="footer__main container">
                <div className="footer__logo"></div>
                <div className="footer__menu">
                    <Menu type="footer"/>
                </div>
            </div>
            <div className="footer__devby">
                Dev By: Eduardo Augusto Furlaneti 
            </div>
        </footer>
    </>);
}

export default Footer;


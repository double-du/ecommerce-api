import { Link } from 'react-router-dom';
import './assets/css/style.scss';

const Menu = ({type}: {type: string}) => {
    return (<>
        <ul className={`menu menu--${type}`}>
            <li className="menu__item"><Link to='/' className="menu__link">Home</Link></li>
            <li className="menu__item"><Link to='/' className="menu__link">Produtos</Link></li>
            <li className="menu__item"><Link to='/carrinho' className="menu__link">Carrinho</Link></li>
        </ul>
    </>);
}

export default Menu;
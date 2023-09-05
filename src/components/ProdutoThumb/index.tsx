import Produto from "../../interfaces/Produto";

import './assets/css/produto-thumb.css';
import './assets/css/produto-thumb-image.css';
import './assets/css/produto-thumb-descricao.css';
import './assets/css/produto-thumb-titulo.css';
import './assets/css/produto-thumb-preco.css';
import './assets/css/produto-thumb-preco-original.css';
import './assets/css/produto-thumb-preco-final.css';
import './assets/css/produto-link.css';

import { Link, useNavigate } from "react-router-dom";

interface ProdutoProps {
    produto: Produto
}

const ProdutoThumb = ({produto}: ProdutoProps)=> {
    produto.finalPrice = produto.price - (produto.price * produto.discountPercentage) / 100;
    return (<>
        <div className={`produto_thumb ${
            produto.id % 2 === 0 ? 'produto_thumb--reverso' : ''
        }`}>
            <img className="produto_thumb__image" src={`${produto.images[0]}`} alt="" />
            <div className="produto_thumb__dados">
                <h4 className="produto_thumb__titulo">{produto.title}</h4>
                <p className="produto_thumb__descricao">{produto.description}</p>
                <p className="produto_thumb__preco_original"><s>{produto.price}</s></p>
                <p className="produto_thumb__preco_final">{produto.finalPrice.toFixed(2)}</p>
                <Link to={`produto/${produto.id}`} className="produto__link">Ver Produto</Link>
            </div>
        </div>
    </>);
}

export default ProdutoThumb;
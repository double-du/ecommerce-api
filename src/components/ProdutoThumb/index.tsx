import Produto from "../../interfaces/Produto";

import './assets/css/produto-thumb.css';
import './assets/css/produto-thumb-image.css';
import './assets/css/produto-thumb-descricao.css';
import './assets/css/produto-thumb-titulo.css';
import './assets/css/produto-preco.css';
import './assets/css/produto-link.css';

import { useNavigate } from "react-router-dom";

interface ProdutoProps {
    produto: Produto
}


const ProdutoThumb = ({produto}: ProdutoProps)=> {
    const navigate = useNavigate();
    
    function redirecionaParaProduto(produto: Produto){
        navigate(`/produto/${produto.id}`)
    }
    return (<>

        <div className={`produto_thumb ${
            produto.id % 2 === 0 ? 'produto_thumb--reverso' : ''
        }`}>
            <img className="produto_thumb__image" src={`${produto.images[0]}`} alt="" />
            <div className="produto_thumb__dados">
                <h4 className="produto__titulo">{produto.title}</h4>
                <p className="produto_thumb__descricao">{produto.description}</p>
                <p className="produto__preco"><span className="produto__preco--moeda">R$</span> {produto.price}<span className="produto__preco--centavos">,00</span></p>
                <a onClick={ 
                    () => {redirecionaParaProduto(produto)}
                } className="produto__link">Ver Produto</a>
            </div>
        </div>
    </>);
}

export default ProdutoThumb;
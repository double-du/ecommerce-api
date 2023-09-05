import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Produto from '../../interfaces/Produto';

import axios from "axios";

import './assets/css/produto.css';
import './assets/css/produto-fotos.css';
import './assets/css/produto-conteudo.css';
import './assets/css/produto-marca.css';
import './assets/css/produto-descricao.css';
import './assets/css/produto-preco.css';

const PaginaProduto = () => {
    let parametros = useParams();
    
    const [produto, setProduto] = useState<Produto>();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${parametros.id}`)
            .then(resp => {
                setProduto(resp.data)            
            });
    }, [parametros]);

    console.log(produto)
    return(<>
        <div className="container">
            <div className="produto">
                <div className="produto__fotos">

                </div>
                <div className="produto__conteudo">
                    <h1>{produto?.title}</h1>
                    <span className="produto__marca">{produto?.brand}</span>
                    <p className="produto__descricao">{produto?.description}</p>
                    <p className="produto__preco">{produto?.price}</p>
                </div>
            </div>
        </div>
    </>);
}

export default PaginaProduto;
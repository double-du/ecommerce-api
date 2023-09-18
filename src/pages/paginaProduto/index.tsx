import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Produto, { ProdutoImagem } from '../../interfaces/Produto';

import axios from "axios";

import './assets/css/produto.css';
import './assets/css/produto-fotos.css';
import './assets/css/produto-conteudo.css';
import './assets/css/produto-titulo.css';
import './assets/css/produto-marca.css';
import './assets/css/produto-descricao.css';
import './assets/css/produto-preco.css';
import './assets/css/produto/imagem-principal.css';
import './assets/css/produto/imagens-galeria.css';
import './assets/css/produto/imagens-item.css';

const PaginaProduto = () => {
    let parametros = useParams();

    const [produto, setProduto] = useState<Produto>();
    const [imagemPrincipal, setImagemPrincipal] = useState<string>();

    useEffect(() => {
        console.log('chamei');
        axios.get(`https://dummyjson.com/products/${parametros.id}`)
            .then((resp: { data: Produto }) => {
                setProduto(resp.data);
                setImagemPrincipal(resp.data.images[0]);
            })
    }, [parametros]);

    function alterarImagemDestacada(imagem: ProdutoImagem): void {
        setImagemPrincipal(imagem);
    }

    function retornaValorComDesconto(valorCheio: any, valorDoDesconto: any)
    {
        let valorComDesconto = valorCheio - ((valorCheio * valorDoDesconto) / 100);
        return valorComDesconto.toFixed(2).replace('.',',');
    }
    return (<>
        <div className="container">
            <div className="produto">
                <div className="produto__fotos">
                    <div className="imagem__principal" style={{ backgroundImage: `url('${imagemPrincipal}')` }}>
                    </div>
                    <ul className="imagens__galeria">
                        {produto?.images.map(imagem =>
                            <li>
                                <div
                                    key={imagem}
                                    style={{ backgroundImage: `url(${imagem})` }}
                                    className="imagem__item"
                                    onClick={() => alterarImagemDestacada(imagem)}
                                >
                                    &nbsp;
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="produto__conteudo">
                    <h1 className="produto__titulo">{produto?.title}</h1>
                    <span className="produto__marca">{produto?.brand}</span>
                    <p className="produto__descricao">{produto?.description}</p>
                    <p className="produto__preco produto__preco--original"><s>{produto?.price}</s></p>
                    <p className="produto__preco produto__preco--com_desconto">{retornaValorComDesconto(produto?.price, produto?.discountPercentage)}</p>
                </div>
            </div>
        </div>
    </>);
}

export default PaginaProduto;
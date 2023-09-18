import Produto from "../../interfaces/Produto";

import './assets/css/style.scss';

import { Link } from "react-router-dom";
import Icones from "../Icones";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface ProdutoProps {
    produto: Produto
}

const ProdutoThumb = ({ produto }: ProdutoProps) => {
    produto.finalPrice = produto.price - (produto.price * produto.discountPercentage) / 100;

    function adicionaProdutoAoCarrinho(produtoId: number) {

        let jaAdicionados = sessionStorage.getItem('carrinho') ?? "[]";

        const jaAdd = JSON.parse(jaAdicionados) as number[];
        jaAdd.push(produtoId)

        window.sessionStorage.setItem('carrinho', JSON.stringify(jaAdd));
    }

    return (<>
        <div className={`produto_thumb ${produto.id % 2 === 0 ? 'produto_thumb--reverso' : ''
            }`}>
            <img className="produto_thumb__image" src={`${produto.images[0]}`} alt="" />
            <div className="produto_thumb__dados">
                {
                    produto.favorito ?
                        <Icones tipo='coracao_preenchido' classe='produto__icone produto__icone--selecionado' tamanho={25} /> :
                        <Icones tipo='coracao' classe='produto__icone' tamanho={25} />
                }
                <h4 className="produto_thumb__titulo">{produto.title}</h4>
                <p className="produto_thumb__descricao">{produto.description}</p>
                <p className="produto_thumb__preco_original"><s>{produto.price}</s></p>
                <p className="produto_thumb__preco_final">{produto.finalPrice.toFixed(2)}</p>
                <div className="produto_thumb__buttons">
                    <span
                        onClick={() => adicionaProdutoAoCarrinho(produto.id)}
                        className="produto__link produto__link--destaque">
                        Adicionar ao Carrinho
                        <Icones
                            tipo='carrinho'
                            classe='icone__inline'
                            tamanho={20}
                        />
                    </span>
                    <Link to={`produto/${produto.id}`} className="produto__link">
                        Ver Produto
                        <Icones
                            tipo='olho'
                            classe='icone__inline'
                            tamanho={20}
                        />
                    </Link>
                </div>
            </div>
        </div>
    </>);
}

export default ProdutoThumb;
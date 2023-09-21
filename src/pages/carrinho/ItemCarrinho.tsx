import { useEffect, useState } from "react";
import Produto from "../../interfaces/Produto";
import axios from "axios";

const ItemCarrinho = (quantidade: any, idProduto: any) => {
    console.log(idProduto)
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${idProduto}`)
            .then(resposta => {
                setProdutos(resposta.data.products)
            }).catch(erro => {
                console.log(erro);
            });
    }, []);
    return(<>
        {
            produtos.map(produto => 
                <div className="carrinho_item">
                    <div className="carrinho_item__foto"></div>
                    <div className="carrinho_item__titulo">{produto.title}</div>
                    <div className="carrinho_item__quantidade">{quantidade}</div>
                </div>
            )
        }
    </>);
}

export default ItemCarrinho;
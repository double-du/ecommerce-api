import { useEffect, useState } from 'react';

import axios from 'axios';

import Produto from '../../interfaces/Produto';
import ProdutoThumb from '../../components/ProdutoThumb';

import './assets/css/produtos-lista.css'
import './assets/css/produtos-titulo.css'

const Home = () =>{
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=12`)
            .then(resposta => {
                setProdutos(resposta.data.products)
            })
            .catch(erro => {
                console.log(erro);
            });
    }, []);

    return (<>
        <div className="banner"></div>
        <div className="container">
            <div className="produtos">
                <h3 className="produtos__titulo">Produtos</h3>
                <div className="produtos__lista">
                    {
                        produtos.map(       
                            produto => <ProdutoThumb key={produto.id} produto={produto}  />
                        )
                    }
                </div>
            </div>
        </div>
    </>);
}

export default Home;
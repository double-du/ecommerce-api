import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Produto from '../../interfaces/Produto';
import axios from "axios";

const PaginaProduto = () => {
    let dados = useParams();
    const [produto, setProduto] = useState<Produto>();
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${dados.id}`)
            .then(resposta => {
                setProduto(resposta.data.products)
            })
            .catch(erro => {
                console.log(erro);
            });
    }, []);
    console.log(produto)
    return (<>
        {
            // produto.map(item => {
            //     item.id
            // })
        }
    </>);
}

export default PaginaProduto;
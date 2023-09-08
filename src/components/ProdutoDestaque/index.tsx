import Produto from "../../interfaces/Produto";
import './assets/css/style.scss'
interface ProdutoProps{
    produto: Produto
}

const ProdutoDestaque = ({produto}: ProdutoProps) => {
    return (<>
        <div className="destaque__card" style={{backgroundImage: `url(${produto.thumbnail})`}}>
            <h3>{produto.title}</h3>
        </div>
    </>);
}

export default ProdutoDestaque;
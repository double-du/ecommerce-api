import ItemCarrinho from "./ItemCarrinho";

const Carrinho = () => {
    // let carrinho = JSON.parse(sessionStorage.carrinho);
    let objeto = sessionStorage.carrinho.replace('[','').replace(']','')
    
    let carrinho = objeto.split(',')

    let quantidade = 0;

    function resetarQuantidade()
    {
        quantidade = 0;
    }
    
    function compararIds(a:number, b:number)
    {
        return a-b;
    }

    carrinho = carrinho.map(function (x: string) { 
        return parseInt(x, 10); 
    });
    
    carrinho.sort(compararIds)

    return(<>
        <div className="carrinho">
            <div className="container">
                <h1 className="carrinho__titulo">Carrinho de Compras</h1>
                {
                    carrinho.map(     
                        (dado:number) => <>
                                {console.log(`Logando: ${typeof(dado)}`)}
                                <ItemCarrinho key={dado} produto={dado}  />
                            </>
                    )
                }
            </div>
        </div>
    </>)
}

export default Carrinho;
import Produto from "./Produto"

export default interface Client {
    name: string
    
    favoritos: Produto[]
}
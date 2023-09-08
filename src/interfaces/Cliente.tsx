import Produto from "./Produto"

export default interface Client {
    name: string
    email: string
    senha: string
    favoritos: Produto[]
}
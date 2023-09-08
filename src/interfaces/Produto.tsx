export type ProdutoImagem = string

export default interface Produto {
    id: number
    title: string
    brand: string
    description: string
    price: number
    discountPercentage: number
    finalPrice: number
    thumbnail: string
    favorito: boolean
    images: ProdutoImagem[]
}
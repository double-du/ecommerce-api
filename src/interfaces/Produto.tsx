export default interface Produto {
    id: number
    title: string
    brand: string
    description: string
    price: number
    thumbnail: string
    images: Array<number>
}
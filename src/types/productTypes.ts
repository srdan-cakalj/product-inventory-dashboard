

type ApiProduct = {
    id: number
    title: string
    category: string
    price: number
    stock: number
}


type Product = {
    id: string
    name: string
    category: string
    price: number
    stock: number
}


type Products = Product[]


export type { ApiProduct, Product, Products }
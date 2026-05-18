

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


type NewProduct = {
    name: string
    category: string
    price: string
    stock: string
}


export type { ApiProduct, Product, NewProduct }
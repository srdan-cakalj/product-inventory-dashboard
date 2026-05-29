

type ApiProduct = {
    id: number
    images: string[]
    title: string
    category: string
    price: number
    stock: number
}


type Product = {
    id: string
    image: string 
    name: string
    category: string
    price: number
    stock: number
}


type Products = Product[]


export type { ApiProduct, Product, Products }
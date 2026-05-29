

import { useState, useEffect } from 'react'
import type { ApiProduct, Product } from '../types/productTypes.ts'


type ApiResponse = {
    products: ApiProduct[]
}


const responseError = 'Failed to fetch items.'
const dataError = 'Invalid API response format.'
const loadError = 'Could not load products.'
const unknownError = 'An unknown system error has occurred.'


const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const load = async () => {
            try {

                const response = await fetch('https://dummyjson.com/products')
                if (!response.ok) {
                    throw new Error(responseError)
                }

                const data: ApiResponse = await response.json()
                if (!data.products || !Array.isArray(data.products)) {
                    throw new Error(dataError)
                }


                const transformedProducts: Product[] = data.products.map(product => (
                    {
                        id: String(product.id),
                        image: product.images[0],
                        name: product.title,
                        category: product.category,
                        price: product.price,
                        stock: product.stock
                    }
                ))
  
                setProducts(transformedProducts)


            } catch (err) {

                if (err instanceof Error) {
                    const errors = [responseError, dataError]

                    if (errors.includes(err.message)) {
                        setError(err.message)
                    } else {
                        setError(loadError)
                    }

                } else {
                    setError(unknownError)
                }


            } finally {
                setIsLoading(false)
            }
        }

        load()
    }, [])

    return { setProducts, products, error, isLoading }
}


export { useProducts }
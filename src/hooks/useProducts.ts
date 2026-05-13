

import { useState, useEffect } from 'react'
import type { Product } from '../types/productType.ts'


const responseError = 'Failed to fetch items.'
const dataError = 'Invalid API response format.'
const internetError = 'No Internet Connection.'
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

                const data = await response.json()
                if (!data.products || !Array.isArray(data.products)) {
                    throw new Error(dataError)
                }

                setProducts(data.products)


            } catch (err) {

                if (err instanceof Error) {
                    const errors = [responseError, dataError]

                    if (errors.includes(err.message)) {
                        setError(err.message)
                    } else {
                        setError(internetError)
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

    return { products, error, isLoading }
}


export { useProducts }
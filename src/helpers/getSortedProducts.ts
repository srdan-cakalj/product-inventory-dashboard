

import type { Product } from '../types/productTypes.ts'
import type { SortOptions } from '../types/settingsTypes.ts'


const getSortedProducts = (productsToSort: Product[], sortFilterValue: SortOptions): Product[] => {
    if (sortFilterValue === 'name-a-z') {
        return productsToSort.sort((a: Product, b: Product) => a.name.localeCompare(b.name))
    }

    if (sortFilterValue === 'name-z-a') {
        return productsToSort.sort((a: Product, b: Product) => b.name.localeCompare(a.name))
    }

    if (sortFilterValue === 'price-low-high') {
        return productsToSort.sort((a: Product, b: Product) => a.price - b.price)
    }

    if (sortFilterValue === 'price-high-low') {
        return productsToSort.sort((a: Product, b: Product) => b.price - a.price)
    }

    if (sortFilterValue === 'stock-low-high') {
        return productsToSort.sort((a: Product, b: Product) => a.stock - b.stock)
    }

    if (sortFilterValue === 'stock-high-low') {
        return productsToSort.sort((a: Product, b: Product) => b.stock - a.stock)
    }

    return productsToSort
}


export { getSortedProducts }
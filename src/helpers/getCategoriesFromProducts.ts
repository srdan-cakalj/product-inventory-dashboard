

import type { Product } from '../types/productTypes.ts'
import type { Categories } from '../types/categoriesTypes.ts'
import { formatCategoryLabel } from './formatCategoryLabel.ts'



const getCategoriesFromProducts = (products: Product[]) => {


    const allCategories = products.map(product => product.category)
    const removedDuplicatesCategories = new Set(allCategories)
    const categoryOptions: string[] = [...removedDuplicatesCategories]


    const descriptionsMap: Record<string, string> = {
        beauty: 'Beauty and personal care product',
        fragrances: 'Perfumes and fragrance products',
        furniture: 'Home and office furniture',
        groceries: 'Food and household essentials'
    }


    const categories: Categories = categoryOptions.map(option => {

        return (
            {
                id: crypto.randomUUID(),
                value: option,
                name: formatCategoryLabel(option),
                description: descriptionsMap[option] ?? ''
            }
        )

    })


    return categories
}



export { getCategoriesFromProducts }
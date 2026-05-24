
import { formatCategoryLabel } from './formatCategoryLabel.ts'
import type { Product } from '../types/productTypes.ts'
import type { Categories } from '../types/categoriesTypes.ts'



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


    const categories: Categories = {}


    categoryOptions.forEach(category => {
        const formatedName = formatCategoryLabel(category)

        const oneCategory = {
            id: category,
            name: formatedName,
            description: descriptionsMap[category] ?? ''
        }

        categories[category] = oneCategory
    })


    return categories
}



export { getCategoriesFromProducts }
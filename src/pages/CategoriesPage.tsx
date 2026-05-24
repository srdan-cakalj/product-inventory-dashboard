

import { useState } from 'react'
import { CategoriesTable } from '../components/features/categories/CategoriesTable.tsx'
import type { Categories } from '../types/categoriesTypes.ts'
import type { Products } from '../types/productTypes.ts'
import { PageLayout } from '../components/layout/PageLayout.tsx'


type CategoriesPageProps = {
    title: string
    subtitle: string
    categories: Categories
    products: Products
}


const CategoriesPage = ({ title, subtitle, categories, products }: CategoriesPageProps) => {


    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <PageLayout
            title={title}
            subtitle={subtitle}
            pageHeaderButton={{
                type: 'button',
                label: '+ Add category',
                handleClick: () => setIsModalOpen(true)
            }}
        >

            <CategoriesTable
                categories={categories}
                products={products}
            />

            {isModalOpen && 'open'}

        </PageLayout>
    )
}


export { CategoriesPage }

import styles from './ProductsPage.module.css'
import { PageHeader } from '../components/layout/PageHeader.tsx'
import { CategoriesTable } from '../components/features/categories/CategoriesTable.tsx'
import type { Categories } from '../types/categoriesTypes.ts'
import type { Products } from '../types/productTypes.ts'
 

type ProductsPageProps = {
    title: string
    subtitle: string
    categories: Categories
    products: Products
}


const CategoriesPage = ({ title, subtitle, categories, products }: ProductsPageProps) => {
    return (
        <div className={styles.productsPage}>

            <header className={styles.productsPageHeader}>
                <PageHeader
                    title={title}
                    subtitle={subtitle}
                />
            </header>


            <CategoriesTable
                categories={categories}
                products={products}
            />

        </div>
    )
}


export { CategoriesPage }
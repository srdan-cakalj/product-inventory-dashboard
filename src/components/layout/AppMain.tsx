

import styles from './AppMain.module.css'
import { ProductsPage } from '../../pages/ProductsPage.tsx'
import { CategoriesPage } from '../../pages/CategoriesPage.tsx'
import { ReportsPage } from '../../pages/ReportsPage.tsx'
import { SettingsPage } from '../../pages/SettingsPage.tsx'
import type { Page, PageHeaderContent } from '../../types/pageTypes.ts'
import type { Product } from '../../types/productTypes.ts'


type PageHeaderContentMap = Record<Page, PageHeaderContent>


const pageHeaderContentMap: PageHeaderContentMap = {
    products: {
        title: 'Products',
        subtitle: 'Manage your inventory items'
    },
    categories: {
        title: 'Categories',
        subtitle: 'Organize your product categories'
    },
    reports: {
        title: 'Reports',
        subtitle: 'Overview of your inventory performance'
    },
    settings: {
        title: 'Settings',
        subtitle: 'Configure your inventory preferences'
    }
}


type AppMainProps = {
    products: Product[]
    setProducts: (value: React.SetStateAction<Product[]>) => void
    categoryOptions: string[]
    activePage: Page
}

type PagesMap = Record<Page, React.JSX.Element>


const AppMain = ({ products, setProducts, categoryOptions, activePage }: AppMainProps) => {


    const pagesMap: PagesMap = {
        products: (
            <ProductsPage
                title={pageHeaderContentMap.products.title}
                subtitle={pageHeaderContentMap.products.subtitle}
                products={products}
                setProducts={setProducts}
                categoryOptions={categoryOptions}
            />
        ),
        categories: (
            <CategoriesPage
                title={pageHeaderContentMap.categories.title}
                subtitle={pageHeaderContentMap.categories.subtitle}
            />
        ),
        reports: (
            <ReportsPage
                title={pageHeaderContentMap.reports.title}
                subtitle={pageHeaderContentMap.reports.subtitle}
            />
        ),
        settings: (

            <SettingsPage
                title={pageHeaderContentMap.settings.title}
                subtitle={pageHeaderContentMap.settings.subtitle}
            />
        )
    }


    return (
        <main className={styles.main}>

            {pagesMap[activePage]}

        </main>
    )
}



export { AppMain }
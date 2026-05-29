
import { useState } from 'react'
import styles from './AppMain.module.css'
import { ProductsPage } from '../../pages/ProductsPage.tsx'
import { CategoriesPage } from '../../pages/CategoriesPage.tsx'
import { ReportsPage } from '../../pages/ReportsPage.tsx'
import { SettingsPage } from '../../pages/SettingsPage.tsx'
import { getCategoriesFromProducts } from '../../helpers/getCategoriesFromProducts.ts'
import type { Page, PageHeaderContent } from '../../types/pageTypes.ts'
import type { Product } from '../../types/productTypes.ts'
import type { CurrencyOptions, ThemeOptions, SortOptions } from '../../types/settingsTypes.ts'
import type { SortOptionsMap } from '../../types/settingsTypes.ts'


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
    activePage: Page
}

type PagesMap = Record<Page, React.JSX.Element>


const sortOptionsMap: SortOptionsMap = [
    { value: 'default', label: 'Default' },
    { value: 'name-a-z', label: 'Name A-Z' },
    { value: 'name-z-a', label: 'Name Z-A' },
    { value: 'price-low-high', label: 'Price low-high' },
    { value: 'price-high-low', label: 'Price high-low' },
    { value: 'stock-low-high', label: 'Stock low-high' },
    { value: 'stock-high-low', label: 'Stock high-low' }
]


const AppMain = ({ products, setProducts, activePage }: AppMainProps) => {

    const [categories, setCategories] = useState(getCategoriesFromProducts(products))
    const [lowStockThreshold, setLowStockThreshold] = useState(10)
    const [currency, setCurrency] = useState<CurrencyOptions>('EUR')
    const [theme, setTheme] = useState<ThemeOptions>('light')
    const [defaultSortOption, setDefaultSortOption] = useState<SortOptions>('default')





    const pagesMap: PagesMap = {
        products: (
            <ProductsPage
                title={pageHeaderContentMap.products.title}
                subtitle={pageHeaderContentMap.products.subtitle}
                products={products}
                setProducts={setProducts}
                categories={categories}
                lowStockThreshold={lowStockThreshold}
                currency={currency}
                sortOptionsMap={sortOptionsMap}
                defaultSortOption={defaultSortOption}
            />
        ),
        categories: (
            <CategoriesPage
                title={pageHeaderContentMap.categories.title}
                subtitle={pageHeaderContentMap.categories.subtitle}
                products={products}
                categories={categories}
                setCategories={setCategories}
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
                lowStockThreshold={lowStockThreshold}
                setLowStockThreshold={setLowStockThreshold}
                currency={currency}
                setCurrency={setCurrency}
                theme={theme}
                setTheme={setTheme}
                defaultSortOption={defaultSortOption}
                setDefaultSortOption={setDefaultSortOption}
                sortOptionsMap={sortOptionsMap}
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
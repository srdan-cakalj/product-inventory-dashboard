

import styles from './AppMain.module.css'
import { ProductsPage } from '../../pages/ProductsPage.tsx'
// import { CategoriesPage } from '../../pages/CategoriesPage.tsx'
// import { ReportsPage } from '../../pages/ReportsPage.tsx'
// import { SettingsPage } from '../../pages/SettingsPage.tsx'
import type { Page, PageHeaderContent } from '../../types/pageTypes.ts'



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



const AppMain = () => {
    return (
        <main className={styles.main}>
            <ProductsPage
                title={pageHeaderContentMap.products.title}
                subtitle={pageHeaderContentMap.products.subtitle}
            />

            {/* <CategoriesPage
                title={pageHeaderContentMap.categories.title}
                subtitle={pageHeaderContentMap.categories.subtitle}
            />

            <ReportsPage
                title={pageHeaderContentMap.reports.title}
                subtitle={pageHeaderContentMap.reports.subtitle}
            />

            <SettingsPage
                title={pageHeaderContentMap.settings.title}
                subtitle={pageHeaderContentMap.settings.subtitle}
            /> */}
        </main>
    )
}



export { AppMain }
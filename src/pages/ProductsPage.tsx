

import { PageHeader } from '../components/layout/PageHeader.tsx'


type ProductsPageProps = {
    title: string
    subtitle: string
}


const ProductsPage = ({ title, subtitle }: ProductsPageProps) => {
    return (
        <>
            <PageHeader
                title={title}
                subtitle={subtitle}
            />
        </>
    )
}


export { ProductsPage }


import { PageHeader } from '../components/layout/PageHeader.tsx'


type ProductsPageProps = {
    title: string
    subtitle: string
}


const SettingsPage = ({ title, subtitle }: ProductsPageProps) => {
    return (
        <>
            <PageHeader
                title={title}
                subtitle={subtitle}
            />
        </>
    )
}


export { SettingsPage }


import { PageHeaderTitle } from '../components/layout/PageHeaderTitle.tsx'


type ProductsPageProps = {
    title: string
    subtitle: string
}


const SettingsPage = ({ title, subtitle }: ProductsPageProps) => {
    return (
        <>
            <PageHeaderTitle
                title={title}
                subtitle={subtitle}
            />
        </>
    )
}


export { SettingsPage }
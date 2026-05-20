

import styles from './PageHeader.module.css'


type PageHeaderProps = {
    title: string
    subtitle: string
}


const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export { PageHeader }


import styles from './PageHeaderTitle.module.css'


type PageHeaderTitleProps = {
    title: string
    subtitle: string
}


const PageHeaderTitle = ({ title, subtitle }: PageHeaderTitleProps) => {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export { PageHeaderTitle }
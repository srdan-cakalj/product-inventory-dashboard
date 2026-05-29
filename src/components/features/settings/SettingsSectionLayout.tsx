


import styles from './SettingsSectionLayout.module.css'


type SettingsSectionProps = {
    headerTitle: string
    headerSubtitle: string
    children: React.ReactNode
}


const SettingsSectionLayout = ({ headerTitle, headerSubtitle, children }: SettingsSectionProps) => {
    return (
        <section className={styles.section}>

            <div className={styles.header}>
                <h2>{headerTitle}</h2>
                <p>{headerSubtitle}</p>
            </div>

            <div className={styles.content}>
                {children}
            </div>

        </section>
    )
}


export { SettingsSectionLayout }
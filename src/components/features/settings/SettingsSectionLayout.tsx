


import type { LucideIcon } from 'lucide-react'
import styles from './SettingsSectionLayout.module.css'


type SettingsSectionProps = {
    headerTitle: string
    headerSubtitle: string
    children: React.ReactNode
    IconComponent: LucideIcon
}


const SettingsSectionLayout = ({ headerTitle, headerSubtitle, IconComponent, children }: SettingsSectionProps) => {
    return (
        <section className={styles.section}>

            <div className={styles.header}>
                <div className={styles.icon}>
                    <IconComponent />
                </div>
                <div className={styles.text}>
                    <h2>{headerTitle}</h2>
                    <p>{headerSubtitle}</p>
                </div>
            </div>

            <div className={styles.content}>
                {children}
            </div>

        </section>
    )
}


export { SettingsSectionLayout }
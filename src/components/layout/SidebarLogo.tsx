

import { Boxes } from 'lucide-react'
import styles from './SidebarLogo.module.css'


const SidebarLogo = () => {
    return (
        <div className={styles.logo}>

            <div className={styles.icon}>
                <Boxes
                    size={30}
                    strokeWidth={1.5}
                />
            </div>

            <div className={styles.titleSubtitleContainer}>
                <span className={styles.title}>
                    Inventory
                    <span className={styles.pro}>Pro</span>
                </span>
                <span className={styles.subtitle}>Product Manager</span>
            </div>

        </div>


    )
}

export { SidebarLogo }
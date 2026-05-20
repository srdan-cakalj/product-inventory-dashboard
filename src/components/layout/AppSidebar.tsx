
import { SidebarLogo } from './SidebarLogo.tsx'
import { SidebarNav } from './SidebarNav.tsx'
import styles from './AppSidebar.module.css' 


const AppSidebar = () => {
    return (
        <aside className={styles.aside}>
            <SidebarLogo />
            <SidebarNav />
        </aside>
    )
}


export { AppSidebar } 
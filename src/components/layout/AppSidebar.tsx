
import { SidebarLogo } from './SidebarLogo.tsx'
import { SidebarNav } from './SidebarNav.tsx'
import styles from './AppSidebar.module.css'
import type { Page } from '../../types/pageTypes.ts'


type AppSidebarProps = {
    setActivePage: (value: Page) => void
}


const AppSidebar = ({ setActivePage }: AppSidebarProps) => {
    return (
        <aside className={styles.aside}>
            <SidebarLogo />
            <SidebarNav
                setActivePage={setActivePage}
            />
        </aside>
    )
}


export { AppSidebar } 
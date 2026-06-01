
import { SidebarLogo } from './SidebarLogo.tsx'
import { SidebarNav } from './SidebarNav.tsx'
import styles from './AppSidebar.module.css'
import type { Page } from '../../types/pageTypes.ts'


type AppSidebarProps = {
    activePage: Page
    setActivePage: (value: Page) => void
}


const AppSidebar = ({ activePage, setActivePage }: AppSidebarProps) => {
    return (
        <aside className={styles.aside}>
            <SidebarLogo />
            <SidebarNav
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </aside>
    )
}


export { AppSidebar } 
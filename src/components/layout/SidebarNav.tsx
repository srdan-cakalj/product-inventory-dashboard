

import type { SidebarOption } from '../../types/sidebarTypes.ts'
import { Package, Tag, Settings } from 'lucide-react'
import styles from './SidebarNav.module.css'
import type { Page } from '../../types/pageTypes.ts'


const sidebarOptions: SidebarOption[] = [
    {
        name: 'products',
        title: 'Products',
        icon: Package,
        size: 24,
        strokeWidth: 1.6
    },
    {
        name: 'categories',
        title: 'Categories',
        icon: Tag,
        size: 22,
        strokeWidth: 1.8,
        transform: 'scaleX(-1)'
    },
    {
        name: 'settings',
        title: 'Settings',
        icon: Settings,
        size: 24,
        strokeWidth: 1.6
    },
]


type SidebarNavProps = {
    activePage: Page
    setActivePage: (value: Page) => void
}


const SidebarNav = ({ activePage, setActivePage }: SidebarNavProps) => {

    return (
        <ul className={styles.list}>
            {sidebarOptions.map(option => {

                const Icon = option.icon

                return (
                    <li
                        key={option.name}
                        className={`${styles.listItem} ${option.name === activePage ? styles.activeNavItem : ''}`}
                        onClick={() => setActivePage(option.name)}
                    >

                        <Icon
                            size={option.size}
                            strokeWidth={option.strokeWidth}
                            style={{ transform: option.transform }}
                        />

                        <span>{option.title}</span>

                    </li>
                )
            })}
        </ul>
    )
}


export { SidebarNav }
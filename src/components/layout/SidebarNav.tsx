

import type { SidebarOption } from '../../types/sidebarTypes.ts'
import { Package, Tag, SquareKanban, Settings } from 'lucide-react'
import styles from './SidebarNav.module.css'


const sidebarOptions: SidebarOption[] = [
    {
        title: 'Products',
        icon: Package,
        size: 26,
        strokeWidth: 1.6
    },
    {
        title: 'Categories',
        icon: Tag,
        size: 24,
        strokeWidth: 1.8,
        transform: 'scaleX(-1)'
    },
    {
        title: 'Reports',
        icon: SquareKanban,
        size: 24,
        strokeWidth: 1.8,
        transform: 'rotate(180deg)'
    },
    {
        title: 'Settings',
        icon: Settings,
        size: 26,
        strokeWidth: 1.6
    },
]


const SidebarNav = () => {
    return (
        <ul className={styles.list}>
            {sidebarOptions.map(option => {

                const Icon = option.icon

                return (
                    <li
                        key={option.title}
                        className={styles.listItem}
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
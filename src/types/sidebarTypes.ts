

import type { LucideIcon } from 'lucide-react'
import type { Page } from '../types/pageTypes.ts'


type SidebarOption = {
    name: Page
    title: string
    icon: LucideIcon
    size: number
    strokeWidth: number
    transform?: string
}


export type { SidebarOption }
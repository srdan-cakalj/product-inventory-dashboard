

import { Plus } from 'lucide-react'
import type { ReactNode } from 'react'
import { PageHeaderTitle } from './PageHeaderTitle.tsx'
import styles from './PageLayout.module.css'
import { Button } from '../ui/Button.tsx'


type PageHeaderButton = {
    type: 'submit' | 'reset' | 'button'
    label: string
    handleClick: () => void
}

type PageLayoutProps = {
    title: string
    subtitle: string
    children: ReactNode
    pageHeaderButton?: PageHeaderButton
}


const PageLayout = ({ title, subtitle, children, pageHeaderButton }: PageLayoutProps) => {
    return (
        <div className={styles.page}>

            <header className={styles.pageHeader}>
                <PageHeaderTitle
                    title={title}
                    subtitle={subtitle}
                />

                {pageHeaderButton &&
                    <Button
                        type={pageHeaderButton.type}
                        label={pageHeaderButton.label}
                        variant='primary'
                        handleClick={pageHeaderButton.handleClick}
                        IconComponent={Plus}
                    />
                }
            </header>

            {children}

        </div>
    )
}


export { PageLayout }
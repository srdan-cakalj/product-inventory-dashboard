

import type { ReactNode } from 'react'
import styles from './ModalLayout.module.css'
import { IconButton } from '../ui/IconButton.tsx'
import { X } from 'lucide-react'


type ModalLayoutProps = {
    children: ReactNode
    title: ReactNode
    handleClose: () => void
}


const ModalLayout = ({ children, title, handleClose }: ModalLayoutProps) => {


    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>

                <header className={styles.header}>
                    <h3>{title}</h3>

                    <IconButton
                        Icon={X}
                        handleClick={handleClose}
                    />
                </header>

                <div className={styles.content}>
                    {children}
                </div>

            </div>
        </div>

    )
}


export { ModalLayout }
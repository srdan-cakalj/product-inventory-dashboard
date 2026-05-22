

import type { ReactNode } from 'react'
import styles from './Modal.module.css'


type ModalProps = {
    children: ReactNode
}


const Modal = ({ children }: ModalProps) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}


export { Modal }
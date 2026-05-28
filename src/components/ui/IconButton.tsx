

import styles from './IconButton.module.css'
import type { LucideIcon } from 'lucide-react'


type IconButtonProps = {
    Icon: LucideIcon
    handleClick: () => void
}


const IconButton = ({ Icon, handleClick }: IconButtonProps) => {
    return (
        <button
            className={styles.button}
            type='button'
            onClick={handleClick}>
            <Icon />
        </button>

    )
}


export { IconButton }
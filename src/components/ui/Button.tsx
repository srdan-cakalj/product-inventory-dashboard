

import styles from './Button.module.css'
import type { LucideIcon } from 'lucide-react'


type ButtonProps = {
    label: string
    type: 'submit' | 'reset' | 'button'
    variant?: 'primary' | 'secondary' | 'danger'
    handleClick?: () => void
    IconComponent?: LucideIcon
}


const Button = ({ label, type, variant, handleClick, IconComponent }: ButtonProps) => {

    return (
        <button
            className={`${styles.button} ${variant && styles[variant]}`}
            type={type}
            onClick={handleClick}
        >
            {IconComponent && <IconComponent size={18} />}
            {label}
        </button>
    )
}


export { Button }
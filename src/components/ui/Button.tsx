
import styles from './Button.module.css'


type ButtonProps = {
    label: string
    type: 'submit' | 'reset' | 'button'
    variant?: 'primary' | 'secondary' | 'danger'
    handleClick?: () => void
}


const Button = ({ label, type, variant, handleClick }: ButtonProps) => {

    return (
        <button
            className={`${styles.button} ${variant && styles[variant]}`}
            type={type}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}


export { Button }
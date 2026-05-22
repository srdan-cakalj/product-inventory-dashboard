

type ButtonProps = {
    label: string
    type: 'submit' | 'reset' | 'button'
    handleClick?: () => void
}


const Button = ({ label, type, handleClick }: ButtonProps) => {

    return (
        <button
            type={type}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}


export { Button }
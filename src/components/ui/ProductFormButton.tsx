

type ProductFormButtonProps = {
    label: string
    type: 'submit' | 'reset' | 'button'
    handleClick?: () => void
}


const ProductFormButton = ({ label, type, handleClick }: ProductFormButtonProps) => {

    return (
        <button
            type={type}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}


export { ProductFormButton }
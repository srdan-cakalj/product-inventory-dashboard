

import styles from './FormInputAndSelect.module.css'
import type { FormProduct } from '../../types/formTypes.ts'


type ProductFormInputProps = {
    inputName: 'name' | 'price' | 'stock'
    productFormValues: FormProduct
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
    label: string
}


const ProductFormInput = ({ inputName, productFormValues, setProductFormValues, setValidationMessage, id, label }: ProductFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <>
            <label htmlFor={id}>{label}</label>
            
            <input
                className={styles.input}
                id={id}
                name={inputName}
                type='text'
                value={productFormValues[inputName]}
                onChange={handleChange}
            />
        </>

    )
}


export { ProductFormInput }
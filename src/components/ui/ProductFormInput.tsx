

import styles from './FormInputAndSelect.module.css'
import type { FormProduct } from '../../types/formTypes.ts'


type ProductFormInputProps = {
    inputName: 'name' | 'price' | 'stock'
    productFormValues: FormProduct
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
}


const ProductFormInput = ({ inputName, productFormValues, setProductFormValues, setValidationMessage, id }: ProductFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductFormValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <input
            className={styles.input}
            id={id}
            name={inputName}
            type='text'
            value={productFormValues[inputName]}
            onChange={handleChange}
        />
    )
}


export { ProductFormInput }
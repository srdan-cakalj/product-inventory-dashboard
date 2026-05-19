

import type { NewProduct } from '../../types/productTypes.ts'


type ProductFormInputProps = {
    inputName: 'name' | 'price' | 'stock'
    formValues: NewProduct
    setFormValues: (value: React.SetStateAction<NewProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
}


const ProductFormInput = ({ inputName, formValues, setFormValues, setValidationMessage, id }: ProductFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <input
            id={id}
            name={inputName}
            type='text'
            value={formValues[inputName]}
            onChange={handleChange}
        />
    )
}


export { ProductFormInput }
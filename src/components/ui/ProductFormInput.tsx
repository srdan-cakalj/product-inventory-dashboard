

import type { NewProduct } from '../../types/productTypes.ts'


type ProductFormInputProps = {
    inputName: 'name' | 'price' | 'stock'
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
    setValidationMessage: (value: string | null) => void
}


const ProductFormInput = ({ inputName, newProductValues, setNewProductValues, setValidationMessage }: ProductFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProductValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <input
            name={inputName}
            type='text'
            value={newProductValues[inputName]}
            onChange={handleChange}
        />
    )
}


export { ProductFormInput }


import type { NewProduct } from '../../types/productTypes.ts'
import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'


type ProductFormSelectProps = {
    categoryOptions: string[]
    formValues: NewProduct
    setFormValues: (value: React.SetStateAction<NewProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
}


const ProductFormSelect = ({ categoryOptions, formValues, setFormValues, setValidationMessage, id }: ProductFormSelectProps) => {

    const categoryFormOptions = ['', ...categoryOptions]


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues(prev => ({
            ...prev,
            category: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <select
            id={id}
            value={formValues.category}
            onChange={handleChange}
        >
            {categoryFormOptions.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {formatCategoryLabel(option)}
                </option>
            ))}
        </select>
    )
}


export { ProductFormSelect }
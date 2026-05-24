

import type { FormProduct } from '../../types/productTypes.ts'
import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'
import type { Categories } from '../../types/categoriesTypes.ts'


type ProductFormSelectProps = {
    categories: Categories
    formValues: FormProduct
    setFormValues: (value: React.SetStateAction<FormProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
}


const ProductFormSelect = ({ categories, formValues, setFormValues, setValidationMessage, id }: ProductFormSelectProps) => {

    const categoriesKeys = Object.keys(categories)
    const categoryFormOptions = ['', ...categoriesKeys]


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
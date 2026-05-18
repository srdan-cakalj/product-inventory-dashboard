

import type { NewProduct } from '../../types/productTypes.ts'
import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'


type ProductFormSelectProps = {
    categoryOptions: string[]
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
    setNoValidFormMessage: (value: string | null) => void
}


const ProductFormSelect = ({ categoryOptions, newProductValues, setNewProductValues, setNoValidFormMessage }: ProductFormSelectProps) => {

    const categoryFormOptions = ['', ...categoryOptions]


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewProductValues(prev => ({
            ...prev,
            category: e.target.value
        }))
        setNoValidFormMessage(null)
    }


    return (
        <select
            value={newProductValues.category}
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
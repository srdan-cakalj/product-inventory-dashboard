

import type { NewProduct } from '../../types/productTypes.ts'
import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'


type ProductFormSelectProps = {
    categoryOptions: string[]
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
}


const ProductFormSelect = ({ categoryOptions, newProductValues, setNewProductValues }: ProductFormSelectProps) => {

    const categoryFormOptions = ['', ...categoryOptions]


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewProductValues(prev => ({
            ...prev,
            category: e.target.value
        }))
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
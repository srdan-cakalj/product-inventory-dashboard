

import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'


type ProductFormSelectProps = {
    categoryOptions: string[]
}


const ProductFormSelect = ({ categoryOptions }: ProductFormSelectProps) => {

    const categoryFormOptions = ['', ...categoryOptions]

    return (
        <select>
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
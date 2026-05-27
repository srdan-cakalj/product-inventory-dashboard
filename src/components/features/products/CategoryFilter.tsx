

import { formatCategoryLabel } from '../../../helpers/formatCategoryLabel.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'

type CategoryFilterProps = {
    categories: Categories
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
}


const CategoryFilter = ({ categories, categoryFilterValue, setCategoryFilterValue }: CategoryFilterProps) => {

    const categoryOptions = categories.map(category => category.value)
    const categoryFilterOptions: string[] = ['all', ...categoryOptions]


    return (
        <select
            value={categoryFilterValue}
            onChange={e => setCategoryFilterValue(e.target.value)}
        >
            {categoryFilterOptions.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {formatCategoryLabel(option)}
                </option>
            )
            )}

        </select>
    )
}


export { CategoryFilter }
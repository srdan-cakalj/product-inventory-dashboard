

import { formatCategoryLabel } from "../../helpers/formatCategoryLabel"

type CategoryFilterProps = {
    categoryOptions: string[]
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
}


const CategoryFilter = ({ categoryOptions, categoryFilterValue, setCategoryFilterValue }: CategoryFilterProps) => {

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
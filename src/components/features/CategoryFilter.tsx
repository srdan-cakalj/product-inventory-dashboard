

import { formatOptionLabel } from "../../helpers/formatOptionLabel"

type CategoryFilterProps = {
    options: string[]
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
}


const CategoryFilter = ({ options, categoryFilterValue, setCategoryFilterValue }: CategoryFilterProps) => {

    return (
        <select
            value={categoryFilterValue}
            onChange={e => setCategoryFilterValue(e.target.value)}
        >
            {options.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {formatOptionLabel(option)}
                </option>
            )
            )}

        </select>
    )
}


export { CategoryFilter }
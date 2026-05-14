

type CategoryFilterProps = {
    options: string[]
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
}


const CategoryFilter = ({ options, categoryFilterValue, setCategoryFilterValue }: CategoryFilterProps) => {


    const getOptionLabel = (option: string): string => {
        if (option === 'all') {
            return 'All categories'
        }

        if (option.length === 0) {
            return option
        }

        return option[0].toUpperCase() + option.slice(1)
    }


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
                    {getOptionLabel(option)}
                </option>
            )
            )}
            
        </select>
    )
}


export { CategoryFilter }
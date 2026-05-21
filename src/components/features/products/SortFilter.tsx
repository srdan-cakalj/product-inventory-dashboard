

import type { SortOption } from '../../../types/sortTypes.ts'


type SortFilterProps = {
    sortFilterValue: SortOption
    setSortFilterValue: (value: SortOption) => void
}


const sortOptions: SortOption[] = [
    'default',
    'name-a-z',
    'name-z-a',
    'price-low-high',
    'price-high-low',
    'stock-low-high',
    'stock-high-low'
]

const sortOptionsText: Record<SortOption, string> = {
    'default': 'Default',
    'name-a-z': 'Name A-Z',
    'name-z-a': 'Name Z-A',
    'price-low-high': 'Price low-high',
    'price-high-low': 'Price high-low',
    'stock-low-high': 'Stock low-high',
    'stock-high-low': 'Stock high-low'
}


const SortFilter = ({ sortFilterValue, setSortFilterValue }: SortFilterProps) => {
    return (
        <select
            onChange={e => setSortFilterValue(e.target.value as SortOption)}
            value={sortFilterValue}
        >
            {sortOptions.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {sortOptionsText[option]}
                </option>
            ))}
        </select>
    )
}


export { SortFilter }
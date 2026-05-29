

import { useEffect } from 'react'


import type { SortOptionsMap, SortOptions } from '../../../types/settingsTypes.ts'


type SortFilterProps = {
    sortFilterValue: SortOptions
    setSortFilterValue: (value: SortOptions) => void
    sortOptionsMap: SortOptionsMap
    defaultSortOption: SortOptions
}


const SortFilter = ({
    sortFilterValue,
    setSortFilterValue,
    sortOptionsMap,
    defaultSortOption }: SortFilterProps) => {


    useEffect(() => {
        setSortFilterValue(defaultSortOption)
    }, [defaultSortOption])


    return (
        <select
            onChange={e => setSortFilterValue(e.target.value as SortOptions)}
            value={sortFilterValue}
        >
            {sortOptionsMap.map(sortOption => (
                <option
                    key={sortOption.value}
                    value={sortOption.value}
                >
                    {sortOption.label}
                </option>
            ))}
        </select>
    )
}


export { SortFilter }
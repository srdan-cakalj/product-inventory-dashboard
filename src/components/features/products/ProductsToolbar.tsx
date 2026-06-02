

import { RotateCcw } from 'lucide-react'
import type { StockOption } from '../../../types/stockTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { SortOptionsMap, SortOptions } from '../../../types/settingsTypes.ts'
import { SearchInput } from './SearchInput.tsx'
import { CategoryFilter } from './CategoryFilter.tsx'
import { StockFilter } from './StockFilter.tsx'
import { SortFilter } from './SortFilter.tsx'
import { Button } from '../../ui/Button.tsx'
import styles from './ProductsToolbar.module.css'


type ProductsToolbarProps = {
    searchInputValue: string
    setSearchInputValue: (value: string) => void
    categories: Categories
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
    stockFilterValue: StockOption
    setStockFilterValue: (value: StockOption) => void
    sortFilterValue: SortOptions
    setSortFilterValue: (value: SortOptions) => void
    sortOptionsMap: SortOptionsMap
    defaultSortOption: SortOptions
}


const ProductsToolbar = ({
    searchInputValue,
    setSearchInputValue,
    categories,
    categoryFilterValue,
    setCategoryFilterValue,
    stockFilterValue,
    setStockFilterValue,
    sortFilterValue,
    setSortFilterValue,
    sortOptionsMap,
    defaultSortOption }: ProductsToolbarProps) => {

    
    const handleReset = () => {
        setSearchInputValue('')
        setCategoryFilterValue('all')
        setStockFilterValue('all')
        setSortFilterValue(defaultSortOption)

    }


    return (
        <div className={styles.toolbar}>

            <SearchInput
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
            />

            <CategoryFilter
                categories={categories}
                categoryFilterValue={categoryFilterValue}
                setCategoryFilterValue={setCategoryFilterValue}
            />

            <StockFilter
                stockFilterValue={stockFilterValue}
                setStockFilterValue={setStockFilterValue}
            />

            <SortFilter
                sortFilterValue={sortFilterValue}
                setSortFilterValue={setSortFilterValue}
                sortOptionsMap={sortOptionsMap}
                defaultSortOption={defaultSortOption}
            />

            <Button
                label='Reset filters'
                type='button'
                variant='secondary'
                handleClick={handleReset}
                IconComponent={RotateCcw}
            />

        </div>
    )
}


export { ProductsToolbar }
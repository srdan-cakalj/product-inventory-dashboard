

import type { StockOption } from '../../../types/stockTypes.ts'
import type { SortOption } from '../../../types/sortTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import { SearchInput } from './SearchInput.tsx'
import { CategoryFilter } from './CategoryFilter.tsx'
import { StockFilter } from './StockFilter.tsx'
import { SortFilter } from './SortFilter.tsx'
import styles from './ProductsToolbar.module.css'


type ProductsToolbarProps = {
    searchInputValue: string
    setSearchInputValue: (value: string) => void
    categories: Categories
    categoryFilterValue: string
    setCategoryFilterValue: (value: string) => void
    stockFilterValue: StockOption
    setStockFilterValue: (value: StockOption) => void
    sortFilterValue: SortOption
    setSortFilterValue: (value: SortOption) => void
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
    setSortFilterValue
}: ProductsToolbarProps) => {

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
            />

        </div>
    )
}


export { ProductsToolbar }

import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'
import { SearchInput } from './components/features/SearchInput.tsx'
import { CategoryFilter } from './components/features/CategoryFilter.tsx'
import { StockFilter } from './components/features/StockFilter.tsx'
import type { StockOption, StockInfo } from './types/stockTypes.ts'


const App = () => {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('all')
  const [stockFilterValue, setStockFilterValue] = useState<StockOption>('all')

  const { products, error, isLoading } = useProducts()


  const allCategories = products.map(product => product.category)
  const removedDuplicatesCategories = new Set(allCategories)
  const categoryOptions = ['all', ...removedDuplicatesCategories]


  const getStock = (stock: number): StockInfo => {
    if (stock === 0) {
      return { option: 'out-of-stock', status: 'Out of stock' }
    }

    if (stock > 0 && stock <= 5) {
      return { option: 'low-stock', status: 'Low stock' }
    }

    return { option: 'in-stock', status: 'In stock' }
  }


  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')
    .filter(product => getStock(product.stock).option === stockFilterValue || stockFilterValue === 'all')


  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <>
      <SearchInput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />

      <CategoryFilter
        options={categoryOptions}
        categoryFilterValue={categoryFilterValue}
        setCategoryFilterValue={setCategoryFilterValue}
      />

      <StockFilter
        stockFilterValue={stockFilterValue}
        setStockFilterValue={setStockFilterValue}
      />

      {filteredProducts.length === 0
        ? <p>No results.</p>
        : <ProductsTable
          products={filteredProducts}
          getStock={getStock}
        />
      }

      {/* <pre> {JSON.stringify(products, null, 2)}</pre> */}
    </>

  )
}

export default App



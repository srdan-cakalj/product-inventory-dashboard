
import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'
import { SearchInput } from './components/features/SearchInput.tsx'
import { CategoryFilter } from './components/features/CategoryFilter.tsx'
import { StockFilter } from './components/features/StockFilter.tsx'
import { SortFilter } from './components/features/SortFilter.tsx'
import type { StockOption, StockInfo } from './types/stockTypes.ts'
import type { SortOption } from './types/sortTypes.ts'
import type { Product } from './types/productTypes.ts'



const App = () => {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('all')
  const [stockFilterValue, setStockFilterValue] = useState<StockOption>('all')
  const [sortFilterValue, setSortFilterValue] = useState<SortOption>('default')


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


  const getSortedProducts = (productsToSort : Product[], sortFilterValue: SortOption): Product[] => {
    if (sortFilterValue === 'name-a-z') {
      return productsToSort .sort((a: Product, b: Product) => a.name.localeCompare(b.name))
    }

    if (sortFilterValue === 'name-z-a') {
      return productsToSort .sort((a: Product, b: Product) => b.name.localeCompare(a.name))
    }

    if (sortFilterValue === 'price-low-high') {
      return productsToSort .sort((a: Product, b: Product) => a.price - b.price)
    }

    if (sortFilterValue === 'price-high-low') {
      return productsToSort .sort((a: Product, b: Product) => b.price - a.price)
    }

    if (sortFilterValue === 'stock-low-high') {
      return productsToSort .sort((a: Product, b: Product) => a.stock - b.stock)
    }

    if (sortFilterValue === 'stock-high-low') {
      return productsToSort .sort((a: Product, b: Product) => b.stock - a.stock)
    }

    return productsToSort 
  }


  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')
    .filter(product => getStock(product.stock).option === stockFilterValue || stockFilterValue === 'all')

  const productsToSort  = [...filteredProducts]
  const sortedProducts = getSortedProducts(productsToSort , sortFilterValue)



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

      <SortFilter
        sortFilterValue={sortFilterValue}
        setSortFilterValue={setSortFilterValue}
      />

      {sortedProducts.length === 0
        ? <p>No results.</p>
        : <ProductsTable
          products={sortedProducts}
          getStock={getStock}
        />
      }

      {/* <pre> {JSON.stringify(products, null, 2)}</pre> */}
    </>

  )
}

export default App



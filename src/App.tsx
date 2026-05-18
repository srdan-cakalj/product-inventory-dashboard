
import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'
import { SearchInput } from './components/features/SearchInput.tsx'
import { CategoryFilter } from './components/features/CategoryFilter.tsx'
import { StockFilter } from './components/features/StockFilter.tsx'
import { SortFilter } from './components/features/SortFilter.tsx'
import { ProductForm } from './components/features/ProductForm.tsx'
import { getStockInfo } from './helpers/getStockInfo.ts'
import { getSortedProducts } from './helpers/getSortedProducts.ts'
import type { StockOption } from './types/stockTypes.ts'
import type { SortOption } from './types/sortTypes.ts'
import type { NewProduct } from './types/productTypes.ts'



const newProductValuesInit: NewProduct = {
  name: '',
  category: '',
  price: '',
  stock: ''
}



const App = () => {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('all')
  const [stockFilterValue, setStockFilterValue] = useState<StockOption>('all')
  const [sortFilterValue, setSortFilterValue] = useState<SortOption>('default')
  const [newProductValues, setNewProductValues] = useState<NewProduct>(newProductValuesInit)


  const { setProducts, products, error, isLoading } = useProducts()


  const allCategories = products.map(product => product.category)
  const removedDuplicatesCategories = new Set(allCategories)
  const categoryOptions = [...removedDuplicatesCategories]



  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')
    .filter(product => getStockInfo(product.stock).option === stockFilterValue || stockFilterValue === 'all')

  const productsToSort = [...filteredProducts]
  const sortedProducts = getSortedProducts(productsToSort, sortFilterValue)



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

      <hr />

      <CategoryFilter
        categoryOptions={categoryOptions}
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

      <hr />

      <ProductForm
        categoryOptions={categoryOptions}
        newProductValues={newProductValues}
        setNewProductValues={setNewProductValues}
        newProductValuesInit={newProductValuesInit}
        setProducts={setProducts}
      />

      <hr />

      {sortedProducts.length === 0
        ? <p>No results.</p>
        : <ProductsTable
          products={sortedProducts}
          getStock={getStockInfo}
        />
      }

    </>

  )
}

export default App



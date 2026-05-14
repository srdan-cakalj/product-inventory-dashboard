
import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'
import { SearchInput } from './components/features/SearchInput.tsx'
import { CategoryFilter } from './components/features/CategoryFilter.tsx'


const App = () => {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('all')

  const { products, error, isLoading } = useProducts()



  const allCategories = products.map(product => product.category)
  const removedDuplicatesCategories = new Set(allCategories)
  const categoryOptions = ['all', ...removedDuplicatesCategories]



  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')


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

      {filteredProducts.length === 0
        ? <p>No results.</p>
        : <ProductsTable
          products={filteredProducts}
        />
      }

      {/* <pre> {JSON.stringify(products, null, 2)}</pre> */}
    </>

  )
}

export default App



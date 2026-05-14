
import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'
import { SearchInput } from './components/features/SearchInput.tsx'


const App = () => {

  const [searchInputValue, setSearchInputValue] = useState('')

  const { products, error, isLoading } = useProducts()

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))


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



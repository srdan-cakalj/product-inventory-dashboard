
import { useProducts } from './hooks/useProducts.ts'
import { ProductsTable } from './components/features/ProductsTable.tsx'


const App = () => {


  const { products, error, isLoading } = useProducts()



  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <>
      <ProductsTable products={products} />

      {/* <pre> {JSON.stringify(products, null, 2)}</pre> */}
    </>

  )
}

export default App





import { useProducts } from './hooks/useProducts.ts'
import { AppSidebar } from './components/layout/AppSidebar.tsx'
import { AppMain } from './components/layout/AppMain.tsx'


const App = () => {

  const { setProducts, products, error, isLoading } = useProducts()


  const allCategories = products.map(product => product.category)
  const removedDuplicatesCategories = new Set(allCategories)
  const categoryOptions = [...removedDuplicatesCategories]


  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <div className='app'>

      <AppSidebar />

      <AppMain
        products={products}
        setProducts={setProducts}
        categoryOptions={categoryOptions}
      />

    </div>
  )
}


export default App



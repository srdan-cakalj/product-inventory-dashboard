

import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { AppSidebar } from './components/layout/AppSidebar.tsx'
import { AppMain } from './components/layout/AppMain.tsx'
import type { Page } from './types/pageTypes.ts'


const App = () => {

  const [activePage, setActivePage] = useState<Page>('products')


  const { setProducts, products, error, isLoading } = useProducts()


  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <div className='app'>

      <AppSidebar
        setActivePage={setActivePage}
      />

      <AppMain
        products={products}
        setProducts={setProducts}
        activePage={activePage}
      />

    </div>
  )
}


export default App



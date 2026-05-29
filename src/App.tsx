

import { useState } from 'react'
import { useProducts } from './hooks/useProducts.ts'
import { AppSidebar } from './components/layout/AppSidebar.tsx'
import { AppMain } from './components/layout/AppMain.tsx'
import type { Page } from './types/pageTypes.ts'
import type { ThemeOptions } from './types/settingsTypes.ts'


const App = () => {

  const [activePage, setActivePage] = useState<Page>('products')
  const [theme, setTheme] = useState<ThemeOptions>('light')

  const { setProducts, products, error, isLoading } = useProducts()


  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <div className={`app ${theme}`}>

      <AppSidebar
        setActivePage={setActivePage}
      />

      <AppMain
        products={products}
        setProducts={setProducts}
        activePage={activePage}
        theme={theme}
        setTheme={setTheme}
      />

    </div>
  )
}


export default App



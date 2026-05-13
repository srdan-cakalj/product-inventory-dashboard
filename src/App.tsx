
import { useProducts } from './hooks/useProducts.ts'


const App = () => {


  const { products, error, isLoading } = useProducts()



  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


  return (
    <ul>
      {products.map(product => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}

export default App





import type { Product } from '../../types/productTypes.ts'
import type { StockInfo } from '../../types/stockTypes.ts'


type ProductsTableProps = {
    products: Product[]
    getStock: (value: number) => StockInfo
}


const ProductsTable = ({ products, getStock }: ProductsTableProps) => {



    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {products.map(product => {

                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price} €</td>
                            <td>{product.stock}</td>
                            <td>{getStock(product.stock).status}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    )
}

export { ProductsTable }
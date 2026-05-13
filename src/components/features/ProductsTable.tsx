

import type { Product } from '../../types/productTypes.ts'

type ProductsTableProps = {
    products: Product[]
}


const ProductsTable = ({ products }: ProductsTableProps) => {

    const getStockStatus = (stock: number): string => {
        if (stock === 0) {
            return 'Out of stock'
        }

        if (stock > 0 && stock <= 5) {
            return 'Low stock'
        }

        return 'In stock'

    }


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
                            <td>{getStockStatus(product.stock)}</td>
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
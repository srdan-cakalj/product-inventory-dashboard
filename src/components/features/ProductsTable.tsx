

import type { Product, FormProduct } from '../../types/productTypes.ts'
import type { StockInfo } from '../../types/stockTypes.ts'


type ProductsTableProps = {
    products: Product[]
    getStock: (value: number) => StockInfo
    setFormValues: (value: FormProduct) => void
    setEditingProductId: (value: string | null) => void
    setValidationMessage: (value: string | null) => void
}


const ProductsTable = ({
    products,
    getStock,
    setFormValues,
    setEditingProductId,
    setValidationMessage
}: ProductsTableProps) => {


    const handleEdit = (product: Product) => {

        setFormValues({
            name: product.name,
            category: product.category,
            price: String(product.price),
            stock: String(product.stock)
        })

        setEditingProductId(product.id)
        setValidationMessage(null)
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
                            <td>{getStock(product.stock).status}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
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
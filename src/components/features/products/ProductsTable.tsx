

import styles from './ProductsTable.module.css'
import type { Product } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'
import { getStockInfo } from '../../../helpers/getStockInfo.ts'
import { formatCategoryLabel } from '../../../helpers/formatCategoryLabel.ts'



type ProductsTableProps = {
    products: Product[]
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyProductFormValues: FormProduct
    setValidationMessage: (value: string | null) => void
    setActiveProductModal: (value: ActiveModal) => void
}



const ProductsTable = ({
    products,
    setProductFormValues,
    setValidationMessage,
    setActiveProductModal
}: ProductsTableProps) => {


    const handleEdit = (editedProduct: Product) => {

        setProductFormValues({
            name: editedProduct.name,
            category: editedProduct.category,
            price: String(editedProduct.price),
            stock: String(editedProduct.stock)
        })

        setValidationMessage(null)
        setActiveProductModal({ mode: 'edit', id: editedProduct.id })
    }



    const handleDelete = (deletedProduct: Product) => {
        setActiveProductModal({ mode: 'delete', id: deletedProduct.id })
    }



    return (
        <table className={styles.table}>
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

                    const formatedCategory = formatCategoryLabel(product.category)

                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{formatedCategory}</td>
                            <td>{product.price} €</td>
                            <td>{product.stock}</td>
                            <td>{getStockInfo(product.stock).status}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product)}>Delete</button>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    )
}



export { ProductsTable }
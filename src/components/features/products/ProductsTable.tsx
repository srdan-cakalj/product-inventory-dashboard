

import styles from './ProductsTable.module.css'
import type { Product } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import { getStockInfo } from '../../../helpers/getStockInfo.ts'
import { formatCategoryLabel } from '../../../helpers/formatCategoryLabel.ts'



type ProductsTableProps = {
    products: Product[]
    setProducts: (value: React.SetStateAction<Product[]>) => void
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyProductFormValues: FormProduct
    editingProductId: string | null
    setEditingProductId: (value: string | null) => void
    setValidationMessage: (value: string | null) => void
    setIsModalOpen: (value: boolean) => void
}



const ProductsTable = ({
    products,
    setProducts,
    setProductFormValues,
    emptyProductFormValues,
    editingProductId,
    setEditingProductId,
    setValidationMessage,
    setIsModalOpen
}: ProductsTableProps) => {


    const handleEdit = (product: Product) => {

        setProductFormValues({
            name: product.name,
            category: product.category,
            price: String(product.price),
            stock: String(product.stock)
        })

        setEditingProductId(product.id)
        setValidationMessage(null)
        setIsModalOpen(true)
    }



    const handleDelete = (deletedProductId: string) => {

        const shouldDelete = confirm('Are you sure you want to delete this product?')

        if (!shouldDelete) {
            return
        }

        setProducts(prev => (
            prev.filter(product => (
                product.id !== deletedProductId
            ))
        ))

        if (deletedProductId === editingProductId) {
            setEditingProductId(null)
            setValidationMessage(null)
            setProductFormValues(emptyProductFormValues)
        }
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
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    )
}



export { ProductsTable }
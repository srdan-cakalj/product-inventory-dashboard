

import styles from './ProductsTable.module.css'
import type { Product } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'
import type { CurrencyOptions } from '../../../types/settingsTypes.ts'
import { getStockInfo } from '../../../helpers/getStockInfo.ts'
import { formatCategoryLabel } from '../../../helpers/formatCategoryLabel.ts'



type ProductsTableProps = {
    products: Product[]
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyProductFormValues: FormProduct
    setValidationMessage: (value: string | null) => void
    setActiveProductModal: (value: ActiveModal) => void
    lowStockThreshold: number
    currency: CurrencyOptions
    showProductImages: boolean
}


const currencySymbols: Record<CurrencyOptions, string> = {
    EUR: '€',
    USD: '$',
    GBP: '£'
}


const ProductsTable = ({
    products,
    setProductFormValues,
    setValidationMessage,
    setActiveProductModal,
    lowStockThreshold,
    currency,
    showProductImages }: ProductsTableProps) => {


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
                    {showProductImages &&
                        <th>Image</th>
                    }
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
                            {showProductImages &&
                                <td>image</td>
                            }
                            <td className={styles.nameCell}>{product.name}</td>
                            <td>{formatedCategory}</td>
                            <td>{product.price} {currencySymbols[currency]}</td>
                            <td>{product.stock}</td>
                            <td>
                                <span className={`${styles.statusBadge} ${styles[getStockInfo(product.stock, lowStockThreshold).option]}`}>
                                    {getStockInfo(product.stock, lowStockThreshold).status}
                                </span>
                            </td>
                            <td>
                                <div className={styles.actions}>
                                    <button
                                        className={styles.editButton}
                                        onClick={() => handleEdit(product)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => handleDelete(product)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}



export { ProductsTable }
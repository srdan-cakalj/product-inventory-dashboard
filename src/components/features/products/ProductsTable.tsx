

import { Package } from 'lucide-react'
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
    setValidationMessage: (value: string | null) => void
    setActiveProductModal: (value: ActiveModal) => void
    lowStockThreshold: number
    currency: CurrencyOptions
    showProductImages: boolean
    addedOrEditedProductId: string | null
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
    showProductImages,
    addedOrEditedProductId }: ProductsTableProps) => {


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
                        <th className={styles.positionCenter}>Image</th>
                    }
                    <th className={styles.positionLeft}>Name</th>
                    <th className={styles.positionLeft}>Category</th>
                    <th className={styles.positionCenter}>Price</th>
                    <th className={styles.positionCenter}>Stock</th>
                    <th className={styles.positionCenter}>Status</th>
                    <th className={styles.positionCenter}>Actions</th>
                </tr>
            </thead>

            <tbody>
                {products.map(product => {

                    const formatedCategory = formatCategoryLabel(product.category)

                    return (
                        <tr key={product.id} className={addedOrEditedProductId === product.id ? styles.highlightedRow : ''}>

                            {showProductImages &&
                                <td className={`${styles.image} ${styles.positionCenter}`} >
                                    {product.image
                                        ? (
                                            <img
                                                src={product.image}
                                                className={styles.productImage}
                                                alt={product.name}
                                            />
                                        )
                                        : (
                                            <span className={styles.placeholderIcon}>
                                                <Package />
                                            </span>
                                        )

                                    }


                                </td>
                            }

                            <td className={`${styles.name} ${styles.positionLeft}`}>
                                {product.name}
                            </td>

                            <td className={styles.positionLeft}>
                                {formatedCategory}
                            </td>

                            <td className={styles.positionCenter}>
                                {product.price} {currencySymbols[currency]}
                            </td>

                            <td className={styles.positionCenter}>
                                {product.stock}
                            </td>

                            <td className={styles.positionCenter}>
                                <span className={`${styles.statusBadge} ${styles[getStockInfo(product.stock, lowStockThreshold).option]}`}>
                                    {getStockInfo(product.stock, lowStockThreshold).status}
                                </span>
                            </td>

                            <td className={styles.positionCenter}>
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




import styles from './CategoriesTable.module.css'
import type { Categories, Category } from '../../../types/categoriesTypes.ts'
import type { Products } from '../../../types/productTypes.ts'
import type { FormCategory } from '../../../types/formTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'


type CategoriesTableProps = {
    categories: Categories
    products: Products
    setCategoryFormValues: (value: FormCategory) => void
    setValidationMessage: (value: string | null) => void
    setActiveCategoryModal: (value: ActiveModal) => void
    addedOrEditedCategoryId: string | null
}


const CategoriesTable = ({
    categories,
    products,
    setCategoryFormValues,
    setValidationMessage,
    setActiveCategoryModal,
    addedOrEditedCategoryId }: CategoriesTableProps) => {


    const handleEdit = (category: Category) => {

        setCategoryFormValues({
            name: category.name,
            description: category.description
        })

        setActiveCategoryModal({ mode: 'edit', id: category.id })
        setValidationMessage(null)
    }


    const handleDelete = (category: Category) => {
        setActiveCategoryModal({ mode: 'delete', id: category.id })
    }


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Products</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {categories.map(category => {

                    const numberOfProducts = products.filter(product => product.category === category.value).length

    
                    return (
                        <tr key={category.id} className={addedOrEditedCategoryId === category.id ? styles.highlightedRow : ''}>
                            <td className={styles.nameCell}>{category.name}</td>
                            <td className={styles.descriptionCell}>{category.description}</td>
                            <td>
                                <span className={styles.countBadge}>
                                    {numberOfProducts}
                                </span>
                            </td>
                            <td>
                                <div className={styles.actions}>
                                    <button
                                        className={styles.editButton}
                                        onClick={() => handleEdit(category)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => handleDelete(category)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}


export { CategoriesTable }
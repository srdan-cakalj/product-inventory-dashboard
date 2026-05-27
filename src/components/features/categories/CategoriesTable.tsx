



import styles from '../products/ProductsTable.module.css'
import type { Categories, Category } from '../../../types/categoriesTypes.ts'
import type { Products } from '../../../types/productTypes.ts'
import type { FormCategory } from '../../../types/formTypes.ts'


type CategoriesTableProps = {
    categories: Categories
    products: Products
    setEditingCategoryId: (value: string | null) => void
    setCategoryFormValues: (value: FormCategory) => void
    setValidationMessage: (value: string | null) => void
    setIsModalOpen: (value: boolean) => void
}


const CategoriesTable = ({
    categories,
    products,
    setEditingCategoryId,
    setCategoryFormValues,
    setValidationMessage,
    setIsModalOpen,
}: CategoriesTableProps) => {



    const handleEdit = (category: Category) => {

        setCategoryFormValues({
            name: category.name,
            description: category.description
        })

        setEditingCategoryId(category.id)
        setValidationMessage(null)
        setIsModalOpen(true)
    }


    const handleDelete = () => {

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
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>{numberOfProducts}</td>
                            <td>
                                <button onClick={() => handleEdit(category)}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}


export { CategoriesTable }
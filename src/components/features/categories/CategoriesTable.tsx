



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


    const categoriesKeys = Object.keys(categories)



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
                {categoriesKeys.map(key => {

                    const numberOfProducts = products.filter(product => product.category === key).length

                    return (
                        <tr key={categories[key].id}>
                            <td>{categories[key].name}</td>
                            <td>{categories[key].description}</td>
                            <td>{numberOfProducts}</td>
                            <td>
                                <button onClick={() => handleEdit(categories[key])}>Edit</button>
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




import styles from '../products/ProductsTable.module.css'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { Products } from '../../../types/productTypes.ts'


type CategoriesTableProps = {
    categories: Categories
    products: Products
}


const CategoriesTable = ({ categories, products }: CategoriesTableProps) => {


    const categoriesKeys = Object.keys(categories)


    const handleEdit = () => {

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
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export { CategoriesTable }

import styles from './FormInputAndSelect.module.css'
import type { FormProduct } from '../../types/formTypes.ts'
import { formatCategoryLabel } from '../../helpers/formatCategoryLabel.ts'
import type { Categories } from '../../types/categoriesTypes.ts'


type FormSelectProps = {
    categories: Categories
    productFormValues: FormProduct
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    setValidationMessage: (value: string | null) => void
    id: string
    label: string
}


const FormSelect = ({ categories, productFormValues, setProductFormValues, setValidationMessage, id, label }: FormSelectProps) => {

    const categoryOptions = categories.map(category => category.value)
    const categoryFormOptions = ['', ...categoryOptions]


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductFormValues(prev => ({
            ...prev,
            category: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <>
            <label htmlFor={id}>{label}</label>

            <select
                className={styles.select}
                id={id}
                value={productFormValues.category}
                onChange={handleChange}
            >
                {categoryFormOptions.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {formatCategoryLabel(option)}
                    </option>
                ))}
            </select>
        </>
    )
}


export { FormSelect }
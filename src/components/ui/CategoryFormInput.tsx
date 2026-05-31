


import styles from './FormInputAndSelect.module.css'
import type { FormCategory } from '../../types/formTypes.ts'


type CategoryFormInputProps = {
    inputName: 'name' | 'description'
    categoryFormValues: FormCategory
    setCategoryFormValues: (value: React.SetStateAction<FormCategory>) => void
    setValidationMessage: (value: string | null) => void
    id: string
    label: string
}


const CategoryFormInput = ({ inputName, categoryFormValues, setCategoryFormValues, setValidationMessage, id, label }: CategoryFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryFormValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <>
            <label htmlFor={id}>{label}</label>

            <input
                className={styles.input}
                id={id}
                name={inputName}
                type='text'
                value={categoryFormValues[inputName]}
                onChange={handleChange}
            />
        </>

    )
}


export { CategoryFormInput }
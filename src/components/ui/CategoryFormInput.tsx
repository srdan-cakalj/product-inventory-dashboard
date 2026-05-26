



import type { FormCategory } from '../../types/formTypes.ts'


type CategoryFormInputProps = {
    inputName: 'name' | 'description'
    categoryFormValues: FormCategory
    setCategoryFormValues: (value: React.SetStateAction<FormCategory>) => void
    setValidationMessage: (value: string | null) => void
    id: string
}


const CategoryFormInput = ({ inputName, categoryFormValues, setCategoryFormValues, setValidationMessage, id }: CategoryFormInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryFormValues(prev => ({
            ...prev,
            [inputName]: e.target.value
        }))
        setValidationMessage(null)
    }


    return (
        <input
            id={id}
            name={inputName}
            type='text'
            value={categoryFormValues[inputName]}
            onChange={handleChange}
        />
    )
}


export { CategoryFormInput }
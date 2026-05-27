

import { CategoryFormInput } from '../../ui/CategoryFormInput.tsx'
import { validateCategoryForm } from '../../../helpers/validateCategoryForm.ts'
import { formatCategoryValue } from '../../../helpers/formatCategoryValue.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import type { FormCategory } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'


type CategoryFormProps = {
    categoryFormValues: FormCategory
    setCategoryFormValues: (value: React.SetStateAction<FormCategory>) => void
    emptyCategoryFormValues: FormCategory
    editingCategoryId: string | null
    setEditingCategoryId: (value: string | null) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    setIsModalOpen: (value: boolean) => void
    setCategories: (value: React.SetStateAction<Categories>) => void
}


const CategoryForm = ({
    setCategories,
    categoryFormValues,
    setCategoryFormValues,
    emptyCategoryFormValues,
    editingCategoryId,
    setEditingCategoryId,
    validationMessage,
    setValidationMessage,
    setIsModalOpen
}: CategoryFormProps) => {


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const validationResult = validateCategoryForm(categoryFormValues)
        setValidationMessage(validationResult.message)
        if (validationResult.message) {
            return
        }


        if (validationResult.categoryData) {

            const data = validationResult.categoryData

            setCategories(prev => (
                editingCategoryId === null
                    ? [
                        ...prev,
                        {
                            id: crypto.randomUUID(),
                            value: formatCategoryValue(data.name),
                            name: data.name,
                            description: data.description,
                        }
                    ]
                    : prev.map(category => (
                        category.id === editingCategoryId
                            ? {
                                ...category,
                                value: formatCategoryValue(data.name),
                                name: data.name,
                                description: data.description
                            }
                            : category
                    ))
            ))
        }

        setCategoryFormValues(emptyCategoryFormValues)
        setEditingCategoryId(null)
        setIsModalOpen(false)
    }





    return (
        <>

            <ModalFormLayout
                handleSubmit={handleSubmit}
                editingId={editingCategoryId}
                validationMessage={validationMessage}
                setValidationMessage={setValidationMessage}
                setCategoryFormValues={setCategoryFormValues}
                emptyCategoryFormValues={emptyCategoryFormValues}
                setEditingId={setEditingCategoryId}
                setIsModalOpen={setIsModalOpen}
            >

                <label htmlFor='name'>Name</label>
                <CategoryFormInput
                    inputName='name'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                />

                <br />

                <label htmlFor='description'>Description</label>
                <CategoryFormInput
                    inputName='description'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='description'
                />

                <br />

            </ModalFormLayout>

        </>

    )
}


export { CategoryForm }
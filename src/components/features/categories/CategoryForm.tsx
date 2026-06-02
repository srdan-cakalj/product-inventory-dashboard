

import { CategoryFormInput } from '../../ui/CategoryFormInput.tsx'
import { validateCategoryForm } from '../../../helpers/validateCategoryForm.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import { formatCategoryValue } from '../../../helpers/formatCategoryValue.ts'
import type { FormCategory } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'


type CategoryFormProps = {
    categoryFormValues: FormCategory
    setCategoryFormValues: (value: React.SetStateAction<FormCategory>) => void
    emptyCategoryFormValues: FormCategory
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    categories: Categories
    setCategories: (value: React.SetStateAction<Categories>) => void
    activeCategoryModal: ActiveModal
    setActiveCategoryModal: (value: ActiveModal) => void
    setAddedOrEditedCategoryId: (value: string | null) => void
}


const CategoryForm = ({
    categories,
    setCategories,
    categoryFormValues,
    setCategoryFormValues,
    emptyCategoryFormValues,
    validationMessage,
    setValidationMessage,
    activeCategoryModal,
    setActiveCategoryModal,
    setAddedOrEditedCategoryId }: CategoryFormProps) => {


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const validationResult = validateCategoryForm(categoryFormValues, categories, activeCategoryModal)
        setValidationMessage(validationResult.message)

        if (validationResult.message) {
            return
        }


        if (validationResult.categoryData) {

            const data = validationResult.categoryData

            const addedCategoryId = crypto.randomUUID()
            const editedCategoryId = activeCategoryModal?.id

            if (activeCategoryModal?.mode === 'add') {
                setAddedOrEditedCategoryId(addedCategoryId)
            }

            if (activeCategoryModal?.mode === 'edit' && editedCategoryId) {
                setAddedOrEditedCategoryId(editedCategoryId)
            }


            setCategories(prev => {
                if (activeCategoryModal?.mode === 'add') {
                    return (
                        [
                            {
                                id: addedCategoryId,
                                value: formatCategoryValue(data.name),
                                name: data.name,
                                description: data.description,
                            },
                            ...prev
                        ]
                    )
                }

                if (activeCategoryModal?.mode === 'edit') {
                    return (
                        prev.map(category => (
                            category.id === activeCategoryModal.id
                                ? {
                                    ...category,
                                    value: formatCategoryValue(data.name),
                                    name: data.name,
                                    description: data.description
                                }
                                : category
                        ))
                    )
                }

                return prev
            })

        }

        setCategoryFormValues(emptyCategoryFormValues)
        setActiveCategoryModal(null)
    }





    return (
        <>

            <ModalFormLayout
                handleSubmit={handleSubmit}
                validationMessage={validationMessage}
                setValidationMessage={setValidationMessage}
                setCategoryFormValues={setCategoryFormValues}
                emptyCategoryFormValues={emptyCategoryFormValues}
                activeCategoryModal={activeCategoryModal}
                setActiveCategoryModal={setActiveCategoryModal}
            >

                <CategoryFormInput
                    inputName='name'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                    label='Name'
                />

                <CategoryFormInput
                    inputName='description'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='description'
                    label='Description'
                />

            </ModalFormLayout>

        </>

    )
}


export { CategoryForm }


import { CategoryFormInput } from '../../ui/CategoryFormInput.tsx'
import { validateCategoryForm } from '../../../helpers/validateCategoryForm.ts'
import { formatCategoryValue } from '../../../helpers/formatCategoryValue.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import type { FormCategory } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'


type CategoryFormProps = {
    categoryFormValues: FormCategory
    setCategoryFormValues: (value: React.SetStateAction<FormCategory>) => void
    emptyCategoryFormValues: FormCategory
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    setCategories: (value: React.SetStateAction<Categories>) => void
    activeCategoryModal: ActiveModal
    setActiveCategoryModal: (value: ActiveModal) => void
}


const CategoryForm = ({
    setCategories,
    categoryFormValues,
    setCategoryFormValues,
    emptyCategoryFormValues,
    validationMessage,
    setValidationMessage,
    activeCategoryModal,
    setActiveCategoryModal
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

            setCategories(prev => {
                if (activeCategoryModal?.mode === 'add') {
                    return (
                        [
                            ...prev,
                            {
                                id: crypto.randomUUID(),
                                value: formatCategoryValue(data.name),
                                name: data.name,
                                description: data.description,
                            }
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

                <label htmlFor='name'>Name</label>
                <CategoryFormInput
                    inputName='name'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                />

                <label htmlFor='description'>Description</label>
                <CategoryFormInput
                    inputName='description'
                    categoryFormValues={categoryFormValues}
                    setCategoryFormValues={setCategoryFormValues}
                    setValidationMessage={setValidationMessage}
                    id='description'
                />

            </ModalFormLayout>

        </>

    )
}


export { CategoryForm }
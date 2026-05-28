

import { Button } from '../ui/Button.tsx'
import type { FormCategory, FormProduct } from '../../types/formTypes.ts'
import type { ReactNode } from 'react'
import type { ActiveModal } from '../../types/modalTypes.ts'


type ModalFormLayoutProps = {
    handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    setProductFormValues?: (value: FormProduct) => void
    emptyProductFormValues?: FormProduct
    setCategoryFormValues?: (value: FormCategory) => void
    emptyCategoryFormValues?: FormCategory
    children: ReactNode
    activeProductModal?: ActiveModal
    setActiveProductModal?: (value: ActiveModal) => void
    activeCategoryModal?: ActiveModal
    setActiveCategoryModal?: (value: ActiveModal) => void
}


const ModalFormLayout = ({
    handleSubmit,
    validationMessage,
    setValidationMessage,
    setProductFormValues,
    setCategoryFormValues,
    emptyProductFormValues,
    emptyCategoryFormValues,
    activeProductModal,
    setActiveProductModal,
    activeCategoryModal,
    setActiveCategoryModal,
    children
}: ModalFormLayoutProps) => {


    const handleCancel = () => {
        if (setProductFormValues && emptyProductFormValues) {
            setProductFormValues(emptyProductFormValues)
        }

        if (setCategoryFormValues && emptyCategoryFormValues) {
            setCategoryFormValues(emptyCategoryFormValues)
        }

        if (setActiveCategoryModal) {
            setActiveCategoryModal(null)
        }

        if (setActiveProductModal) {
            setActiveProductModal(null)
        }

        setValidationMessage(null)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                {children}

                {activeProductModal?.mode === 'add' && (
                    <Button
                        label='Add product'
                        type='submit'
                    />
                )}

                {activeCategoryModal?.mode === 'add' && (
                    <Button
                        label='Add category'
                        type='submit'
                    />
                )}

                {(activeProductModal?.mode === 'edit' || activeCategoryModal?.mode === 'edit') && (
                    <>
                        <Button
                            label='Save changes'
                            type='submit'
                        />
                        <Button
                            label='Cancel'
                            type='button'
                            handleClick={handleCancel}
                        />
                    </>
                )}
            </form>



            {validationMessage && <p>{validationMessage}</p>}
        </>
    )
}


export { ModalFormLayout }
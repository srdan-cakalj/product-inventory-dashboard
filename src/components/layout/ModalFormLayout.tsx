

import { Button } from '../ui/Button.tsx'
import type { FormCategory, FormProduct } from '../../types/formTypes.ts'
import type { ReactNode } from 'react'


type ModalFormLayoutProps = {
    handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
    editingId: string | null
    setEditingId: (value: string | null) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    setProductFormValues?: (value: FormProduct) => void
    emptyProductFormValues?: FormProduct
    setCategoryFormValues?: (value: FormCategory) => void
    emptyCategoryFormValues?: FormCategory
    setIsModalOpen: (value: boolean) => void
    children: ReactNode
}


const ModalFormLayout = ({
    handleSubmit,
    editingId,
    setEditingId,
    validationMessage,
    setValidationMessage,
    setProductFormValues,
    setCategoryFormValues,
    emptyProductFormValues,
    emptyCategoryFormValues,
    setIsModalOpen,
    children
}: ModalFormLayoutProps) => {


    const handleCancel = () => {
        if (setProductFormValues && emptyProductFormValues) {
            setProductFormValues(emptyProductFormValues)
        }

        if (setCategoryFormValues && emptyCategoryFormValues) {
            setCategoryFormValues(emptyCategoryFormValues)
        }

        setEditingId(null)
        setValidationMessage(null)
        setIsModalOpen(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                {children}

                {editingId === null
                    ? <Button
                        label='Add product'
                        type='submit'
                    />
                    : <>
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
                }
            </form>



            {validationMessage && <p>{validationMessage}</p>}
        </>
    )
}


export { ModalFormLayout }

import styles from './ModalFormLayout.module.css'
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
            <form className={styles.form} onSubmit={handleSubmit}>

                {children}

                {activeProductModal?.mode === 'add' && (
                    <div className={styles.actions}>
                        <Button
                            variant='primary'
                            label='Add product'
                            type='submit'
                        />
                    </div>
                )}

                {activeCategoryModal?.mode === 'add' && (
                    <div className={styles.actions}>
                        <Button
                            variant='primary'
                            label='Add category'
                            type='submit'
                        />
                    </div>
                )}

                {(activeProductModal?.mode === 'edit' || activeCategoryModal?.mode === 'edit') && (
                    <div className={styles.actions}>
                        <Button
                            variant='primary'
                            label='Save changes'
                            type='submit'
                        />
                        <Button
                            variant='secondary'
                            label='Cancel'
                            type='button'
                            handleClick={handleCancel}
                        />
                    </div>
                )}
            </form>



            {validationMessage &&
                <p className={styles.validationMessage}>
                    {validationMessage}
                </p>
            }
        </>
    )
}


export { ModalFormLayout }
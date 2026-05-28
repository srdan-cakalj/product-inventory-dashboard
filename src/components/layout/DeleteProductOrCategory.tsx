

import { Button } from '../ui/Button.tsx'
import type { ActiveModal } from '../../types/modalTypes.ts'


type DeleteProductOrCategoryProps = {
    name: string
    message: string
    setActiveProductModal?: (value: ActiveModal) => void
    setActiveCategoryModal?: (value: ActiveModal) => void
    handleDelete: () => void
}


const DeleteProductOrCategory = ({ name, message, setActiveProductModal, setActiveCategoryModal, handleDelete }: DeleteProductOrCategoryProps) => {


    const handleCancel = () => {

        if (setActiveProductModal) {
            setActiveProductModal(null)
        }

        if (setActiveCategoryModal) {
            setActiveCategoryModal(null)
        }
    }


    return (
        <>
            <p>{name}</p>
            <p>{message}</p>

            <Button
                variant='danger'
                label='Delete'
                type='button'
                handleClick={handleDelete}
            />
            <Button
                variant='secondary'
                label='Cancel'
                type='button'
                handleClick={handleCancel}
            />
        </>
    )
}


export { DeleteProductOrCategory }


import { Button } from '../ui/Button.tsx'
import styles from './DeleteProductOrCategory.module.css'
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
        <div className={styles.deleteContent}>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.message}>{message}</p>
            </div>

            <div className={styles.actions}>
                <Button
                    label='Cancel'
                    type='button'
                    variant='secondary'
                    handleClick={handleCancel}
                />

                <Button
                    label='Delete'
                    type='button'
                    variant='danger'
                    handleClick={handleDelete}
                />
            </div>
        </div>
    )
}


export { DeleteProductOrCategory }
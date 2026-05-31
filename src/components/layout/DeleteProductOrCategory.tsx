

import { Button } from '../ui/Button.tsx'
import styles from './DeleteProductOrCategory.module.css'


type DeleteProductOrCategoryProps = {
    name: string
    message: string
    handleDelete?: () => void
    handleClose: () => void
    buttonLabels: string[]
}


const DeleteProductOrCategory = ({ name, message, handleDelete, handleClose, buttonLabels }: DeleteProductOrCategoryProps) => {



    return (
        <div className={styles.deleteContent}>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.message}>{message}</p>
            </div>

            <div className={styles.actions}>
                <Button
                    label={buttonLabels[0]}
                    type='button'
                    variant='secondary'
                    handleClick={handleClose}
                />

                {handleDelete &&
                    <Button
                        label={buttonLabels[1]}
                        type='button'
                        variant='danger'
                        handleClick={handleDelete}
                    />
                }

            </div>
        </div>
    )
}


export { DeleteProductOrCategory }
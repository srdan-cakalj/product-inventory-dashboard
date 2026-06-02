

import { Button } from '../ui/Button.tsx'
import styles from './DeleteProductOrCategory.module.css'
import { Trash2 } from 'lucide-react'


type DeleteProductOrCategoryProps = {
    name: string
    message: string
    handleDelete?: () => void
    handleClose: () => void
    mode: 'info' | 'delete'
}


const DeleteProductOrCategory = ({ name, message, handleDelete, handleClose, mode }: DeleteProductOrCategoryProps) => {



    return (
        <div className={styles.deleteContent}>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.message}>{message}</p>
            </div>

            {mode === 'info' && (
                <div className={styles.actions}>
                    <Button
                        label='OK'
                        type='button'
                        variant='primary'
                        handleClick={handleClose}
                    />
                </div>
            )}

            {mode === 'delete' && (
                <div className={styles.actions}>
                    <Button
                        label='Cancel'
                        type='button'
                        variant='secondary'
                        handleClick={handleClose}
                    />
                    <Button
                        label='Delete'
                        type='button'
                        variant='danger'
                        handleClick={handleDelete}
                        IconComponent={Trash2}
                    />
                </div>
            )}


        </div>
    )
}


export { DeleteProductOrCategory }
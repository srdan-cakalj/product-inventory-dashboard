

import { useState } from 'react'
import { CategoriesTable } from '../components/features/categories/CategoriesTable.tsx'
import type { Categories, FormCategory } from '../types/categoriesTypes.ts'
import type { Products } from '../types/productTypes.ts'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { ModalLayout } from '../components/layout/ModalLayout.tsx'


type CategoriesPageProps = {
    title: string
    subtitle: string
    categories: Categories
    products: Products
}


const emptyFormValues: FormCategory = {
    name: '',
    description: ''
}


const CategoriesPage = ({ title, subtitle, categories, products }: CategoriesPageProps) => {


    const [formValues, setFormValues] = useState<FormCategory>(emptyFormValues)
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null)
    const [validationMessage, setValidationMessage] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleCloseIconButton = () => {
        setFormValues(emptyFormValues)
        setEditingCategoryId(null)
        setValidationMessage(null)
        setIsModalOpen(false)
    }



    return (
        <PageLayout
            title={title}
            subtitle={subtitle}
            pageHeaderButton={{
                type: 'button',
                label: '+ Add category',
                handleClick: () => setIsModalOpen(true)
            }}
        >

            <CategoriesTable
                categories={categories}
                products={products}
            />

            {isModalOpen &&
                <ModalLayout
                    title={
                        editingCategoryId
                            ? <h3>Edit category</h3>
                            : <h3>Add category</h3>
                    }
                    handleCloseIconButton={handleCloseIconButton}
                >

                    <p>{formValues.name}</p>
                    <p>{validationMessage}</p>

                </ModalLayout>
            }

        </PageLayout>
    )
}


export { CategoriesPage }


import { useState } from 'react'
import { CategoriesTable } from '../components/features/categories/CategoriesTable.tsx'
import type { Categories } from '../types/categoriesTypes.ts'
import type { FormCategory } from '../types/formTypes.ts'
import type { Products } from '../types/productTypes.ts'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { ModalLayout } from '../components/layout/ModalLayout.tsx'
import { CategoryForm } from '../components/features/categories/CategoryForm.tsx'


type CategoriesPageProps = {
    title: string
    subtitle: string
    categories: Categories
    setCategories: (value: React.SetStateAction<Categories>) => void
    products: Products
}


const emptyCategoryFormValues: FormCategory = {
    name: '',
    description: ''
}


const CategoriesPage = ({ title, subtitle, categories, setCategories, products }: CategoriesPageProps) => {


    const [categoryFormValues, setCategoryFormValues] = useState<FormCategory>(emptyCategoryFormValues)
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null)
    const [validationMessage, setValidationMessage] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleCloseIconButton = () => {
        setCategoryFormValues(emptyCategoryFormValues)
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
                setEditingCategoryId={setEditingCategoryId}
                setCategoryFormValues={setCategoryFormValues}
                setValidationMessage={setValidationMessage}
                setIsModalOpen={setIsModalOpen}
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

                    <CategoryForm
                        setCategories={setCategories}
                        categoryFormValues={categoryFormValues}
                        setCategoryFormValues={setCategoryFormValues}
                        emptyCategoryFormValues={emptyCategoryFormValues}
                        editingCategoryId={editingCategoryId}
                        setEditingCategoryId={setEditingCategoryId}
                        validationMessage={validationMessage}
                        setValidationMessage={setValidationMessage}
                        setIsModalOpen={setIsModalOpen}
                    />

                </ModalLayout>
            }

        </PageLayout>
    )
}


export { CategoriesPage }
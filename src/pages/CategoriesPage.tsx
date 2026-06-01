

import { useState, useEffect } from 'react'
import { CategoriesTable } from '../components/features/categories/CategoriesTable.tsx'
import type { Categories } from '../types/categoriesTypes.ts'
import type { FormCategory } from '../types/formTypes.ts'
import type { Products } from '../types/productTypes.ts'
import type { ActiveModal } from '../types/modalTypes.ts'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { ModalLayout } from '../components/layout/ModalLayout.tsx'
import { CategoryForm } from '../components/features/categories/CategoryForm.tsx'
import { DeleteProductOrCategory } from '../components/layout/DeleteProductOrCategory.tsx'


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
    const [validationMessage, setValidationMessage] = useState<string | null>(null)
    const [activeCategoryModal, setActiveCategoryModal] = useState<ActiveModal>(null)
    const [addedOrEditedCategoryId, setAddedOrEditedCategoryId] = useState<string | null>(null)
    const [deletedCategoryId, setDeletedCategoryId] = useState<string | null>(null)


    let categoryTitle = ''
    if (activeCategoryModal?.mode === 'add') {
        categoryTitle = 'Add category'
    }
    if (activeCategoryModal?.mode === 'edit') {
        categoryTitle = 'Edit category'
    }
    if (activeCategoryModal?.mode === 'delete') {
        categoryTitle = 'Delete category'
    }



    const handleClose = () => {
        setCategoryFormValues(emptyCategoryFormValues)
        setValidationMessage(null)
        setActiveCategoryModal(null)
    }


    const handleDeleteCategory = () => {
        if (activeCategoryModal?.id) {
            setDeletedCategoryId(activeCategoryModal.id)
            setActiveCategoryModal(null)
        }
    }


    const activeCategory = categories.find(category => category.id === activeCategoryModal?.id)

    let activeCategoryHasProducts = false
    if (activeCategory) {
        activeCategoryHasProducts = products.some(product => product.category === activeCategory.value)
    }


    useEffect(() => {
        if (addedOrEditedCategoryId) {
            const timeout = setTimeout(() => {
                setAddedOrEditedCategoryId(null)
            }, 300)

            return () => clearTimeout(timeout)
        }
    }, [addedOrEditedCategoryId])


    useEffect(() => {
        if (deletedCategoryId) {
            const timeout = setTimeout(() => {
                setCategories(prev => prev.filter(category => category.id !== deletedCategoryId))
                setDeletedCategoryId(null)
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [deletedCategoryId])



    return (
        <PageLayout
            title={title}
            subtitle={subtitle}
            pageHeaderButton={{
                type: 'button',
                label: '+ Add category',
                handleClick: () => setActiveCategoryModal({ mode: 'add', id: null })
            }}
        >

            <CategoriesTable
                categories={categories}
                products={products}
                setCategoryFormValues={setCategoryFormValues}
                setValidationMessage={setValidationMessage}
                setActiveCategoryModal={setActiveCategoryModal}
                addedOrEditedCategoryId={addedOrEditedCategoryId}
                deletedCategoryId={deletedCategoryId}
            />

            {activeCategoryModal?.mode === 'delete' && activeCategory &&
                <ModalLayout
                    title={categoryTitle}
                    handleClose={handleClose}
                >

                    {activeCategoryHasProducts
                        ? (
                            <DeleteProductOrCategory
                                name={activeCategory.name}
                                message='This category contains products. Move or delete them before deleting the category.'
                                handleClose={handleClose}
                                buttonLabels={['OK']}
                            />
                        )
                        : (
                            <DeleteProductOrCategory
                                name={activeCategory.name}
                                message='Are you sure you want to delete this category?'
                                handleClose={handleClose}
                                handleDelete={handleDeleteCategory}
                                buttonLabels={['Cancel', 'Delete']}
                            />
                        )
                    }

                </ModalLayout>
            }

            {(activeCategoryModal?.mode === 'add' || activeCategoryModal?.mode === 'edit') &&
                <ModalLayout
                    title={categoryTitle}
                    handleClose={handleClose}
                >

                    <CategoryForm
                        categories={categories}
                        setCategories={setCategories}
                        categoryFormValues={categoryFormValues}
                        setCategoryFormValues={setCategoryFormValues}
                        emptyCategoryFormValues={emptyCategoryFormValues}
                        validationMessage={validationMessage}
                        setValidationMessage={setValidationMessage}
                        activeCategoryModal={activeCategoryModal}
                        setActiveCategoryModal={setActiveCategoryModal}
                        setAddedOrEditedCategoryId={setAddedOrEditedCategoryId}
                    />

                </ModalLayout>
            }

        </PageLayout>
    )
}


export { CategoriesPage }


import { useState, useEffect } from 'react'
import { ProductsToolbar } from '../components/features/products/ProductsToolbar.tsx'
import { ProductsTable } from '../components/features/products/ProductsTable.tsx'
import { ProductForm } from '../components/features/products/ProductForm.tsx'
import { ModalLayout } from '../components/layout/ModalLayout.tsx'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { DeleteProductOrCategory } from '../components/layout/DeleteProductOrCategory.tsx'
import type { StockOption } from '../types/stockTypes.ts'
import type { Products } from '../types/productTypes.ts'
import type { FormProduct } from '../types/formTypes.ts'
import type { Categories } from '../types/categoriesTypes.ts'
import type { ActiveModal } from '../types/modalTypes.ts'
import type { CurrencyOptions, SortOptionsMap, SortOptions } from '../types/settingsTypes.ts'
import { getStockInfo } from '../helpers/getStockInfo.ts'
import { getSortedProducts } from '../helpers/getSortedProducts.ts'


type ProductsPageProps = {
    title: string
    subtitle: string
    products: Products
    categories: Categories
    setProducts: (value: React.SetStateAction<Products>) => void
    lowStockThreshold: number
    currency: CurrencyOptions
    sortOptionsMap: SortOptionsMap
    defaultSortOption: SortOptions
    showOutOfStockProducts: boolean
    showProductImages: boolean
}


const emptyProductFormValues: FormProduct = {
    name: '',
    category: '',
    price: '',
    stock: ''
}



const ProductsPage = ({
    title,
    subtitle,
    products,
    categories,
    setProducts,
    lowStockThreshold,
    currency,
    sortOptionsMap,
    defaultSortOption,
    showOutOfStockProducts,
    showProductImages }: ProductsPageProps) => {

    const [searchInputValue, setSearchInputValue] = useState('')
    const [categoryFilterValue, setCategoryFilterValue] = useState('all')
    const [stockFilterValue, setStockFilterValue] = useState<StockOption>('all')
    const [sortFilterValue, setSortFilterValue] = useState<SortOptions>('default')
    const [productFormValues, setProductFormValues] = useState<FormProduct>(emptyProductFormValues)
    const [validationMessage, setValidationMessage] = useState<string | null>(null)
    const [activeProductModal, setActiveProductModal] = useState<ActiveModal>(null)
    const [addedOrEditedProductId, setAddedOrEditedProductId] = useState<string | null>(null)
    const [deletedProductId, setDeletedProductId] = useState<string | null>(null)


    let filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
        .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')
        .filter(product => getStockInfo(product.stock, lowStockThreshold).option === stockFilterValue || stockFilterValue === 'all')

    if (!showOutOfStockProducts) {
        filteredProducts = filteredProducts.filter(product => product.stock > 0)
    }


    const productsToSort = [...filteredProducts]
    const sortedProducts = getSortedProducts(productsToSort, sortFilterValue)



    let productTitle = ''
    if (activeProductModal?.mode === 'add') {
        productTitle = 'Add product'
    }
    if (activeProductModal?.mode === 'edit') {
        productTitle = 'Edit product'
    }
    if (activeProductModal?.mode === 'delete') {
        productTitle = 'Delete product'
    }


    const handleClose = () => {
        setProductFormValues(emptyProductFormValues)
        setValidationMessage(null)
        setActiveProductModal(null)
    }


    const handleDelete = () => {
        if (activeProductModal?.id) {
            setDeletedProductId(activeProductModal.id)
            setActiveProductModal(null)
        }
    }


    const activeProduct = products.find(product => product.id === activeProductModal?.id)


    useEffect(() => {
        if (addedOrEditedProductId) {
            const timeout = setTimeout(() => {
                setAddedOrEditedProductId(null)
            }, 300)

            return () => clearTimeout(timeout)
        }
    }, [addedOrEditedProductId])


    useEffect(() => {
        if (deletedProductId) {
            const timeout = setTimeout(() => {
                setProducts(prev => prev.filter(product => product.id !== deletedProductId))
                setDeletedProductId(null)
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [deletedProductId])





    return (

        <PageLayout
            title={title}
            subtitle={subtitle}
            pageHeaderButton={{
                type: 'button',
                label: '+ Add product',
                handleClick: () => setActiveProductModal({ mode: 'add', id: null })
            }}
        >

            <ProductsToolbar
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                categories={categories}
                categoryFilterValue={categoryFilterValue}
                setCategoryFilterValue={setCategoryFilterValue}
                stockFilterValue={stockFilterValue}
                setStockFilterValue={setStockFilterValue}
                sortFilterValue={sortFilterValue}
                setSortFilterValue={setSortFilterValue}
                sortOptionsMap={sortOptionsMap}
                defaultSortOption={defaultSortOption}
            />

            {sortedProducts.length === 0
                ? <p>No results.</p>
                : <ProductsTable
                    products={sortedProducts}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    setActiveProductModal={setActiveProductModal}
                    lowStockThreshold={lowStockThreshold}
                    currency={currency}
                    showProductImages={showProductImages}
                    addedOrEditedProductId={addedOrEditedProductId}
                    deletedProductId={deletedProductId}
                />
            }

            {activeProductModal?.mode === 'delete' && activeProduct &&
                <ModalLayout
                    title={productTitle}
                    handleClose={handleClose}
                >
                    <DeleteProductOrCategory
                        name={activeProduct.name}
                        message='Are you sure you want to delete this product?'
                        handleDelete={handleDelete}
                        handleClose={handleClose}
                        buttonLabels={['Cancel', 'Delete']}
                    />
                </ModalLayout>
            }

            {(activeProductModal?.mode === 'add' || activeProductModal?.mode === 'edit') &&
                <ModalLayout
                    title={productTitle}
                    handleClose={handleClose}
                >

                    <ProductForm
                        categories={categories}
                        productFormValues={productFormValues}
                        setProductFormValues={setProductFormValues}
                        emptyProductFormValues={emptyProductFormValues}
                        setProducts={setProducts}
                        validationMessage={validationMessage}
                        setValidationMessage={setValidationMessage}
                        activeProductModal={activeProductModal}
                        setActiveProductModal={setActiveProductModal}
                        setAddedOrEditedProductId={setAddedOrEditedProductId}
                    />

                </ModalLayout>
            }

        </PageLayout >

    )

}


export { ProductsPage }


import { useState } from 'react'
import { ProductsToolbar } from '../components/features/products/ProductsToolbar.tsx'
import { ProductsTable } from '../components/features/products/ProductsTable.tsx'
import { ProductForm } from '../components/features/products/ProductForm.tsx'
import { ModalLayout } from '../components/layout/ModalLayout.tsx'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import type { StockOption } from '../types/stockTypes.ts'
import type { SortOption } from '../types/sortTypes.ts'
import type { Product, FormProduct } from '../types/productTypes.ts'
import type { Categories } from '../types/categoriesTypes.ts'
import { getStockInfo } from '../helpers/getStockInfo.ts'
import { getSortedProducts } from '../helpers/getSortedProducts.ts'


type ProductsPageProps = {
    title: string
    subtitle: string
    products: Product[]
    categories: Categories
    setProducts: (value: React.SetStateAction<Product[]>) => void
}


const emptyFormValues: FormProduct = {
    name: '',
    category: '',
    price: '',
    stock: ''
}


const ProductsPage = ({ title, subtitle, products, categories, setProducts }: ProductsPageProps) => {

    const [searchInputValue, setSearchInputValue] = useState('')
    const [categoryFilterValue, setCategoryFilterValue] = useState('all')
    const [stockFilterValue, setStockFilterValue] = useState<StockOption>('all')
    const [sortFilterValue, setSortFilterValue] = useState<SortOption>('default')
    const [formValues, setFormValues] = useState<FormProduct>(emptyFormValues)
    const [editingProductId, setEditingProductId] = useState<string | null>(null)
    const [validationMessage, setValidationMessage] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchInputValue.toLowerCase()))
        .filter(product => product.category === categoryFilterValue || categoryFilterValue === 'all')
        .filter(product => getStockInfo(product.stock).option === stockFilterValue || stockFilterValue === 'all')

    const productsToSort = [...filteredProducts]
    const sortedProducts = getSortedProducts(productsToSort, sortFilterValue)


    const handleCloseIconButton = () => {
        setFormValues(emptyFormValues)
        setEditingProductId(null)
        setValidationMessage(null)
        setIsModalOpen(false)
    }


    return (

        <PageLayout
            title={title}
            subtitle={subtitle}
            pageHeaderButton={{
                type: 'button',
                label: '+ Add Product',
                handleClick: () => setIsModalOpen(true)
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
            />

            {sortedProducts.length === 0
                ? <p>No results.</p>
                : <ProductsTable
                    products={sortedProducts}
                    setProducts={setProducts}
                    setFormValues={setFormValues}
                    emptyFormValues={emptyFormValues}
                    editingProductId={editingProductId}
                    setEditingProductId={setEditingProductId}
                    setValidationMessage={setValidationMessage}
                    setIsModalOpen={setIsModalOpen}
                />
            }

            {isModalOpen &&
                <ModalLayout
                    title={
                        editingProductId
                            ? <h3>Edit product</h3>
                            : <h3>Add product</h3>
                    }
                    handleCloseIconButton={handleCloseIconButton}
                >

                    <ProductForm
                        categories={categories}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        emptyFormValues={emptyFormValues}
                        setProducts={setProducts}
                        editingProductId={editingProductId}
                        setEditingProductId={setEditingProductId}
                        validationMessage={validationMessage}
                        setValidationMessage={setValidationMessage}
                        setIsModalOpen={setIsModalOpen}
                    />

                </ModalLayout>
            }

        </PageLayout>

    )

}


export { ProductsPage }
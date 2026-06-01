

import { ProductFormInput } from '../../ui/ProductFormInput.tsx'
import { FormSelect } from "../../ui/FormSelect.tsx"
import { validateProductForm } from '../../../helpers/validateProductForm.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import type { Products } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'
import type { CurrencySymbols, CurrencyOptions } from '../../../types/settingsTypes.ts'


type ProductFormProps = {
    categories: Categories
    productFormValues: FormProduct
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyProductFormValues: FormProduct
    setProducts: (value: React.SetStateAction<Products>) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    activeProductModal: ActiveModal
    setActiveProductModal: (value: ActiveModal) => void
    setAddedOrEditedProductId: (value: string | null) => void
    currency: CurrencyOptions
    currencySymbols: CurrencySymbols
}


const ProductForm = ({
    categories,
    productFormValues,
    setProductFormValues,
    emptyProductFormValues,
    setProducts,
    validationMessage,
    setValidationMessage,
    activeProductModal,
    setActiveProductModal,
    setAddedOrEditedProductId,
    currency,
    currencySymbols }: ProductFormProps) => {


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const validationResult = validateProductForm(productFormValues)
        setValidationMessage(validationResult.message)
        if (validationResult.message) {
            return
        }


        if (validationResult.productData) {

            const data = validationResult.productData

            const addedProductId = crypto.randomUUID()
            const editedProductId = activeProductModal?.id

            if (activeProductModal?.mode === 'add') {
                setAddedOrEditedProductId(addedProductId)
            }

            if (activeProductModal?.mode === 'edit' && editedProductId) {
                setAddedOrEditedProductId(editedProductId)
            }

            setProducts(prev => {
                if (activeProductModal?.mode === 'add') {
                    return (
                        [
                            {
                                id: addedProductId,
                                image: '',
                                name: data.name,
                                category: data.category,
                                price: data.price,
                                stock: data.stock
                            },
                            ...prev
                        ]
                    )
                }

                if (activeProductModal?.mode === 'edit') {
                    return (
                        prev.map(product => (
                            product.id !== activeProductModal.id
                                ? product
                                : {
                                    id: product.id,
                                    image: product.image,
                                    name: data.name,
                                    category: data.category,
                                    price: data.price,
                                    stock: data.stock
                                }
                        ))
                    )
                }

                return prev
            })
        }

        setProductFormValues(emptyProductFormValues)
        setActiveProductModal(null)
    }





    return (
        <>

            <ModalFormLayout
                handleSubmit={handleSubmit}
                validationMessage={validationMessage}
                setValidationMessage={setValidationMessage}
                setProductFormValues={setProductFormValues}
                emptyProductFormValues={emptyProductFormValues}
                activeProductModal={activeProductModal}
                setActiveProductModal={setActiveProductModal}
            >

                <FormSelect
                    categories={categories}
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='category'
                    label='Category'
                />


                <ProductFormInput
                    inputName='name'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                    label='Product name'
                />

                <ProductFormInput
                    inputName='price'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='price'
                    label={`Price (${currencySymbols[currency]})`}
                />

                <ProductFormInput
                    inputName='stock'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='stock'
                    label='Stock quantity'
                />

            </ModalFormLayout>

        </>

    )
}


export { ProductForm }
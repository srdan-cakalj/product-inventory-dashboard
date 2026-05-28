

import { ProductFormInput } from '../../ui/ProductFormInput.tsx'
import { FormSelect } from "../../ui/FormSelect.tsx"
import { validateProductForm } from '../../../helpers/validateProductForm.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import type { Products } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'
import type { ActiveModal } from '../../../types/modalTypes.ts'


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
    setActiveProductModal
}: ProductFormProps) => {


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const validationResult = validateProductForm(productFormValues)
        setValidationMessage(validationResult.message)
        if (validationResult.message) {
            return
        }


        if (validationResult.productData) {

            const data = validationResult.productData

            setProducts(prev => {
                if (activeProductModal?.mode === 'add') {
                    return (
                        [
                            ...prev,
                            {
                                id: crypto.randomUUID(),
                                name: data.name,
                                category: data.category,
                                price: data.price,
                                stock: data.stock
                            }
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

                <label htmlFor='category'>Category</label>
                <FormSelect
                    categories={categories}
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='category'
                />

                <label htmlFor='name'>Product name</label>
                <ProductFormInput
                    inputName='name'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                />

                <label htmlFor='price'>Price (€) </label>
                <ProductFormInput
                    inputName='price'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='price'
                />

                <label htmlFor='stock'>Stock quantity</label>
                <ProductFormInput
                    inputName='stock'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='stock'
                />

            </ModalFormLayout>

        </>

    )
}


export { ProductForm }


import { ProductFormInput } from '../../ui/ProductFormInput.tsx'
import { FormSelect } from "../../ui/FormSelect.tsx"
import { validateProductForm } from '../../../helpers/validateProductForm.ts'
import { ModalFormLayout } from '../../layout/ModalFormLayout.tsx'
import type { Products } from '../../../types/productTypes.ts'
import type { FormProduct } from '../../../types/formTypes.ts'
import type { Categories } from '../../../types/categoriesTypes.ts'


type ProductFormProps = {
    categories: Categories
    productFormValues: FormProduct
    setProductFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyProductFormValues: FormProduct
    setProducts: (value: React.SetStateAction<Products>) => void
    editingProductId: string | null
    setEditingProductId: (value: string | null) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
    setIsModalOpen: (value: boolean) => void
}


const ProductForm = ({
    categories,
    productFormValues,
    setProductFormValues,
    emptyProductFormValues,
    setProducts,
    editingProductId,
    setEditingProductId,
    validationMessage,
    setValidationMessage,
    setIsModalOpen
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

            setProducts(prev => (
                editingProductId === null
                    ? [
                        ...prev,
                        {
                            id: crypto.randomUUID(),
                            name: data.name,
                            category: data.category,
                            price: data.price,
                            stock: data.stock
                        }
                    ]
                    : prev.map(product => (
                        product.id !== editingProductId
                            ? product
                            : {
                                id: editingProductId,
                                name: data.name,
                                category: data.category,
                                price: data.price,
                                stock: data.stock
                            }
                    ))
            ))

        }

        setProductFormValues(emptyProductFormValues)
        setEditingProductId(null)
        setIsModalOpen(false)
    }





    return (
        <>

            <ModalFormLayout
                handleSubmit={handleSubmit}
                editingId={editingProductId}
                validationMessage={validationMessage}
                setValidationMessage={setValidationMessage}
                setProductFormValues={setProductFormValues}
                emptyProductFormValues={emptyProductFormValues}
                setEditingId={setEditingProductId}
                setIsModalOpen={setIsModalOpen}
            >

                <label htmlFor='category'>Category</label>
                <FormSelect
                    categories={categories}
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='category'
                />

                <br />

                <label htmlFor='name'>Product name</label>
                <ProductFormInput
                    inputName='name'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='name'
                />

                <br />

                <label htmlFor='price'>Price (€) </label>
                <ProductFormInput
                    inputName='price'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='price'
                />

                <br />

                <label htmlFor='stock'>Stock quantity</label>
                <ProductFormInput
                    inputName='stock'
                    productFormValues={productFormValues}
                    setProductFormValues={setProductFormValues}
                    setValidationMessage={setValidationMessage}
                    id='stock'
                />

                <br />

            </ModalFormLayout>

        </>

    )
}


export { ProductForm }
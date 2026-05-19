

import { useState } from 'react'
import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"
import { validateProductForm } from '../../helpers/validateProductForm.ts'
import type { NewProduct, Product } from '../../types/productTypes.ts'


type ProductFormProps = {
    categoryOptions: string[]
    formValues: NewProduct
    setFormValues: (value: React.SetStateAction<NewProduct>) => void
    emptyFormValues: NewProduct
    setProducts: (value: React.SetStateAction<Product[]>) => void
}


const ProductForm = ({ categoryOptions, formValues, setFormValues, emptyFormValues, setProducts }: ProductFormProps) => {

    const [validationMessage, setValidationMessage] = useState<string | null>(null)

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationResult = validateProductForm(formValues)
        setValidationMessage(validationResult.message)
        if (validationResult.message) {
            return
        }

        if (validationResult.productData) {
            const newProduct: Product = {
                id: crypto.randomUUID(),
                name: validationResult.productData.name,
                category: validationResult.productData.category,
                price: validationResult.productData.price,
                stock: validationResult.productData.stock
            }

            setProducts(prev => {
                return ([
                    ...prev,
                    newProduct
                ])
            })
        }

        setFormValues(emptyFormValues)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor='category'>Category</label>
                <ProductFormSelect
                    categoryOptions={categoryOptions}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    setValidationMessage={setValidationMessage}
                    id='category'
                />

                <br />

                <label htmlFor='product-name'>Product name</label>
                <ProductFormInput
                    inputName='name'
                    formValues={formValues}
                    setFormValues={setFormValues}
                    setValidationMessage={setValidationMessage}
                    id='product-name'
                />

                <br />

                <label htmlFor='price'>Price (€) </label>
                <ProductFormInput
                    inputName='price'
                    formValues={formValues}
                    setFormValues={setFormValues}
                    setValidationMessage={setValidationMessage}
                    id='price'
                />

                <br />

                <label htmlFor='stock'>Stock quantity</label>
                <ProductFormInput
                    inputName='stock'
                    formValues={formValues}
                    setFormValues={setFormValues}
                    setValidationMessage={setValidationMessage}
                    id='stock'
                />

                <br />

                <ProductFormButton />

            </form>


            {validationMessage && <p>{validationMessage}</p>}

        </>

    )
}


export { ProductForm }
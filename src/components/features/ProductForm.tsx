

import { useState } from 'react'
import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"
import { validateProductForm } from '../../helpers/validateProductForm.ts'
import type { NewProduct, Product } from '../../types/productTypes.ts'


type ProductFormProps = {
    categoryOptions: string[]
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
    newProductValuesInit: NewProduct
    setProducts: (value: React.SetStateAction<Product[]>) => void
}


const ProductForm = ({ categoryOptions, newProductValues, setNewProductValues, newProductValuesInit, setProducts }: ProductFormProps) => {

    const [validationMessage, setValidationMessage] = useState<string | null>(null)

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationResult = validateProductForm(newProductValues)
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

        setNewProductValues(newProductValuesInit)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor='category'>Category</label>
                <ProductFormSelect
                    categoryOptions={categoryOptions}
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setValidationMessage={setValidationMessage}
                    id='category'
                />

                <br />

                <label htmlFor='product-name'>Product name</label>
                <ProductFormInput
                    inputName='name'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setValidationMessage={setValidationMessage}
                    id='product-name'
                />

                <br />

                <label htmlFor='price'>Price (€) </label>
                <ProductFormInput
                    inputName='price'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setValidationMessage={setValidationMessage}
                    id='price'
                />

                <br />

                <label htmlFor='stock'>Stock quantity</label>
                <ProductFormInput
                    inputName='stock'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
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
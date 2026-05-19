

import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"
import { validateProductForm } from '../../helpers/validateProductForm.ts'
import type { FormProduct, Product } from '../../types/productTypes.ts'


type ProductFormProps = {
    categoryOptions: string[]
    formValues: FormProduct
    setFormValues: (value: React.SetStateAction<FormProduct>) => void
    emptyFormValues: FormProduct
    setProducts: (value: React.SetStateAction<Product[]>) => void
    editingProductId: string | null
    setEditingProductId: (value: string | null) => void
    validationMessage: string | null
    setValidationMessage: (value: string | null) => void
}


const ProductForm = ({
    categoryOptions,
    formValues,
    setFormValues,
    emptyFormValues,
    setProducts,
    editingProductId,
    setEditingProductId,
    validationMessage,
    setValidationMessage
}: ProductFormProps) => {


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const validationResult = validateProductForm(formValues)
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

        setFormValues(emptyFormValues)
        setEditingProductId(null)
    }


    const handleCancel = () => {
        setFormValues(emptyFormValues)
        setEditingProductId(null)
        setValidationMessage(null)
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


                {editingProductId === null
                    ? <ProductFormButton
                        label='Add product'
                        type='submit'
                    />
                    : <>
                        <ProductFormButton
                            label='Save changes'
                            type='submit'
                        />
                        <ProductFormButton
                            label='Cancel'
                            type='button'
                            handleClick={handleCancel}
                        />
                    </>
                }

            </form>


            {validationMessage && <p>{validationMessage}</p>}

        </>

    )
}


export { ProductForm }
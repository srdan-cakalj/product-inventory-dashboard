

import { useState } from 'react'
import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"
import { validateProductForm } from '../../helpers/validateProductForm.ts'
import type { NewProduct } from '../../types/productTypes.ts'


type ProductFormProps = {
    categoryOptions: string[]
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
}


const ProductForm = ({ categoryOptions, newProductValues, setNewProductValues }: ProductFormProps) => {


    const [noValidFormMessage, setNoValidFormMessage] = useState<string | null>(null)


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationError = validateProductForm(newProductValues)

        if (validationError) {
            setNoValidFormMessage(validationError)
            return
        }

        setNoValidFormMessage(null)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <ProductFormSelect
                    categoryOptions={categoryOptions}
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setNoValidFormMessage={setNoValidFormMessage}
                />

                <br />

                <ProductFormInput
                    inputName='name'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setNoValidFormMessage={setNoValidFormMessage}
                />

                <br />

                <ProductFormInput
                    inputName='price'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setNoValidFormMessage={setNoValidFormMessage}
                />

                <br />

                <ProductFormInput
                    inputName='stock'
                    newProductValues={newProductValues}
                    setNewProductValues={setNewProductValues}
                    setNoValidFormMessage={setNoValidFormMessage}
                />

                <br />

                <ProductFormButton />

            </form>


            {noValidFormMessage && <p>{noValidFormMessage}</p>}

        </>

    )
}


export { ProductForm }


import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"


type ProductFormProps = {
    categoryOptions: string[]
}


const ProductForm = ({ categoryOptions }: ProductFormProps) => {
    return (
        <form>
            <ProductFormSelect
                categoryOptions={categoryOptions}
            />

            <br />

            <ProductFormInput />

            <br />

            <ProductFormInput />

            <br />

            <ProductFormInput />

            <br />

            <ProductFormButton />
        </form>
    )
}


export { ProductForm }
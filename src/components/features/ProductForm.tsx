

import { ProductFormInput } from "../ui/ProductFormInput.tsx"
import { ProductFormButton } from "../ui/ProductFormButton.tsx"
import { ProductFormSelect } from "../ui/ProductFormSelect.tsx"
import type { NewProduct } from '../../types/productTypes.ts'


type ProductFormProps = {
    categoryOptions: string[]
    newProductValues: NewProduct
    setNewProductValues: (value: React.SetStateAction<NewProduct>) => void
}


const ProductForm = ({ categoryOptions, newProductValues, setNewProductValues }: ProductFormProps) => {
    return (
        <form>
            <ProductFormSelect
                categoryOptions={categoryOptions}
                newProductValues={newProductValues}
                setNewProductValues={setNewProductValues}
            />

            <br />

            <ProductFormInput
                inputName='name'
                newProductValues={newProductValues}
                setNewProductValues={setNewProductValues}
            />

            <br />

            <ProductFormInput
                inputName='price'
                newProductValues={newProductValues}
                setNewProductValues={setNewProductValues}
            />

            <br />

            <ProductFormInput
                inputName='stock'
                newProductValues={newProductValues}
                setNewProductValues={setNewProductValues}
            />

            <br />

            <ProductFormButton />
        </form>
    )
}


export { ProductForm }
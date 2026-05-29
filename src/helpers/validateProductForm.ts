

import type { Product } from "../types/productTypes.ts"
import type { FormProduct } from "../types/formTypes.ts"


type ValidationResult = {
    message: string | null
    productData: Pick<Product, 'name' | 'category' | 'price' | 'stock'> | null
}


const validateProductForm = (newProductValues: FormProduct): ValidationResult => {


    // is empty string

    const trimmedValues = {
        name: newProductValues.name.trim(),
        category: newProductValues.category.trim(),
        price: newProductValues.price.trim().replace(',', '.'),
        stock: newProductValues.stock.trim()
    }

    const isValueEmptyString =
        !trimmedValues.name ||
        !trimmedValues.category ||
        !trimmedValues.price ||
        !trimmedValues.stock

    if (isValueEmptyString) {
        return {
            message: 'Please fill in all fields.',
            productData: null
        }
    }


    // name length

    if (trimmedValues.name.length < 3) {
        return {
            message: 'Name must contain at least 3 characters.',
            productData: null
        }
    }

    if (trimmedValues.name.length > 50) {
        return {
            message: 'Name can contain a maximum of 50 characters.',
            productData: null
        }
    }


    // name forbidden characters

    if (/[<>]/.test(trimmedValues.name)) {
        return {
            message: 'Name contains forbidden characters.',
            productData: null
        }
    }


    // is number

    const priceFormattedToNumber = Number(trimmedValues.price)
    const stockFormattedToNumber = Number(trimmedValues.stock)

    if (Number.isNaN(priceFormattedToNumber)) {
        return {
            message: 'Price must be a number.',
            productData: null
        }
    }

    if (Number.isNaN(stockFormattedToNumber)) {
        return {
            message: 'Stock must be a number.',
            productData: null
        }
    }


    // is negative

    if (priceFormattedToNumber < 0) {
        return {
            message: 'Price cannot be negative.',
            productData: null
        }
    }

    if (stockFormattedToNumber < 0) {
        return {
            message: 'Stock cannot be negative.',
            productData: null
        }
    }


    // is integer

    const isStockInteger = Number.isInteger(stockFormattedToNumber)

    if (!isStockInteger) {
        return {
            message: 'Stock cannot have decimals. Please enter a whole number.',
            productData: null
        }
    }



    return {
        message: null,
        productData: {
            name: trimmedValues.name,
            category: trimmedValues.category,
            price: priceFormattedToNumber,
            stock: stockFormattedToNumber
        }
    }

}


export { validateProductForm }
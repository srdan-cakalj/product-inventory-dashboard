

import type { NewProduct } from "../types/productTypes.ts"


const validateProductForm = (newProductValues: NewProduct): string | null => {


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
        return 'Please fill in all fields.'
    }


    // name length

    if (trimmedValues.name.length < 3) {
        return 'Name must contain at least 3 characters.'
    }

    if (trimmedValues.name.length > 50) {
        return 'Name can contain a maximum of 50 characters.'
    }


    // name forbidden characters

    if (/[<>]/.test(trimmedValues.name)) {
        return 'Name contains forbidden characters.'
    }


    // is number

    const priceFormattedToNumber = Number(trimmedValues.price)
    const stockFormattedToNumber = Number(trimmedValues.stock)

    if (Number.isNaN(priceFormattedToNumber)) {
        return 'Price must be a number.'
    }

    if (Number.isNaN(stockFormattedToNumber)) {
        return 'Stock must be a number.'
    }


    // is negative

    if (priceFormattedToNumber < 0) {
        return 'Price cannot be negative.'
    }

    if (stockFormattedToNumber < 0) {
        return 'Stock cannot be negative.'
    }


    // is integer

    const isStockInteger = Number.isInteger(stockFormattedToNumber)

    if (!isStockInteger) {
        return 'Stock cannot have decimals. Please enter a whole number.'
    }



    return null

}


export { validateProductForm }


import type { FormCategory } from "../types/formTypes.ts"


type ValidationResult = {
    message: string | null
    categoryData: Pick<FormCategory, 'name' | 'description'> | null
}


const validateCategoryForm = (newProductValues: FormCategory): ValidationResult => {


    // is empty string

    const trimmedValues = {
        name: newProductValues.name.trim(),
        description: newProductValues.description.trim(),
    }

    const isValueEmptyString =
        !trimmedValues.name ||
        !trimmedValues.description

    if (isValueEmptyString) {
        return {
            message: 'Please fill in all fields.',
            categoryData: null
        }
    }


    // name length

    if (trimmedValues.name.length < 3) {
        return {
            message: 'Name must contain at least 3 characters.',
            categoryData: null
        }
    }

    if (trimmedValues.name.length > 50) {
        return {
            message: 'Name can contain a maximum of 50 characters.',
            categoryData: null
        }
    }


    // name forbidden characters

    if (/[<>]/.test(trimmedValues.name)) {
        return {
            message: 'Name contains forbidden characters.',
            categoryData: null
        }
    }


    return {
        message: null,
        categoryData: {
            name: trimmedValues.name,
            description: trimmedValues.description
        }
    }

}


export { validateCategoryForm }
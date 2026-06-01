

import type { Categories } from '../types/categoriesTypes.ts'
import type { FormCategory } from '../types/formTypes.ts'
import { formatCategoryValue } from '../helpers/formatCategoryValue.ts'


type ValidationResult = {
    message: string | null
    categoryData: FormCategory | null
}


const validateCategoryForm = (categoryFormValues: FormCategory, categories: Categories): ValidationResult => {


    // is empty string

    const trimmedValues = {
        name: categoryFormValues.name.trim(),
        description: categoryFormValues.description.trim(),
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


    // double category

    const formattedValue = formatCategoryValue(trimmedValues.name)
    const categoryAlreadyExists  = categories.some(category => category.value === formattedValue)

    if (categoryAlreadyExists ) {
        return {
            message: 'A category with this name already exists.',
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
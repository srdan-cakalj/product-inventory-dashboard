

const formatCategoryValue = (option: string): string => {
    if (option.length === 0) {
        return option
    }

    return option.toLowerCase()
}


export { formatCategoryValue }

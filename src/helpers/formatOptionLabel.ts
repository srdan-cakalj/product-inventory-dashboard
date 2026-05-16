


const formatOptionLabel = (option: string): string => {
    if (option === 'all') {
        return 'All categories'
    }

    if (option.length === 0) {
        return option
    }

    return option[0].toUpperCase() + option.slice(1)
}


export { formatOptionLabel }



type SearchInputProps = {
    searchInputValue: string
    setSearchInputValue: (value: string) => void
}

const SearchInput = ({ searchInputValue, setSearchInputValue }: SearchInputProps) => {
    return (
        <input
            onChange={e => setSearchInputValue(e.target.value)}
            value={searchInputValue}
            placeholder='Search by name'
        />
    )
}


export { SearchInput }
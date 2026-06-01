


type CurrencyOptions = 'EUR' | 'USD' | 'GBP'

type ThemeOptions = 'light' | 'dark'

type SortOptions = 'default' | 'name-a-z' | 'name-z-a' | 'price-low-high' | 'price-high-low' | 'stock-low-high' | 'stock-high-low'



type OneCurrencyOption = {
    value: CurrencyOptions
    label: string
}

type OneThemeOption = {
    value: ThemeOptions
    label: string
}

type OneSortOption = {
    value: SortOptions
    label: string
}



type CurrencyOptionsMap = OneCurrencyOption[]

type ThemeOptionsMap = OneThemeOption[]

type SortOptionsMap = OneSortOption[]



type CurrencySymbols = Record<CurrencyOptions, string>



export type {
    CurrencyOptions,
    ThemeOptions,
    SortOptions,
    CurrencyOptionsMap,
    ThemeOptionsMap,
    SortOptionsMap,
    CurrencySymbols
}

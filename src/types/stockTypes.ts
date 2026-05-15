

type StockOption = 'all' | 'in-stock' | 'low-stock' | 'out-of-stock'


type StockInfo = {
    option: Exclude<StockOption, 'all'>
    status: string
}


export type { StockOption, StockInfo }


import type { StockOption } from '../../../types/stockTypes.ts'


type StockFilterProps = {
    stockFilterValue: StockOption
    setStockFilterValue: (value: StockOption) => void
}


const stockOptions: StockOption[] = ['all', 'in-stock', 'low-stock', 'out-of-stock']

const stockOptionsText: Record<StockOption, string> = {
    all: 'All stock options',
    'in-stock': 'In stock',
    'low-stock': 'Low stock',
    'out-of-stock': 'Out of stock'
}


const StockFilter = ({ stockFilterValue, setStockFilterValue }: StockFilterProps) => {
    return (
        <select
            onChange={e => setStockFilterValue(e.target.value as StockOption)}
            value={stockFilterValue}
        >
            {stockOptions.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {stockOptionsText[option]}
                </option>
            ))}
        </select>
    )
}


export { StockFilter }
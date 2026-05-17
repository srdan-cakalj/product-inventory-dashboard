


import type { StockInfo } from '../types/stockTypes.ts'


const getStockInfo = (stock: number): StockInfo => {
  if (stock === 0) {
    return { option: 'out-of-stock', status: 'Out of stock' }
  }

  if (stock > 0 && stock <= 5) {
    return { option: 'low-stock', status: 'Low stock' }
  }

  return { option: 'in-stock', status: 'In stock' }
}


export { getStockInfo }
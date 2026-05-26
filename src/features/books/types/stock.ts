export type StockStatus = 'available' | 'borrowed'

export interface StockInfo {
  stock: number
  status: StockStatus
  isAvailable: boolean
}
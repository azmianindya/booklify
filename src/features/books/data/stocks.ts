export const calculateStock = (downloadCount: number): number => {
  return Math.max(1, Math.floor(downloadCount / 1000))
}

export const getStockStatus = (downloadCount: number) => {
  const stock = calculateStock(downloadCount)
  const status = downloadCount > 20000 ? 'borrowed' : 'available'
  
  return {
    stock,
    status,
    isAvailable: status === 'available'
  }
}
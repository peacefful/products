export const isExistProduct = (id: string, key: string): boolean => {
  const keyLocalStorage = key

  const products: string[] = JSON.parse(localStorage.getItem(keyLocalStorage) || '[]')
  return products.includes(id)
}

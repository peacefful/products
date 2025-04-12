export const isFavoriteProduct = (id: string): boolean => {
  const favoriteProducts: string[] = JSON.parse(localStorage.getItem('favoriteProducts') || '[]')
  return favoriteProducts.includes(id)
}

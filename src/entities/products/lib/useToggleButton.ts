import { ref } from 'vue'
import { isExistProduct } from './isFavoriteProduct'

export const useToggleButton = (productId: string, key: string) => {
  const isToggled = ref(isExistProduct(productId, key))

  const toggle = () => {
    const favoriteProducts: string[] = JSON.parse(localStorage.getItem(key) || '[]')

    const isFavorite = favoriteProducts.includes(productId)

    if (isFavorite) {
      const updated = favoriteProducts.filter((id) => id !== productId)
      localStorage.setItem(key, JSON.stringify(updated))
    } else {
      const updated = [...favoriteProducts, productId]
      localStorage.setItem(key, JSON.stringify(updated))
    }

    isToggled.value = !isToggled.value
  }

  return { isToggled, toggle }
}

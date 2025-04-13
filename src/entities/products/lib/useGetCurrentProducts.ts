import { ref } from 'vue'
import { getProduct } from '../api'
import type { TProduct } from '@/shared/types'
import { mathSalePrice } from './mathSalePrice'

export const useGetCurrentProducts = (key: string) => {
  const currentProducts = ref<TProduct[]>([])

  const getCurrentProducts = async () => {
    const products = localStorage.getItem(key)
    if (products) {
      const productIds = JSON.parse(products)

      await productIds.forEach((id: string) => {
        getProduct(id).then((res) => {
          if (res) {
            res.discountPrice = +mathSalePrice({
              price: res.price,
              discount: res.discount
            }).toFixed(2)

            currentProducts.value?.push(res)
          }
        })
      })
    }
  }

  return { currentProducts, getCurrentProducts }
}

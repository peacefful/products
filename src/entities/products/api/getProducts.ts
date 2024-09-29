import { http } from '@/shared/api'
import { type TProduct } from '@/shared/types'

export const getProducts = async (): Promise<TProduct[]> => {
  try {
    const products: TProduct[] = (await http.get('/api/v1/products')).data
    return products
  } catch (error) {
    console.log(error)
    return []
  }
}

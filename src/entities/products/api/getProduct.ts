import { http } from '@/shared/api'
import { type TProduct } from '@/shared/types'

export const getProduct = async (id: string): Promise<TProduct | null> => {
  try {
    const product: TProduct = (await http.get(`/api/v1/products/${id}`)).data
    return product
  } catch (error) {
    console.log(error)
    return null
  }
}

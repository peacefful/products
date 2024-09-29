import type { TProduct } from '@/shared/types'
import { mathSalePrice } from './mathSalePrice'

export const handleProducts = (products: TProduct[]): TProduct[] => {
  return products.map((product) => {
    return {
      discountPrice: mathSalePrice({
        price: product.price,
        discount: product.discount
      }).toFixed(2),
      ...product
    }
  }) as TProduct[]
}

import { type TPrice } from '../model/types'

export const mathSalePrice = (product: TPrice): number => {
  return product.price * (1 - product.discount / 100)
}

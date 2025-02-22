import type { TProduct } from '@/shared/types'
import { mathSalePrice } from './mathSalePrice'
import type { SortType, TPrice } from '../model'

const getPivotValue = (product: TProduct, sortType: SortType): number | string => {
  switch (sortType) {
    case 'byPopularity':
      return product.rating
    case 'beforeCheaper':
    case 'beforeMoreExpensive': {
      const productPrice: TPrice = { price: product.price, discount: product.discount }
      return mathSalePrice(productPrice)
    }
    case 'beforeNew':
      return new Date(product.createdAt).getTime()
    case 'byAlphabet':
      return product.title
    default:
      return ''
  }
}

export const quickSort = (arr: TProduct[], sortType: SortType): TProduct[] => {
  if (arr.length <= 1) return arr

  const pivot = getPivotValue(arr[arr.length - 1], sortType)
  const left: TProduct[] = []
  const right: TProduct[] = []

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = getPivotValue(arr[i], sortType)

    if (
      sortType === 'beforeMoreExpensive' || sortType === 'byPopularity' || sortType === 'beforeNew'
        ? currentValue > pivot
        : currentValue < pivot
    ) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left, sortType), arr[arr.length - 1], ...quickSort(right, sortType)]
}

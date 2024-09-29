import { type TProduct } from '@/shared/types'

export type TProductProps = {
  product: TProduct | null | undefined
}

export type TMathStars = {
  starRating: number
  unStarRating: number
}

export type TRating = {
  ratedCount: number
  rating: number
}

export type TPrice = {
  price: number
  discount: number
}

export type TFilterValues = {
  id: number
  title: string
  value: string
}

export type TFilter = {
  filterValues: TFilterValues[]
  currentValue: string
}

export type SortType =
  | 'byPopularity'
  | 'beforeCheaper'
  | 'beforeMoreExpensive'
  | 'beforeNew'
  | 'byAlphabet'

export type TSearch = {
  value: string
  products: TProduct[]
}

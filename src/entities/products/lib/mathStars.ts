import { type TMathStars } from '@/entities/products'

export const mathStars = (rating: number): TMathStars => {
  let starRating = Math.round((rating / 100) * 5)
  let unStarRating = 5 - starRating

  return { starRating, unStarRating }
}

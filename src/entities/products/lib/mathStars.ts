import { type TMathStars } from '@/entities/products'

export const mathStars = (rating: number): TMathStars => {
  let starRating
  let unStarRating

  starRating = Math.round((rating / 100) * 5)
  unStarRating = 5 - starRating

  return { starRating, unStarRating }
}

import { type TMathStars } from '@/entities/products'

export const mathStars = (rating: number): TMathStars => {
  const starRating = Math.round((rating / 100) * 5)
  const unStarRating = 5 - starRating

  return { starRating, unStarRating }
}

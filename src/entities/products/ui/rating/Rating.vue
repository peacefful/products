<template>
  <div class="flex items-center gap-1 mt-2">
    <div v-for="item in starRating" :key="item">
      <FillStarIcon />
    </div>
    <div v-for="item in unStarRating" :key="item">
      <StarIcon />
    </div>
    <p class="text-darkSilver font-medium text-[11px] lg:text-sm">{{ ratedCount }} отзывов</p>
  </div>
</template>

<script setup lang="ts">
import { mathStars } from '@/entities/products'
import { type TRating } from '@/entities/products'
import { FillStarIcon, StarIcon } from '@/shared/assets'

const rating = defineProps<TRating>()

const { unStarRating, starRating } = mathStars(rating.rating)
</script>

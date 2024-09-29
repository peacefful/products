<template>
  <div class="flex items-center gap-1 mt-2">
    <div v-for="item in starRating" :key="item">
      <Icon name="fill-star-icon" />
    </div>
    <div v-for="item in unStarRating" :key="item">
      <Icon name="star-icon" />
    </div>
    <p class="text-darkSilver font-medium text-[11px] lg:text-sm">{{ ratedCount }} отзывов</p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui'
import { mathStars } from '@/entities/products'
import { type TRating } from '@/entities/products'

const rating = defineProps<TRating>()

const { unStarRating, starRating } = mathStars(rating.rating)
</script>

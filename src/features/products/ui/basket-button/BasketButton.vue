<template>
  <Button
    @click="toggleBasket"
    :class="{
      'bg-green-400': isToggled
    }"
    class="h-11 bg-default mt-3 w-full lg:w-11 lg:mt-0"
  >
    <SuccessIcon v-if="isToggled" />
    <BasketIcon v-else />
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui'
import { BasketIcon } from '@/shared/assets'
import { isExistProduct } from '@/entities/products'
import { SuccessIcon } from '@/shared/assets'
import { ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const isToggled = ref(isExistProduct(props.id, 'basketProducts'))

const toggleBasket = () => {
  const key = 'basketProducts'
  const favoriteProducts: string[] = JSON.parse(localStorage.getItem(key) || '[]')

  const isFavorite = favoriteProducts.includes(props.id)

  if (isFavorite) {
    const updated = favoriteProducts.filter((id) => id !== props.id)
    localStorage.setItem(key, JSON.stringify(updated))
  } else {
    const updated = [...favoriteProducts, props.id]
    localStorage.setItem(key, JSON.stringify(updated))
  }

  isToggled.value = !isToggled.value
}
</script>

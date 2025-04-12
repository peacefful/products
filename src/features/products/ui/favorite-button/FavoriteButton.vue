<template>
  <Button
    @click="toggleFavorite"
    class="h-11 w-11 rounded-full bg-[#5454544D] absolute top-1 right-1"
  >
    <SelectFavoriteIcon v-if="isToggled" />
    <SilverFavoriteIcon v-else />
  </Button>
</template>

<script setup lang="ts">
import { SilverFavoriteIcon } from '@/shared/assets'
import { SelectFavoriteIcon } from '@/shared/assets'
import { Button } from '@/shared/ui'
import { isFavoriteProduct } from '@/entities/products'
import { ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const emit = defineEmits<{
  (e: 'deleteProductById'): void
}>()

const isToggled = ref(isFavoriteProduct(props.id))

const toggleFavorite = () => {
  const key = 'favoriteProducts'
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

  emit('deleteProductById')
}
</script>

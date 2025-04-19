<template>
  <Button @click="toggleFavorite" class="bg-[#2667FF1F] w-[70px] h-[60px]">
    <SelectedFavoriteProductPageIcon v-if="isToggled" class="p-1" />
    <FavoriteIcon v-else class="p-1" />
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui'
import { FavoriteIcon, SelectedFavoriteProductPageIcon } from '@/shared/assets'
import { useToggleButton } from '@/entities/products'

const props = defineProps<{
  id: string
}>()

const { isToggled, toggle: toggleFavorite } = useToggleButton(props.id, 'favoriteProducts')
</script>

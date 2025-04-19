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
import { isExistProduct } from '@/entities/products'
import { ref } from 'vue'
import { useToggleButton } from '@/entities/products'

const props = defineProps<{
  id: string
}>()

const { isToggled, toggle: toggleFavorite } = useToggleButton(props.id, 'favoriteProducts')

</script>

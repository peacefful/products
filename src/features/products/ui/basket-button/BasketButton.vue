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
import { isExistProduct, useToggleButton } from '@/entities/products'
import { SuccessIcon } from '@/shared/assets'
import { ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const { isToggled, toggle: toggleBasket } = useToggleButton(props.id, 'basketProducts')
</script>

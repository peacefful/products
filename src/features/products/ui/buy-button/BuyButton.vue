<template>
  <Button
    :class="{
      'bg-green-400': isToggled
    }"
    @click="buyProduct"
    class="text-2xl bg-default"
  >
    {{ isToggled ? 'В корзине' : 'В корзину' }}
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui'
import { useModalStore, useToggleButton } from '@/entities/products'
import { isExistProduct } from '@/entities/products'

const props = defineProps<{
  id: string
}>()

const { openModal } = useModalStore()

const { isToggled, toggle: toggleBasket } = useToggleButton(props.id, 'basketProducts')

const buyProduct = () => {
  if (!isExistProduct(props.id, 'basketProducts')) openModal()
  toggleBasket()
}
</script>

<template>
  <div class="category">
    <p class="category-text">Смартфоны и гаджеты</p>
    <Icon name="arrow-icon" />
    <p class="category-text">Смартфоны</p>
    <Icon v-if="product" name="arrow-icon" />
    <div class="category" v-if="product">
      <p class="category-text">{{ product }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui'

type TCategory = {
  product: string | undefined
}

defineProps<TCategory>()
</script>

<style scoped lang="scss">
@import url('./style.module.scss');
</style>

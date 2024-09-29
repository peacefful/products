<template>
  <div class="category">
    <p class="category-text">Смартфоны и гаджеты</p>
    <ArrowIcon />
    <p class="category-text">Смартфоны</p>
    <ArrowIcon v-if="product" />
    <div class="category" v-if="product">
      <p class="category-text">{{ product }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowIcon } from '@/shared/assets'

type TCategory = {
  product: string | undefined
}

defineProps<TCategory>()
</script>

<style scoped lang="scss">
@import url('./style.module.scss');
</style>

<template>
  <main class="wrapper">
    <h1 class="text-4xl font-medium">Корзина</h1>
    <ProductsList v-if="basketProducts.length" :filtered-products="basketProducts" />
    <p class="mt-12" v-else>Вы ничего не добавили в корзину</p>
  </main>
</template>

<script setup lang="ts">
import { useGetCurrentProducts } from '@/entities/products'
import { ProductsList } from '@/widgets/products-list'

const { getCurrentProducts, currentProducts: basketProducts } =
  useGetCurrentProducts('basketProducts')

getCurrentProducts()
</script>

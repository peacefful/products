<template>
  <main class="wrapper">
    <h1 class="text-4xl font-medium">Избранное</h1>
    <ProductsList v-if="favoriteProducts.length" :filtered-products="favoriteProducts" />
    <p class="mt-12" v-else>Вы ничего не добавили в избранное</p>
  </main>
</template>

<script setup lang="ts">
import { ProductsList } from '@/widgets/products-list'
import { useGetCurrentProducts } from '@/entities/products'

const { getCurrentProducts, currentProducts: favoriteProducts } =
  useGetCurrentProducts('favoriteProducts')

getCurrentProducts()
</script>

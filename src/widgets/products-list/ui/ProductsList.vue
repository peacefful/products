<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-items-center sm:justify-items-start"
  >
    <div v-for="product in productsStore.displayedProducts" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from '@/entities/products'
import { getProducts } from '@/entities/products'
import { useCheckHeightScreen } from '@/entities/products'
import { useProductsStore } from '@/entities/products'
import { handleProducts } from '@/entities/products'

const productsStore = useProductsStore()

useCheckHeightScreen(productsStore.loadMoreItems)

if (!productsStore.allProducts.length) {
  getProducts().then((res) => {
    productsStore.allProducts = handleProducts(res)
    productsStore.loadMoreItems()
  })
}
</script>

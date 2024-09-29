<template>
  <div v-if="productsStore.filteredProducts.length" class="product-list">
    <div
      v-for="(product, index) in productsStore.filteredProducts"
      :key="`filtered-${product.id}-${index}`"
    >
      <ProductCard :product="product" />
    </div>
  </div>
  <div v-else class="product-list">
    <div
      v-for="(product, index) in productsStore.displayedProducts"
      :key="`displayed-${product.id}-${index}`"
    >
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

<style scoped lang="scss">
@import url('./styles.modules.scss');
</style>
